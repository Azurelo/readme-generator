// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return '[![License](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl.html)';
    case 'MIT':
      return '[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)';
    default:
      return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    return `https://opensource.org/licenses/${license}`;
  }
  else return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    let licenseBadge = renderLicenseBadge(license);
    let licenseLink = renderLicenseLink(license);
    return `${licenseBadge}${licenseLink}`;
  }
  else return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license);


  return `# ${data.title}

## Description
${data.description}

## 📝 Table of Contents
- <a href="#description">Description</a>
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#contributors">Contributors</a>
- <a href="#license">License</a>


## Link
${data.link}

## Contributors
${data.contributors}

## Usage
${data.usage}

## Installation
${data.installation}

## License
${licenseSection}
`;
}

module.exports = generateMarkdown;
