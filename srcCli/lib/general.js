//生成静态网站
let opts = require("./options");
var Metalsmith = require("metalsmith");
var log = require("./log");
let cleanDir = require('./cleanDir');

module.exports.general = function(){
    let metalsmith = new Metalsmith(opts.repo.tempFolder);
    metalsmith.clean(false)
    .source('.')
    .destination(opts.paths.project)
    .build(function(erro, files){
        log.info("general complete");
        cleanDir.removeAll(opts.repo.tempFolder);
    });
}