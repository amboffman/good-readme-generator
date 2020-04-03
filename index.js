// node modules
const fs = require("fs");
const util = require("util");

// 3rd party modules
const axios = require("axios")
const { Octokit } = require("@octokit/rest");
const inquirer = require("inquirer");

// promise constructors
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);


// creates readme
async function createReadMe() {

    try {
        const authorInfo = await fetchGitHubData();

        await writeFileAsync("GOODREADME.md", authorInfo);
        console.log("Awesome! We've got your README started as GOODREADME.md. Now, tell us about your project.");

        const content = await inquireProjectInfo();


        await writeFileAsync("GOODREADME.md", content);
        await appendFileAsync("GOODREADME.md", authorInfo);
        console.log("Your readme is all set!");
    }
    catch (err) {
        console.log(err);
    }
}

// get more project info
function inquireProjectInfo() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "badgeLabel",
            message: "What label do you want on your project badge?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project."
        },
        {
            type: "input",
            name: "installation",
            message: "What is the installation process?"
        },
        {
            type: "input",
            name: "usage",
            message: "How does someone use your project?"
        },
        {
            type: "input",
            name: "license",
            message: "What is the license for the project?"
        },
        {
            type: "input",
            name: "contributing",
            message: "What are the guidelines for contributing?"
        },
        {
            type: "input",
            name: "tests",
            message: "What are examples of how you run tests?"
        },
    ])
        .then(submission => {
            const title = submission.title;
            const description = submission.description;
            const installation = submission.installation;
            const usage = submission.usage;
            const license = submission.license;
            const contributing = submission.contributing;
            const tests = submission.tests;
            const markdown = `# ${title}
https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>            
${ description}

## Table of Contents
1. Installation
1. Usage
1. Contributing
1. Tests
1. License
1. Questions

## Installation
${ installation}

## Usage
${ usage}

## Contributing
${ contributing}

## Tests
${ tests}

## License
${ license}

`
            return markdown;
        })
}

// ask for username and fetch data
function fetchGitHubData() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your GitHub username?"
        }
    ])
        .then(submission => {
            const username = submission.name;
            const url = (`https://api.github.com/users/${username}`);
            return axios.get(url);
        })
        .then(results => {
            const avatarURL = results.data.avatar_url;
            const email = results.data.email;
            const markdown =
                `## Questions? Contact Me!
![Photo of Author](${ avatarURL})
Email: ${ email}`
            return markdown;
        })
}

createReadMe();


// install octokit/rest
// retrieve their email
// retrieve their profile image