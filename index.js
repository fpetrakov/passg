#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");

const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const log = console.log;

program.version("1.0.0").description("Simple password generator");

program
  .option("-l, --length <number>", "length of password", "16")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

if (save) {
  savePassword(generatedPassword);
}

clipboardy.writeSync(generatedPassword);

log(chalk.yellowBright("Generated Password: ") + generatedPassword);
log(chalk.green("Password copied to clipboard"));
