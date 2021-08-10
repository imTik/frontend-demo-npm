#!/usr/bin/env node

const program = require('commander');
const package = require('../package.json');

program.version(package.version);
program.usage('<command>');
program
  .command('init')
  .description('Generate front demo')
  .alias('i')
  .action(() => {
    require('../init/index.js')();
  });

program.parse(process.argv);
