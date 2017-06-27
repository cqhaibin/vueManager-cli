var path = require("path");
var _projectPath = path.join(__dirname, "../..");

module.exports.repo = {
    "repository": "vueManager-template",
    "project": "simple",
    "tempFolder": path.join(_projectPath, ".template"),
    "branch": "master"
};

module.exports.paths = {
    project: _projectPath
};