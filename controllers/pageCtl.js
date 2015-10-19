var config = require("../config.json");
var common = require("../lib/common.js");
var models = require("../models");
var async = require('async');

//single page information. example:aboutus contractus
exports.index = function (req, res, next) {
    var id = req.params.id;
    async.parallel({
            pageInfo: function (callback) {
                models.Page.findById(id).then(function (page) {
                    callback(null, page);
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
                    seoTitle: results.pageInfo.seoTitle,
                    seoKeywords: results.pageInfo.seoKeywords,
                    seoDescription: results.pageInfo.seoDescription,
                    page: results.pageInfo,
                    articles: results.articles,
                };
                res.render('page.html', data);
            }
        });
};