#!/usr/bin/env node

const fs = require("fs");
const Handlebars = require("handlebars");
const ArgumentParser = require("argparse").ArgumentParser;

const createComponent = (
	name,
	folderName,
	noTestFiles = false,
	noReducer = false
) => {
	const folderPath = folderName ? `./${folderName}` : `./${name}`;
	if (fs.existsSync(folderPath)) {
		throw new Error("Componente ya existe.");
	}
	fs.mkdirSync(folderPath);
	console.log("Folder created succesfully");
	fs.readdirSync(__dirname + "/templates/Component").forEach(templateName => {
		if (templateName.endsWith("test.js") && noTestFiles) {
			return;
		}
		if (templateName.endsWith("Reducer.js") && noReducer) {
			return;
		}
		const fileName = Handlebars.compile(templateName)({ Component: name });
		const fileTemplate = fs
			.readFileSync(__dirname + `/templates/Component/${templateName}`)
			.toString();
		let fileContent = Handlebars.compile(fileTemplate)({
			Component: name
		});
		if (templateName === "index.js" && noReducer) {
			fileContent = fileContent.split("\n")[0];
		}
		fs.writeFileSync(`${folderPath}/${fileName}`, fileContent);
		console.log(`${fileName} created succesfully.`);
	});
};

const parser = new ArgumentParser({
	version: "1.1.0",
	addHelp: true,
	description: "Argparse example"
});
parser.addArgument("name", {
	help: "Name of the component."
});
parser.addArgument(["-fn", "--folderName"], {
	help: "Folder name.",
	default: undefined
});
parser.addArgument(["-nt", "--noTests"], {
	action: "storeTrue",
	default: false,
	help: "If present, test files are not created."
});
parser.addArgument(["-nr", "--noReducer"], {
	action: "storeTrue",
	default: false,
	help: "If present, reducer file is not created."
});

const args = parser.parseArgs();

const { name, folderName, noTests, noReducer } = args;

createComponent(name, folderName, noTests, noReducer);
