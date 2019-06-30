#!/usr/bin/env node

var ArgumentParser = require("argparse").ArgumentParser;
var parser = new ArgumentParser({
	version: "0.0.1",
	addHelp: true,
	description: "Argparse example"
});
parser.addArgument("name", {
	help: "Name of the component."
});
var args = parser.parseArgs();
console.dir(args);

console.log("Hello World");

const test = () => console.log("test");

test();
