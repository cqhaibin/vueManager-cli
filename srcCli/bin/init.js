//初始化命令
var program = require("commander");
var generalGit = require('../lib/general-git');
var options = require("../lib/options");
var log = require("../lib/log");
var general = require("../lib/general");

program.version("1.0.0.0")
.usage("readme") 
.option("-i, --init")
.option("-s, --setup")
.parse(process.argv);

if(program.init){
    generalGit.fetchTemplate(options.repo, function(result){
        log.info("git fetch complete");
        //general.general();
    });
} else if(program.setup){
    general.general();
} else{
    program.help();
}