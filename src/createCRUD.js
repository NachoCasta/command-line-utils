#!/usr/bin/env node

const fs = require("fs");
const ArgumentParser = require("argparse").ArgumentParser;
const createTemplate = require("./createTemplate");
const { mayus, getFileContent } = require("./utils");

const createComponent = name => {
    const srcDir = "./src";
    const singular = name.substring(0, name.length - 1).toLowerCase();
    const plural = name.toLowerCase();
    const vars = {
        singular,
        Singular: mayus(singular),
        SINGULAR: singular.toUpperCase(),
        plural,
        Plural: mayus(plural),
        PLURAL: plural.toUpperCase()
    };
    const templatePath = __dirname + "/templates/CRUD";
    // Creamos template.
    createTemplate(templatePath, srcDir, vars);

    // Agregamos las configuraciones faltantes:

    // routes/index.js
    {
        const routesPath = `${srcDir}/routes/index.js`;
        const lines = getFileContent(routesPath).split("\n");
        // import line
        const importString = `import ${vars.Plural} from "./${vars.plural}";`;
        for (var i = 0; i < lines.length; i++) {
            if (!lines[i].includes("import")) {
                lines.splice(i, 0, importString);
                break;
            }
        }
        // Route line
        const routeString = `                    <Route path="/${vars.plural}" component={${vars.Plural}} />`;
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].includes('<Route path="" component={NotFound} />')) {
                lines.splice(i, 0, routeString);
                break;
            }
        }
        fs.writeFileSync(routesPath, lines.join("\n"));
    }

    // utils/hooks/index.js
    {
        const hooksIndexPath = `${srcDir}/utils/hooks/index.js`;
        const exportString = `export * from "./use${vars.Plural}";\n`;
        fs.appendFileSync(hooksIndexPath, exportString);
    }

    // reducers.js
    {
        const reducersPath = `${srcDir}/reducers.js`;
        const lines = getFileContent(reducersPath).split("\n");
        // import line
        const importString = `import * as ${vars.Plural} from "components/${vars.Plural}";`;
        for (var i = 0; i < lines.length; i++) {
            if (!lines[i].includes("import")) {
                lines.splice(i, 0, importString);
                break;
            }
        }
        // reducers entry line
        const entryString = `    ${vars.plural}: ${vars.Plural}`;
        for (var i = 0; i < lines.length; i++) {
            if (lines[i] == "};") {
                lines.splice(i - 1, 1, lines[i - 1] + ",");
                lines.splice(i, 0, entryString);
                break;
            }
        }
        fs.writeFileSync(reducersPath, lines.join("\n"));
    }
};

const parser = new ArgumentParser({
    version: "1.1.0",
    addHelp: true,
    description: "Personal command line utilities"
});
parser.addArgument("name", {
    help: "Name of the component (must be in plural)."
});

const args = parser.parseArgs();

const { name } = args;

createComponent(name);
