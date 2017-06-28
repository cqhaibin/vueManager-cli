var path = require("path");
var _programPath = path.join(__dirname, "../..");
var _projectPaht = process.cwd();

module.exports.repo = {
    "repository": "vueManager-template",
    "project": "simple",
    "tempFolder": path.join(_programPath, ".template"),
    "branch": "master"
};

module.exports.paths = {
    project: _programPath
};