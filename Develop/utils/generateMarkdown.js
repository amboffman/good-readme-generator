// TODO: Return markdown string for README file given a data object.
function generateMarkdown(submission, data) {
  const badge = selectBadge();
  return `
# ${ submission.title}
${ badge}            
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
function selectBadge(){
  if(submission.badge === "Apache"){
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(submission.badge === "BSD"){
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if(submission.badge === "Creative Commons"){
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  else if(submission.badge === "Eclipse"){
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else if(submission.badge === "GNU"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if(submission.badge === "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  else if(submission.badge === "ISC"){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  else if(submission.badge === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(submission.badge === "Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
}
}

module.exports = generateMarkdown;
