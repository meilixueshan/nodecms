var config = require("../../config.json");
var common = require("../../lib/common.js");
var models = require("../../models");
var async = require('async');
var util = require('util');

//single page
exports.index = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        models.Page.getAll(function (err, pages) {
            if (err) {
                res.render('404.html', {
                    err: err
                });
            } else {
                var data = {
                    data: pages
                };
                res.render('admin/page.html', data);
            }
        });
    });
};

exports.edit = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        var id = req.params.id;
        models.Page.findById(id).then(function (page) {
            if (!page) {
                page = {
                    id: '',
                    title: '',
                    content: '',
                    seoTitle: '',
                    seoKeywords: '',
                    seoDescription: '',
                }
            }
            var data = {
                data: page
            };
            res.render('admin/pageEdit.html', data);
        }).catch(function (err) {
            res.render('404.html', {
                err: err
            });
        });
    });
};

//save single page info
exports.save = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var values = {
            id: req.body.id,
            title: req.body.title,
            content: req.body.content,
            seoTitle: req.body.seoTitle,
            seoKeywords: req.body.seoKeywords,
            seoDescription: req.body.seoDescription
        };

        if (req.body.flag === "") {
            models.Page.create(values).then(function (count) {
                if (count > 0) {
                    common.echo(res, "");
                } else {
                    common.echo(res, "SQL语句执行影响条数为0");
                }
            }).catch(function (err) {
                common.echo(res, err);
            });
        } else {
            var options = {
                where: {
                    id: values.id
                }
            };
            models.Page.update(values, options).then(function (page) {
                if (page) {
                    common.echo(res, "");
                } else {
                    common.echo(res, "执行更新操作失败");
                }
            }).catch(function (err) {
                common.echo(res, err);
            });
        }
    });
};

exports.delete = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var options = {
            where: {
                id: req.params.id
            }
        };
        models.Page.destroy(options).then(function (count) {
            if (count > 0) {
                common.echo(res, "");
            } else {
                common.echo(res, "SQL语句执行影响条数为0");
            }
        }).catch(function (err) {
            common.echo(res, err);
        });

    });
};