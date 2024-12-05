// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 

// TODO: Create an array of questions for user input
const questions = [
   {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
   },
   {
    type: 'input',
    name: 'description',
    message: 'Why did you build this project?',
   },
   {
    type: 'input',
    name: 'description',
    message: 'Did you learn anything while building?',
   },
   {
    type: 'input',
    name: 'install',
    message: 'Are there any steps needed to install your project?',
   },
   {
    type: 'input',
    name: 'usage',
    message: 'Are there instructions needed on how to use your project?',
   },
   {
    type: 'input',
    name: 'credit',
    message: 'Did you collaborate with anyone?',
   },
   {
    type: 'input',
    name: 'license',
    message: 'Did you use any license?',
   }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
