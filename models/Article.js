var util = require('util');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Article', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoryId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        author: DataTypes.STRING,
        comeFrom: DataTypes.STRING,
        keywords: DataTypes.STRING,
        content: DataTypes.TEXT,
        publishTime: DataTypes.DATE,
        createTime: DataTypes.DATE,
        readNum: DataTypes.INTEGER,
        picFileName: DataTypes.STRING,
        seoTitle: DataTypes.STRING,
        seoKeywords: DataTypes.STRING,
        seoDescription: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "article",
        classMethods: {
            getAll: function (keyword, pagenum, pageSize, callback) {
                this.getArticles(0, keyword, pagenum, pageSize, callback);
            },
            getArticles: function (categoryId, keyword, pagenum, pageSize, callback) {
                if (pageSize < 1) {
                    pageSize = 10;
                }
                if (pagenum < 1) {
                    pagenum = 1;
                }
                var first = (pagenum - 1) * pageSize;
                var fields = "t.id, t.title, t.categoryId, c.categoryName, t.publishTime, t.createTime, t.picFileName, t.readNum, t.description";
                var sqlCondition = "";
                if (categoryId > 0) {
                    sqlCondition += " and t.categoryId in (SELECT b.id FROM articlecategory a INNER JOIN articlecategory b ON a.id=" + categoryId + " AND b.innercode LIKE CONCAT(a.innercode, '%'))";
                }
                var sql = util.format("SELECT %s FROM article t, articleCategory c WHERE t.categoryId = c.id %s limit %s, %s", fields, sqlCondition, first, pageSize);
                if (keyword) {
                    keyword = "'%" + keyword + "%'";
                    sql = util.format("SELECT %s FROM article t, articleCategory c WHERE t.categoryId = c.id %s and t.title like %s limit %s, %s", fields, sqlCondition, keyword, first, pageSize);
                }

                sequelize.query(sql, {
                    type: sequelize.QueryTypes.SELECT
                }).then(function (articles) {
                    callback(null, articles);
                }).error(function (err) {
                    callback(err);
                });
            },
            getCount: function (categoryId, keyword, callback) {
                var sqlCondition = "";
                if (categoryId > 0) {
                    sqlCondition += " and categoryId in (SELECT b.id FROM articlecategory a INNER JOIN articlecategory b ON a.id=" + categoryId + " AND b.innercode LIKE CONCAT(a.innercode, '%'))";
                }
                var sql = util.format("SELECT count(*) as TotalCount FROM article WHERE 1=1 %s", sqlCondition);
                if (keyword) {
                    keyword = "'%" + keyword + "%'";
                    sql = util.format("SELECT count(*) as TotalCount FROM article WHERE 1=1 %s and title like %s", sqlCondition, keyword);
                }

                sequelize.query(sql, {
                    type: sequelize.QueryTypes.SELECT
                }).then(function (result) {
                    callback(null, result[0].TotalCount);
                }).error(function (err) {
                    callback(err);
                });
            },
            getList: function (categoryId, rownum, callback) {
                var fields = "t.id, t.title, t.categoryId, c.categoryName, t.publishTime, t.createTime, t.picFileName, t.readNum, t.description";
                var sql = util.format("select %s from article t, articleCategory c where t.categoryId=%s and t.categoryId = c.id order by t.publishTime desc limit 0, %s", fields, categoryId, rownum)
                sequelize.query(sql, {
                    type: sequelize.QueryTypes.SELECT
                }).then(function (articles) {
                    callback(null, articles);
                }).error(function (err) {
                    callback(err);
                });
            }
        },
    });
};