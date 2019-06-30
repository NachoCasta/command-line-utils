#!/usr/bin/env node

const fs = require("fs");
const Handlebars = require("handlebars");
const ArgumentParser = require("argparse").ArgumentParser;

const createComponent = (name, noTestFiles = false) => {
	const folderName = `./${name}`;
	if (fs.existsSync(folderName)) {
		throw new Error("Componente ya existe.");
	}
	fs.mkdirSync(folderName);
	console.log("Folder created succesfully");
	fs.readdirSync(__dirname + "/templates/Component").forEach(templateName => {
		if (templateName.endsWith("test.js") && noTestFiles) {
			return;
		}
		const fileName = Handlebars.compile(templateName)({ Component: name });
		const fileTemplate = fs
			.readFileSync(__dirname + `/templates/Component/${templateName}`)
			.toString();
		const fileContent = Handlebars.compile(fileTemplate)({
			Component: name
		});
		fs.writeFileSync(`./${name}/${fileName}`, fileContent);
		console.log(`${fileName} created succesfully.`);
	});
};

const parser = new ArgumentParser({
	version: "0.0.1",
	addHelp: true,
	description: "Argparse example"
});
parser.addArgument("name", {
	help: "Name of the component."
});
parser.addArgument(["-nt", "--noTests"], {
	action: "storeTrue",
	default: false
});

const args = parser.parseArgs();

const { name, noTests } = args;

createComponent(name, noTests);
