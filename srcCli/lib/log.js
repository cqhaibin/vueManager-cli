var chalk = require("chalk");

var log = console.log;

module.exports = {
    info: function(info){
        log(chalk.blue(info));
    },
    warn: function(warn){
        log(chalk.yellow(warn));
    },
    error: function(error){
        log(chalk.red(error));
    }
}