#!/usr/bin/env node

const fs = require("fs");
const Handlebars = require("handlebars");

function mayus(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getFileContent(path) {
    return fs.readFileSync(path).toString();
}

function fillTemplate(string, vars) {
    return Handlebars.compile(string)(vars);
}
module.exports = { mayus, getFileContent, fillTemplate };
