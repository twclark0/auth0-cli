#!/usr/bin/env node

const docs = require("./commands/docs");
const blog = require("./commands/blog");
const sdks = require("./commands/sdks");
const newsletter = require("./commands/newsletter");
const printHeader = require("./utils/header");
const cli = require("./utils/cli");

// Configure CLI commands and options
docs();
blog();
sdks();
newsletter();

// Print header
printHeader();

// Start CLI
cli.parse(process.argv);