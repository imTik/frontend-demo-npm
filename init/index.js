'use strict';

const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const ora = require('ora');
const downloadGitRemote = require('download-git-repo');
const demoConfig = require('./demo.json');

module.exports = () => {
  co(function* () {
    let demoName = yield prompt(
      'Demo name (you can input one like vue, vite): '
    );
    let projectName = yield prompt('Project name: ');
    let gitUrl = '';
    let gitBranch = '';

    if (!demoConfig[demoName]) {
      console.log(chalk.red('\n Demo does not support!'));
      process.exit();
    }

    // 出现加载图标
    const spinner = ora('Downloading...');
    spinner.start();

    gitUrl = demoConfig[demoName].url;
    gitBranch = demoConfig[demoName].branch;

    downloadGitRemote(gitUrl, projectName, (err) => {
      if (err) {
        spinner.fail();
        console.log(chalk.red(`Demo generating failed. ${err}`));
        return;
      }
      // 结束加载图标
      spinner.succeed();
      console.log(chalk.green('\n Demo generating completed!'));
      process.exit();
    });
  });
};
