var config = require("../../config.json");
var common = require("../../lib/common.js");
var models = require("../../models");
var utils = require("../../lib/utils.js");

//admin home page
exports.index = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        var data = {
            config: config.sys,
            userInfo: common.getAuthen(req, res, 0),
        };
        res.render('admin/index.html', data);
    });
};

exports.login = function (req, res, next) {
    res.render('admin/login.html');
};

exports.loginCheck = function (req, res, next) {
    var username = req.query.username;
    var password = req.query.password;

    var ajaxResult = {
        success: false,
        msg: '',
        data: null
    };

    models.User.findOne({
        where: {
            username: username
        }
    }).then(function (user) {
        if (user) {
            if (user.password != utils.md5(password)) {
                ajaxResult.msg = "登录密码输入错误！";
            } else {
                common.setAuthen(req, res, 0, user);
                ajaxResult.success = true;
            }
        } else {
            ajaxResult.msg = "登录帐号输入错误！";
        }

        //res.json(ajaxResult);
        common.echo(res, JSON.stringify(ajaxResult));
    }).catch(function (err) {
        console.log(err);
        ajaxResult.msg = "登录出现异常！";

        //res.json(ajaxResult);
        common.echo(res, JSON.stringify(ajaxResult));
    });
};

exports.logout = function (req, res, next) {
    common.clearAuthen(req);
    res.redirect('/admin/login');
};

exports.password = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        res.render('admin/password.html');
    });
};

exports.savePassword = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var user = common.getAuthen(req, res, 0);
        var oldPassword = utils.md5(req.body.OldPassword);
        var newPassword = utils.md5(req.body.NewPassword);

        models.User.savePassword(user.username, oldPassword, newPassword, function (err) {
            if (err) {
                common.echo(res, err);
            } else {
                common.echo(res, "");
            }
        });
    });
};