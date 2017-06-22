//初始化命令
var program = require("commander");
var generalGit = require('../lib/general-git');
var options = require("../lib/options");
var log = require("../lib/log");

program.version("1.0.0.0")
.usage("<template>, <name>") 
.option("-i, --init")
.parse(process.argv);

if(program.init){
    generalGit.fetchTemplate(options.repo, function(result){
        log.info("git fetch complete");
    });
} else{
    program.help();
}