// TODO: import fs, path and inquirer modules
// node modules
const fs = require("fs");
const util = require("util");

// 3rd party modules
const inquirer = require("inquirer");

// promise constructors
const appendFileAsync = util.promisify(fs.appendFile);

// TODO: import api and generateMarkdown modules from ./utils/
const api = require("./utils/api.js");
const markdown = require("./utils/generateMarkdown.js");

// TODO: Add inquirer question objects to questions array. This should
// include all the necessary questions for the user.
// Example question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?"
// }
const questions = [{
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
}
];

// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
const writeToFile = util.promisify(fs.writeFile);
// function writeToFile(fileName, data) {
// };

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {
    inquirer.prompt(questions)

        .then(submission => {
            return api.getUser(submission)
            .then(user => {
                // const info = user.data
                // console.log(info)
                return markdown(submission, user.data);
            })
        })
        .then(results => {
            console.log(results);
            return writeToFile("NEWREADME.md", results);

        })
        .catch(error => {
            console.log(error);
            return;
        })
}

init();
