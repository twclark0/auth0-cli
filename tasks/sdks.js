const inquirer = require("inquirer");
const opn = require("opn");

const sdks = [{
        name: "Single Page Application",
        url: "https://auth0.com/docs/libraries/auth0-single-page-app-sdk",
        aliasses: ["spa", "js"],
    },
    {
        name: "React",
        url: "https://auth0.com/docs/libraries/auth0-react",
        aliasses: ["react", "reactjs", "react.js"],
    },
    {
        name: "Angular",
        url: "https://auth0.com/docs/libraries/auth0-angular-spa",
        aliasses: ["angular", "angularjs", "angular.js"],
    },
    {
        name: "Lock for the web",
        url: "https://auth0.com/docs/libraries/lock",
        aliasses: ["lock", "lockjs", "lock.js"],
    },
    {
        name: "Lock for iOS",
        url: "https://auth0.com/docs/libraries/lock-swift",
        aliasses: ["ios", "swift"],
    },
    {
        name: "Lock for Android",
        url: "https://auth0.com/docs/libraries/lock-android",
        aliasses: ["android"],
    },
];

function prompt() {
    const questions = [{
        name: "sdk",
        type: "list",
        message: "For which SDK would you like to open the documentation?",
        choices: sdks.map((sdk) => sdk.name),
        loop: true,
    }, ];
    return inquirer.prompt(questions);
}

function openDocs(sdkName) {
    const normalizedSdkName = sdkName.toLowerCase();
    const sdk = sdks.find((sdk) => {
        if (sdk.name.toLowerCase() === normalizedSdkName) {
            return true;
        } else if (sdk.aliasses.includes(normalizedSdkName)) {
            return true;
        }

        return false;
    });

    console.log("→ Opening the SDK documentation in your browser");

    if (sdk) {
        return opn(sdk.url);
    }

    return opn("https://support.auth0.com");
}

module.exports = (cli) => {
    return cli
        .command("sdk [sdk]")
        .description("Open the documentation for a specific Auth0 SDK")
        .action(async(sdkName) => {
            if (sdkName) {
                return openDocs(sdkName);
            }

            const { sdk } = await prompt();
            return openDocs(sdk);
        });
};