const inquirer = require("inquirer");

function prompt() {
    const questions = [{
            name: "name",
            type: "input",
            message: "What is your name",
        },
        {
            name: "email",
            type: "input",
            message: "What is your email address",
        },
    ];
    return inquirer.prompt(questions);
}

async function subscribeToNewsletter() {
    const { name, email } = await prompt();
    console.log(`→ Thank you for subscribing ${name}`);
    // @todo: Do the actual subscribe
}

module.exports = (cli) => {
    cli
        .command("newsletter")
        .description("Subscribe to the Zero Index newsletter.")
        .action(subscribeToNewsletter);
};