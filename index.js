// TODO: Include packages needed for this application
import Inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of what your project does',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Does anything need to be installed? If so, please list.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Are there any instructions that should be followed?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Did anyone work with you? Did you have any third-party help? If so please list their information.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Does this need a specific license?'
    },
];

// TODO: Create a function to write README file
function writeReadMe(data) {
const content = generateMarkdown(data);

    fs.writeFile('README.md', content, (err) => {
        if (err) {
            console.error('Error writing the README file:', err);
        } else {
            console.log('README file has been created successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    Inquirer.prompt(questions)
    .then((answers) => {
        writeReadMe(answers);
    })
    .catch((error) => {
        console.error('Error initializing:', error);
    })
}

// Function call to initialize app
init();
