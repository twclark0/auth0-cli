const opn = require("opn");
const cli = require("../utils/cli");

module.exports = () => {
    return cli
        .command("blog")
        .description("Open the Auth0 blog")
        .action(() => {
            console.log("→ Opening the Auth0 blog in your browser");
            return opn("https://auth0.com/blog");
        });
};