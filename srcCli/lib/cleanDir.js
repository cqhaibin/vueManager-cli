let fsExtra = require('fs-extra');
let log = require('./log');

module.exports.removeAll = function(path){
    fsExtra.removeSync(path);
    log.info('remove templatefile');
}