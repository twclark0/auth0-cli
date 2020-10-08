const chalk = require("chalk");
const figlet = require("figlet");

const auth0 = chalk.hex("#eb5424");
const asciiArt = figlet.textSync("Auth0  CLI", {
    horizontalLayout: "default",
});
module.exports = () => {
    console.log(auth0("---------------------------------------------------"));
    console.log(auth0(asciiArt));
    console.log(auth0("---------------------------------------------------"));
};