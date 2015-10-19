var config = require("../config.json");
var common = require("../lib/common.js");
var crypto = require('crypto');

//test
exports.index = function (req, res, next) {
    var password = "admin";
    var hasher = crypto.createHash("md5");
    hasher.update(password);
    var hashPassword = hasher.digest('hex'); //hashPassword为加密之后的数据
    common.echo(res, hashPassword);
};