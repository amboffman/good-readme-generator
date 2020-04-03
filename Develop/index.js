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
const questions = [];

// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
// writeToFile(fileName, data) {
// console.log("File created.");
// }
const writeToFile = util.promisify(fs.writeFile);

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your GitHub username?"
        }
    ])
        .then(submission => {
            const username = submission.name;
            return api.getUser(username);
        })
        .then(user => {
            const info = user.data
            return markdown(info);
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
