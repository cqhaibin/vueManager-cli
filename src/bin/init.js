//初始化命令
var program = require("commander");

program.version("1.0.0.0")
.usage("<template>, <name>")
.option("-c, --clear")
.parse(process.argv);

if(program.clear){
    console.log('clear');
}
program.help();