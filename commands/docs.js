const opn = require("opn");
const cli = require("../utils/cli");

module.exports = () => {
    return cli
        .command("docs")
        .description("Open the documentation")
        .action(() => {
            console.log("→ Opening the Auth0 documentation in your browser");
            return opn("https://support.auth0.com/");
        });
};