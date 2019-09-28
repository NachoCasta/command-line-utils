#!/usr/bin/env node

const fs = require("fs");
const Handlebars = require("handlebars");
const { getFileContent, fillTemplate } = require("./utils");

const createTemplate = (templatePath, destinationPath, vars) => {
    fs.readdirSync(templatePath).forEach(element => {
        const elementTemplatePath = templatePath + "/" + element;
        const elementDestionationPath = fillTemplate(
            destinationPath + "/" + element,
            vars
        );
        const isFolder = fs.lstatSync(elementTemplatePath).isDirectory();
        // Si es carpeta, la crea y usa la función recursivamente en ella
        if (isFolder) {
            if (!fs.existsSync(elementDestionationPath)) {
                fs.mkdirSync(elementDestionationPath);
                console.log(elementDestionationPath + "created.");
            }
            createTemplate(elementTemplatePath, elementDestionationPath, vars);
        }
        // Si es archivo, crea el archivo correspondiente
        else {
            if (fs.existsSync(elementDestionationPath)) {
                throw new Error(elementDestionationPath + " ya existe.");
            }
            const fileContent = fillTemplate(
                getFileContent(elementTemplatePath),
                vars
            );
            fs.writeFileSync(elementDestionationPath, fileContent);
            console.log(elementDestionationPath + "created.");
        }
    });
};

module.exports = createTemplate;
