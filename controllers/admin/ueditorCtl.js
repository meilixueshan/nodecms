var config = require("../../config.json");
var common = require("../../lib/common.js");


//ueditor
exports.index = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        // ueditor 客户发起上传图片请求
        if (req.query.action === 'uploadimage') {
            var foo = req.ueditor;

            var imgname = req.ueditor.filename;

            var img_url = '/public/upload/ueditor/';
            res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
        }
        //  客户端发起图片列表请求
        else if (req.query.action === 'listimage') {
            var dir_url = '/public/upload/ueditor/';
            res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
        }
        // 客户端发起其它请求
        else {
            res.setHeader('Content-Type', 'application/json');
            res.redirect('/public/ueditor/nodejs/config.json');
        }
    });
};