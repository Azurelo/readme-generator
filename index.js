// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js")
const inquirer = require("inquirer");
const fs = require("fs");
let filename = "README.md";
// TODO: Create an array of questions for user input
const questionsArray = [
    {
        type: "input",
        name: "title",
        message: "What is the title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "link",
        message: "What is the link to your deployed application?"
    }, 
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project if applicable?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use here."
    },
    {
        type: "input",
        name: "projectImage",
        message: "Add an image to the image folder then enter the image name here."
    },    
    {
        type: "input",
        name: "projectVideo",
        message: "Add a video link to showcase a demo of your project."
    },  
    {
        type: "input",
        name: "tests",
        message: "Provide what tests were implemented for the project's success."
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "list",
        name: "license",
        message: "What license is placed on this project?",
        choices: ["Apache","BSD-3","GPL","MIT", "Unlicense", "No License"]
    }];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) =>
    err ? console.error(err) : console.log("You successfully created a README.md file."))
};
// TODO: Create a function to initialize app
function init(){
    inquirer.prompt(questionsArray)
    .then(function(response){
    var myMarkdown = generateMarkdown(response);
    writeToFile(filename, myMarkdown);
    });
};

// Function call to initialize app
init();
