#!/usr/bin/env node

const clear = require("clear");
const opn = require("opn");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");

clear();

console.log(
  chalk.black(figlet.textSync("Auth0", { horizontalLayout: "full" }))
);

function prompt() {
  const questions = [
    {
      name: "support",
      type: "list",
      message: "What can we help you with today?",
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return "Please enter your username or e-mail address.";
        }
      },
      choices: ["support", "react", "angular", "node"],
      loop: true
    }
  ];
  return inquirer.prompt(questions);
}

prompt().then(({ support }) => {
  if (support === "angular") {
    opn("https://auth0.com/docs/quickstart/spa/angular");
  } else if (support === "react") {
    opn("https://auth0.com/docs/quickstart/spa/react");
  } else {
    opn("https://support.auth0.com/");
  }
});
