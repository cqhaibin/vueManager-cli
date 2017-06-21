/**
 * git 获取teampalte相关操作
 */

var gitDownload = require("download-github-repo");

function fetchTemplate(callback){
    let url = "vueManager-template/simple";
    let dest = __dirname + "/.template"; 
    console.log(dest);
    gitDownload(url, dest);
}
module.exports.fetchTemplate = fetchTemplate;
