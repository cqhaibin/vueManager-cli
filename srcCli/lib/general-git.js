/**
 * git 获取teampalte相关操作
 */

var gitDownload = require("download-github-repo");
var log = require('./log');

function fetchTemplate( repo, callback){
    let url = repo.repository + "/" + repo.project;
    let dest = repo.tempFolder;  
    gitDownload(url, dest, function(result){ 
        if(!result){
            callback();
        }else{ 
            log.error("fail:" + result);
        }
    });
}
module.exports.fetchTemplate = fetchTemplate;
