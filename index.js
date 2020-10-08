#!/usr/bin/env node

const commander = require("commander");

const docs = require("./tasks/docs");
const blog = require("./tasks/blog");
const sdks = require("./tasks/sdks");
const newsletter = require("./tasks/newsletter");

const printHeader = require("./utils/header");

// Configure CLI commands and options
const cli = new commander.Command();
docs(cli);
blog(cli);
sdks(cli);
newsletter(cli);

// Print header
printHeader();

// Start CLI
cli.parse(process.argv);