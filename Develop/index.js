// node modules
const fs = require("fs");
const util = require("util");

// 3rd party modules
const inquirer = require("inquirer");

const api = require("./utils/api.js");
const markdown = require("./utils/generateMarkdown.js");

const questions = [
    {
    type: "input",
    name: "name",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "list",
    name: "badge",
    message: "What type of badge would you like added?",
    choices: ["Apache", "BSD", "Creative Commons", "Eclipse", "GNU", "IBM", "ISC", "MIT", "Mozilla"]
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
}
];


const writeToFile = util.promisify(fs.writeFile);

function init() {
    inquirer.prompt(questions)

        .then(submission => {
            return api.getUser(submission)
            .then(user => {

                return markdown(submission, user.data);
            })
        })
        .then(results => {
            return writeToFile("NEWREADME.md", results);

        })
        .catch(error => {
            console.log(error);
            return;
        })
}

init();
