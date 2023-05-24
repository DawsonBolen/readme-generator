// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title"
    },
    {
        type: "input",
        name: "description",
        message: "Description"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage"
    },
    {
        type: "input",
        name: "contribution",
        message: "Contribution"
    },
    {
        type: "input",
        name: "testing",
        message: "Testing"
    },
    {
        type: "list",
        name: "license",
        message: "License",
        choices: ['MIT', 'GPL', 'Apache', 'N/A']
    },
    {
        type: "input",
        name: "github",
        messsage: "enter Github username",
        validate:(value) => {if(value){return true} else {return 'You need to enter your Github username'}}
    },
    {
        type: "input",
        name: "email",
        message: "enter email",
        validate: (value) => {if(value){return true} else {return 'You need to enter your Github email'}}
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(__dirname, fileName), data)
}

// TODO: Create a function to initialize app
async function init() {
    
    const answers = await inquirer.prompt(questions);
        const markDownText = generateMarkdown(answers);
        writeToFile('README.md', markDownText);
}

// Function call to initialize app
init();
