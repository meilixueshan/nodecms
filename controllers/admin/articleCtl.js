var config = require("../../config.json");
var common = require("../../lib/common.js");
var models = require("../../models");
var utils = require('../../lib/utils.js');
var simplePager = require('../../lib/simplePager');
var async = require('async');

//article list page
exports.index = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        var viewName = "article_list.html";
        var urlFormat = "/admin/article/";
        var categoryId = req.params.id;
        if (!utils.hasValue(categoryId)) {
            categoryId = 0;
        }
        var keywords = req.query.k;
        var pageNum = utils.toInt(req.query.page);
        var pageSize = 15;
        if (utils.hasValue(keywords)) {
            urlFormat += categoryId + "?k=" + keywords + "&page={0}";
        } else {
            urlFormat += categoryId + "?page={0}";
        }
        async.parallel({
                recordCount: function (callback) {
                    models.Article.getCount(categoryId, keywords, callback);
                },
                articles: function (callback) {
                    models.Article.getArticles(categoryId, keywords, pageNum, pageSize, callback);
                },
            },
            function (err, results) {
                if (err) {
                    res.render('404.html', {
                        err: err
                    });
                } else {
                    var data = {
                        data: results.articles,
                        dateFormat: utils.formatDate,
                        pager: simplePager.pagerShow(req, results.recordCount, pageNum, pageSize, urlFormat)
                    };
                    res.render('admin/article.html', data);
                }
            });
    });
};

//article edit page
exports.edit = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        var id = req.params.id;
        models.Article.findById(id).then(function (article) {
            if (!article) {
                article = {
                    id: 0,
                    categoryId: 8,
                    title: '',
                    description: '',
                    author: '',
                    comeFrom: '',
                    keywords: '',
                    content: '',
                    publishTime: new Date(),
                    readNum: 0,
                    picFileName: '',
                    seoTitle: '',
                    seoKeywords: '',
                    seoDescription: '',
                }
            }
            models.ArticleCategory.getListEncludesSelf("", function (err, categories) {
                if (err) {
                    res.render('404.html', {
                        err: err
                    });
                } else {
                    var data = {
                        data: article,
                        dateFormat: utils.formatDate,
                        categories: categories,
                        categoryPrefix: categoryPrefix
                    };
                    res.render('admin/articleEdit.html', data);
                }
            });
        }).catch(function (err) {
            res.render('404.html', {
                err: err
            });
        });
    });
};

//save article info
exports.save = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var values = {
            id: utils.toInt(req.body.id),
            categoryId: utils.toInt(req.body.categoryId),
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            comeFrom: req.body.comeFrom,
            keywords: req.body.keywords,
            content: req.body.content,
            publishTime: req.body.publishTime,
            readNum: utils.toInt(req.body.readNum),
            picFileName: req.body.picFileName,
            seoTitle: req.body.seoTitle,
            seoKeywords: req.body.seoKeywords,
            seoDescription: req.body.seoDescription
        };

        if (values.id == 0) {
            values.createTime = utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss");
            models.Article.create(values).then(function (article) {
                if (article) {
                    common.echo(res, "");
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
            models.Article.update(values, options).then(function (article) {
                if (article) {
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

//delete article info
exports.delete = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var options = {
            where: {
                id: req.params.id
            }
        };
        models.Article.destroy(options).then(function (count) {
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