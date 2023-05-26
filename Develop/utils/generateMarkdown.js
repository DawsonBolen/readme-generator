// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if(license === 'Gpl') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if(license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
     return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/mit-0.txt'
  } else if(license === 'Gpl') {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/lgpl-3.0.txt'
  } else if(data.license === 'Apache') {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/apache-2.0.txt'
  } else {
    return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseLink(license);
  renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License
${data.license}
${renderLicenseBadge(data.license)} <br>
${renderLicenseLink(data.license)}




## description
${data.description}

## installation
${data.installation}

## usage
${data.usage}

## contribution 
${data.contribution}

## testing
${data.testing}


## About

email: ${data.email}
github: ${data.github}

`;
}

module.exports = generateMarkdown;

//