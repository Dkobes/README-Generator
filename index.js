// TODO: Include packages needed for this application
import Inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of what your project does',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Does anything need to be installed? If so, please list.',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Are there any instructions that should be followed?',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Did anyone work with you? Did you have any third-party help? If so please list their information.',
    },
    {
        type: 'input',
        name: 'License',
        message: 'Does this need a specific license?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
