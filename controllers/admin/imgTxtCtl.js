var config = require("../../config.json");
var common = require("../../lib/common.js");
var models = require("../../models");
var utils = require('../../lib/utils.js');

//ImgTxt page
exports.index = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        var positionId = utils.toInt(req.params.positionId);
        models.ImgTxt.getAll(positionId, function (err, infos) {
            if (err) {
                res.render('404.html', {
                    err: err
                });
            } else {
                var data = {
                    data: infos,
                    positionId: positionId
                };
                res.render('admin/imgTxt.html', data);
            }
        });
    });
};

exports.edit = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        var idArray = req.params.compositeId.split('-');
        var positionId = utils.toInt(idArray[0]);
        var id = utils.toInt(idArray.length > 1 ? idArray[1] : 0);
        models.ImgTxt.findById(id).then(function (info) {
            if (!info) {
                info = {
                    id: 0,
                    positionId: positionId,
                    title: '',
                    url: '',
                    picFileName: '',
                    remark: '',
                    sortNum: 0,
                }
            }
            var data = {
                data: info,
                positionId: positionId
            };
            res.render('admin/imgTxtEdit.html', data);
        }).catch(function (err) {
            res.render('404.html', {
                err: err
            });
        });
    });
};

//save ImgTxt page info
exports.save = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var values = {
            id: utils.toInt(req.body.id),
            positionId: utils.toInt(req.body.positionId),
            title: req.body.title,
            url: req.body.url,
            title: req.body.title,
            picFileName: req.body.picFileName,
            sortNum: utils.toInt(req.body.sortNum),
        };

        if (values.id === 0) {
            models.ImgTxt.create(values).then(function (info) {
                if (info) {
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
            models.ImgTxt.update(values, options).then(function (info) {
                if (info) {
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
        models.ImgTxt.destroy(options).then(function (count) {
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

//reset sortNum Field value
exports.sort = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var idArray = req.params.compositeId.split('-');
        var values = {
            sortNum: utils.toInt(idArray[1])
        };
        var options = {
            where: {
                id: utils.toInt(idArray[0])
            }
        };
        models.ImgTxt.update(values, options).then(function (info) {
            if (info) {
                common.echo(res, "");
            } else {
                common.echo(res, "执行更新操作失败");
            }
        }).catch(function (err) {
            common.echo(res, err);
        });
    });
};