// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data) {
  return `

## Questions? Contact Me!
![Photo of Author](${ data.avatar_url})
Email: ${ data.email}
`;
}

module.exports = generateMarkdown;
// # ${ data.title}
// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>            
// ${ data.description}

// ## Table of Contents
// 1. Installation
// 1. Usage
// 1. Contributing
// 1. Tests
// 1. License
// 1. Questions

// ## Installation
// ${ installation}

// ## Usage
// ${ usage}

// ## Contributing
// ${ contributing}

// ## Tests
// ${ tests}

// ## License
// ${ license}
