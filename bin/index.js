#!/usr/bin/env node

process.env.NODE_PATH = __dirname + '/../node_modules';

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
