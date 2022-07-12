// TODO: Include packages needed for this application
// fs will write to files and inquirer will ask the prompts and save the answers
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// Layout of the readme file with a parameter for data
const generateReadMe = function(data) {
    return `# ${data.title}

    ## Table of Contents
    1. [Installation](#installation)
    2. [Description](#description)
    3. [Installation](#installation)
    4. [Usage Information](#usage-information)
    5. [Contribution](#contribution)
    6. [Test](#test)
    7. [Questions](#questions)
    
    # Description
    ${data.description}
    
    # Installation
    ${data.install}
    
    # Usage Information
    ${data.usage}
    
    # Contribution
    ${data.contribution}
    
    # Test
    ${data.test}
    
    # Questions
    ${data.questions}`
};

// Questions for the inquirer prompt. It then saves the answers in the array
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter a title."
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description."
    },
    {
        type: "input",
        name: "install",
        message: "Please enter installation instructions."  
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information."
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter contributuion information."
    },
    {
        type: "input",
        name: "test",   
        message: "Please enter testing instructions."
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter any questions"
    },
    {
        type: "list",
        name: "license",
        message: "What license should you have?",
        choices: [
            "MIT",
            "APACHE",
            "GPL",
            "BSD",
            "NONE"
        ]
    },
    {
        type: "input",
        name: "gitHub",
        message: "Please enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    }];

// TODO: Create a function to write README file
// Will run inquirer prompt for the answers .then will use those answers and insert the answers into the generateReadMe layout and will print the file named
// README.txt to the Develop file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readMeTxt = generateReadMe(answers);

            fs.writeFile("README.md", readMeTxt, (err) =>
            err ? console.log(err) : console.log("README file has been created."))
        })};


// TODO: Create a function to initialize app
// Simply initializing the writeToFile function
function init() {
    writeToFile();
}

// Function call to initialize app
init();
