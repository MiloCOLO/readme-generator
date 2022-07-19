// TODO: Include packages needed for this application
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username?", "What is your email address?", "What license do you want?", "What is the title of your project?"];

// TODO: Create a function to write README file
inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "license",
            message: "What license do you want?",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        }
    ])

function writeToFile(fileName, data) {
    for (let questions = 0; questions < array.length; questions++) {
        const element = array[questions];
        
    }
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
