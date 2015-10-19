var config = require("../../config.json");
var common = require("../../lib/common.js");
var models = require("../../models");
var utils = require('../../lib/utils.js');

//articleCategory list page
exports.index = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        var keywords = "";
        var pagenum = 1;
        var pageSize = 10;
        models.ArticleCategory.getAll(function (err, categories) {
            if (err) {
                res.render('404.html', {
                    err: err
                });
            } else {
                var data = {
                    data: categories,
                    categoryPrefix: categoryPrefix
                };
                res.render('admin/articleCategory.html', data);
            }
        });
    });
};

//articleCategory edit page
exports.edit = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        var id = req.params.id;
        models.ArticleCategory.findById(id).then(function (category) {
            if (!category) {
                category = {
                    id: 0,
                    categoryName: '',
                    parentId: 0,
                    sortNum: 0,
                    innerCode: '',
                    seoTitle: '',
                    seoKeywords: '',
                    seoDescription: '',
                }
            }

            models.ArticleCategory.getListEncludesSelf(category.innerCode, function (err, categories) {
                if (err) {
                    res.render('404.html', {
                        err: err
                    });
                } else {
                    var data = {
                        data: category,
                        categories: categories,
                        categoryPrefix: categoryPrefix
                    };
                    res.render('admin/articleCategoryEdit.html', data);
                }
            });
        }).catch(function (err) {
            res.render('404.html', {
                err: err
            });
        });
    });
};

//save articleCategory info
exports.save = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var values = {
            id: utils.toInt(req.body.id),
            categoryName: req.body.categoryName,
            parentId: utils.toInt(req.body.parentId),
            sortNum: utils.toInt(req.body.sortNum),
            innerCode: req.body.innerCode,
            seoTitle: req.body.seoTitle,
            seoKeywords: req.body.seoKeywords,
            seoDescription: req.body.seoDescription
        };

        if (values.id == 0) {
            models.ArticleCategory.create(values).then(function (category) {
                if (category) {
                    common.echo(res, "");
                    models.ArticleCategory.resetInnerCode(0, "", null); //更新所有分类的innerCode
                } else {
                    common.echo(res, "执行添加操作失败");
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
            models.ArticleCategory.update(values, options).then(function (category) {
                if (category) {
                    common.echo(res, "");
                    models.ArticleCategory.resetInnerCode(0, "", null); //更新所有分类的innerCode
                } else {
                    common.echo(res, "执行更新操作失败");
                }
            }).catch(function (err) {
                common.echo(res, err);
            });
        }
    });
};

//delete articleCategory info
exports.delete = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var id = utils.toInt(req.params.id);
        models.ArticleCategory.deleteInfo(id, function (err, result) {
            if (err) {
                common.echo(res, err);
            } else {
                common.echo(res, "");
                models.ArticleCategory.resetInnerCode(0, "", null); //更新所有分类的innerCode
            }
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
        models.ArticleCategory.update(values, options).then(function (category) {
            if (category) {
                common.echo(res, "");
                models.ArticleCategory.resetInnerCode(0, "", null); //更新所有分类的innerCode
            } else {
                common.echo(res, "执行更新操作失败");
            }
        }).catch(function (err) {
            common.echo(res, err);
        });
    });
};

function categoryPrefix(innerCode) {
    var prefix = "";
    if (innerCode && innerCode.indexOf('.') >= 0) {
        var arr = innerCode.split('.');
        for (var i = 1; i < arr.length; i++) {
            prefix += "　";
        }
        prefix += "┗━ ";
    }
    return prefix;
}