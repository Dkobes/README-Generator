// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  let badge = "";
  switch (license) {
    case "Apache 2.0":
      badge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GPLv3":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      badge = "";
      break;
  }

  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  let link ="";
  switch (license) {
    case "Apache 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "MIT":
      link ="https://opensource.org/licenses/MIT";
      break;
    case "GPLv3":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    default:
      link = "";
      break;
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ""; 
  }

  return `## License
  ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Credits](#credits)
  5. [License](#license)
  6. [Features](#features)
  7. [Badges](#badges)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  Video on how to use application: https://drive.google.com/file/d/16ox0YeVCS5UC-6LUx35yBJW1g92Vmnr4/view

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Features
  ${data.features}

  ## Badges
  ${data.badges}
`;
}

export default generateMarkdown;
