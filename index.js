const fs = require("fs");
const inquirer = require("inquirer");
const generateReadMe = function(data) {
    return `# ${data.title}
    ---
    
    ![${data.license}](https://img.shields.io/badge/license-${data.license}-green) This project is licensed under the ${data.license} license.

    ## Table of Contents
    1.[Installation](#installation)
    2.[Description](#description)
    3.[Installation](#installation)
    4.[Usage Information](#usage information)
    5.[Contribution](#contribution)
    6.[Test](#test)
    7.[Questions](#questions)
    
    ## Description
    ${data.description}
    
    ## Installation
    ${data.install}
    
    ## Usage Information
    ${data.usage}
    
    ## Contribution
    ${data.contribution}
    
    ## Test
    ${data.test}
    
    ## Questions
    ${data.questions}`
};

inquirer
    .prompt([
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
        },

])
.then((data) => {
    const readMeTxt = generateReadMe(answers);

    fs.writeFile('README.md', readMeTxt, (err) =>
    err ? console.log(err) : console.log('README file has been created')
    );
});