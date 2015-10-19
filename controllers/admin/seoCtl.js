var config = require("../../config.json");
var common = require("../../lib/common.js");
var models = require("../../models");
var utils = require('../../lib/utils.js');

//seo page
exports.index = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        models.Seo.getAll(function (err, seos) {
            if (err) {
                res.render('404.html', {
                    err: err
                });
            } else {
                var data = {
                    data: seos
                };
                res.render('admin/seo.html', data);
            }
        });
    });
};

exports.edit = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        var id = utils.toInt(req.params.id);
        models.Seo.findById(id).then(function (seo) {
            if (!seo) {
                seo = {
                    id: 0,
                    pageName: '',
                    seoTitle: '',
                    seoKeywords: '',
                    seoDescription: '',
                }
            }
            var data = {
                data: seo
            };
            res.render('admin/seoEdit.html', data);
        }).catch(function (err) {
            res.render('404.html', {
                err: err
            });
        });
    });
};

//save seo page info
exports.save = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var values = {
            id: utils.toInt(req.body.id),
            pageName: req.body.pageName,
            seoTitle: req.body.seoTitle,
            seoKeywords: req.body.seoKeywords,
            seoDescription: req.body.seoDescription
        };

        if (values.id === 0) {
            models.Seo.create(values).then(function (seo) {
                if (seo) {
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
            models.Seo.update(values, options).then(function (seo) {
                if (seo) {
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
                id: utils.toInt(req.params.id)
            }
        };
        models.Seo.destroy(options).then(function (count) {
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