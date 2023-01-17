// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js")
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        question: "What is the title?"
    },
    {
        quesiton: "What is the description of your project?"
    },
    {
        quesiton: "What is the link to your deployed application?"
    }, 
    {
        question:
    },
    {

    }];

// TODO: Create a function to write README file
function writeToFile("READ.me", data) {
    

}

// TODO: Create a function to initialize app
function init() {
    generateMarkdown();

}

// Function call to initialize app
init();
