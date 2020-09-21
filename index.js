#!/usr/bin/env node

const clear = require("clear");
const args = require("minimist")(process.argv.slice(2));
const opn = require("opn");

clear();

const text = args["_"][0];

if (text === "angular") {
  opn("https://auth0.com/docs/quickstart/spa/angular");
} else if (text === "react") {
  opn("https://auth0.com/docs/quickstart/spa/react");
} else {
  opn("https://support.auth0.com/");
}
