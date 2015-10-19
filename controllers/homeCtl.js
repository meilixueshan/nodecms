var config = require("../config.json");
var common = require("../lib/common.js");
var models = require("../models");
var async = require('async');

//home page
exports.index = function (req, res, next) {
    //new Error('First argument to waterfall must be an array of functions');
    async.parallel({
            seo: function (callback) {
                models.Seo.findById(1).then(function (seo) {
                    callback(null, seo);
                }).catch(function (err) {
                    callback(err);
                });
            },
            pictures: function (callback) {
                models.Article.getList(20, 6, callback);
            },
            articles: function (callback) {
                models.Article.getList(8, 10, callback);
            }
        },
        function (err, results) {
            if (err) {
                res.render('404.html', {
                    err: err
                });
            } else {
                var data = {
                    config: config.sys,
                    seoTitle: results.seo.seoTitle,
                    seoKeywords: results.seo.seoKeywords,
                    seoDescription: results.seo.seoDescription,
                    pictures: results.pictures,
                    articles: results.articles,
                };
                res.render('index.html', data);
            }
        });
};