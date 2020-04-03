// TODO: Return markdown string for README file given a data object.
function generateMarkdown(submission, data) {
  return `
# ${ submission.title}
https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>            
${ submission.description}
  
## Table of Contents
1. Installation
1. Usage
1. Contributing
1. Tests
1. License
1. Questions
  
## Installation
${ submission.installation}
  
## Usage
${ submission.usage}
  
## Contributing
${ submission.contributing}
  
## Tests
${ submission.tests}
  
## License
${ submission.license}
  
## Questions? Contact Me!
![Photo of Author](${ data.avatar_url})
Email: ${ data.email}
`
}

module.exports = generateMarkdown;
