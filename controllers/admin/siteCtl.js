var config = require("../../config.json");
var common = require("../../lib/common.js");
var models = require("../../models");

//site page
exports.index = function (req, res, next) {
    common.authenVerify(req, res, 0, function () {
        models.Site.getInfo(function (err, data) {
            if (err) {
                res.render('404.html', {
                    err: err
                });
            } else {
                res.render('admin/site.html', data);
            }
        });
    });
};

//save site info
exports.save = function (req, res, next) {
    common.authenVerifyAjax(req, res, 0, function () {
        var data = {
            "DomainName": req.body.DomainName,
            "SiteName": req.body.SiteName,
            "CompanyName": req.body.CompanyName,
            "Address": req.body.Address,
            "Tel": req.body.Tel,
            "Fax": req.body.Fax,
            "Linkman": req.body.Linkman
        };
        var strContent = JSON.stringify(data);
        var values = {
            content: strContent
        };
        var selector = {
            where: {
                id: 1
            }
        };
        models.Site.update(values, selector).then(function (count) {
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