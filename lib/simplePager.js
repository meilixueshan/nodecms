var utils = require('./utils');

exports.pagerShow = function (req, recordCount, pageNum, pageSize, urlFormat) {
    var maxPage = 1;
    if (pageSize < 1) {
        pageSize = 1;
    }

    if (recordCount > 0) {
        if (recordCount % pageSize == 0) {
            maxPage = utils.division(recordCount, pageSize);
        } else {
            maxPage = utils.division(recordCount, pageSize) + 1;
        }
    }

    if (pageNum < 1) {
        pageNum = 1;
    }

    if (pageNum > maxPage) {
        pageNum = maxPage;
    }

    var output = "";
    if (pageNum <= 1) {
        output += '<span>首页</span>';
        output += '<span>上页</span>';
    } else {
        output += utils.format('<span><a href="{0}">首页</a></span>', utils.format(urlFormat, 1));
        output += utils.format('<span><a href="{0}">上页</a></span>', utils.format(urlFormat, pageNum - 1));
    }

    if (pageNum >= maxPage) {
        output += '<span>下页</span>';
        output += '<span>尾页</span>';
    } else {
        output += utils.format('<span><a href="{0}">下页</a></span>', utils.format(urlFormat, pageNum + 1));
        output += utils.format('<span><a href="{0}">尾页</a></span>', utils.format(urlFormat, maxPage));
    }

    return output;
};