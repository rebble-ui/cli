#!/usr/bin/env node

import pkg from "../package.json";

const printHelp = (args: string[]) => {
    if(args.length == 0) {
        console.log("Usage: rebbleui [options] [command]\n");
        
        console.log("Options:");
        console.log("  -h, --help     Display help for command");
        console.log("  -v, --version  Output the version number\n");

        console.log("Commands:");
        console.log("  init [options] [components...]  Initialize a new project with the specified components.");
        console.log("  add [options] [components...]   Add components to an existing project.");
        console.log("  help [command]                  Display help for command\n");
    }
}

async function main() {
    const args = process.argv.slice(2);

    if(args.length == 0 || args.includes("-h") || args.includes("--help")) {
        printHelp(args);
        return;
    } else if(args.includes("-v") || args.includes("--version")) {
        console.log(`rebble-ui v${pkg.version}`);
        return;
    }
}

main().catch((error) => {
    console.error("Error:", error);
    process.exit(1);
});