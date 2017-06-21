//初始化命令
var program = require("commander");
var generalGit = require('../lib/general-git');

program.version("1.0.0.0")
.usage("<template>, <name>") 
.option("-i, --init")
.parse(process.argv);

if(program.init){
    console.log("init");
    generalGit.fetchTemplate(function(result){

    });
} else{
    program.help();
}