var config = require("../../config.json");
var common = require("../../lib/common.js");
var models = require("../../models");
var utils = require('../../lib/utils.js');

//ImgTxtPosition page
exports.index = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        models.ImgTxtPosition.getAll(function (err, positions) {
            if (err) {
                res.render('404.html', {
                    err: err
                });
            } else {
                var data = {
                    data: positions
                };
                res.render('admin/imgTxtPosition.html', data);
            }
        });
    });
};

exports.edit = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        var id = utils.toInt(req.params.id);
        models.ImgTxtPosition.findById(id).then(function (positionInfo) {
            if (!positionInfo) {
                positionInfo = {
                    id: 0,
                    positionName: '',
                    remark: '',
                    sortNum: 0,
                }
            }
            var data = {
                data: positionInfo
            };
            res.render('admin/imgTxtPositionEdit.html', data);
        }).catch(function (err) {
            res.render('404.html', {
                err: err
            });
        });
    });
};

//save ImgTxtPosition page info
exports.save = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var values = {
            id: utils.toInt(req.body.id),
            positionName: req.body.positionName,
            remark: req.body.remark,
            sortNum: utils.toInt(req.body.sortNum),
        };

        if (values.id === 0) {
            models.ImgTxtPosition.create(values).then(function (position) {
                if (position) {
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
            models.ImgTxtPosition.update(values, options).then(function (position) {
                if (position) {
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
        models.ImgTxtPosition.destroy(options).then(function (count) {
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
        models.ImgTxtPosition.update(values, options).then(function (position) {
            if (position) {
                common.echo(res, "");
            } else {
                common.echo(res, "执行更新操作失败");
            }
        }).catch(function (err) {
            common.echo(res, err);
        });
    });
};