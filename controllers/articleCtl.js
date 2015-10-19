var config = require("../config.json");
var common = require('../lib/common.js');
var models = require('../models');
var utils = require('../lib/utils');
var simplePager = require('../lib/simplePager');
var async = require('async');

//文章列表
exports.list = function (req, res, next) {
    var viewName = "article_list.html";
    var urlFormat = "/article/list/";
    if (req.originalUrl.indexOf('product') >= 0) {
        viewName = "product_list.html";
        urlFormat = "/product/list/";
    }
    var categoryId = req.params.id;
    var keywords = req.query.k;
    var pageNum = utils.toInt(req.query.page);
    var pageSize = 9;
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
            categoryInfo: function (callback) {
                models.ArticleCategory.findById(categoryId).then(function (categoryInfo) {
                    callback(null, categoryInfo);
                }).catch(function (err) {
                    callback(err);
                });
            },
        },
        function (err, results) {
            if (err) {
                res.render('404.html', {
                    err: err
                });
            } else {
                var data = {
                    config: config.sys,
                    seoTitle: results.categoryInfo.seoTitle,
                    seoKeywords: results.categoryInfo.seoKeywords,
                    seoDescription: results.categoryInfo.seoDescription,
                    articles: results.articles,
                    category: results.categoryInfo,
                    dateFormat: utils.formatDate,
                    pager: simplePager.pagerShow(req, results.recordCount, pageNum, pageSize, urlFormat)
                };
                res.render(viewName, data);
            }
        });
};

//文章详情
exports.detail = function (req, res, next) {
    var viewName = "article_detail.html";
    if (req.originalUrl.indexOf('product') >= 0) {
        viewName = "product_detail.html";
    }
    var id = req.params.id;
    async.parallel({
            articleInfo: function (callback) {
                models.Article.findById(id).then(function (article) {
                    callback(null, article);
                }).catch(function (err) {
                    callback(err);
                });
            },
        },
        function (err, results) {
            if (err) {
                res.render('404.html', {
                    err: err
                });
            } else {
                var data = {
                    config: config.sys,
                    seoTitle: results.articleInfo.seoTitle,
                    seoKeywords: results.articleInfo.seoKeywords,
                    seoDescription: results.articleInfo.seoDescription,
                    article: results.articleInfo,
                    dateFormat: utils.formatDate
                };
                res.render(viewName, data);
            }
        });
};