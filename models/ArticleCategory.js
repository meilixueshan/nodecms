var utils = require('../lib/utils.js');

module.exports = function (sequelize, DataTypes) {
    var ArticleCategory = sequelize.define('ArticleCategory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoryName: DataTypes.STRING,
        parentId: DataTypes.INTEGER,
        sortNum: DataTypes.INTEGER,
        innerCode: DataTypes.STRING,
        seoTitle: DataTypes.STRING,
        seoKeywords: DataTypes.STRING,
        seoDescription: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "articleCategory",
        classMethods: {
            getAll: function (callback) {
                var sql = "SELECT id, categoryName, parentId, sortNum, innerCode FROM articleCategory order by innerCode";
                sequelize.query(sql, {
                    type: sequelize.QueryTypes.SELECT
                }).then(function (categories) {
                    callback(null, categories);
                }).error(function (err) {
                    callback(err);
                });
            },
            getListEncludesSelf: function (selfInnerCode, callback) {
                var sql = "SELECT id, categoryName, innerCode FROM articleCategory order by innerCode";
                if (selfInnerCode) {
                    sql = "SELECT id, categoryName, innerCode FROM articleCategory where innercode not like '" + selfInnerCode + "%' order by innerCode";
                }
                sequelize.query(sql, {
                    type: sequelize.QueryTypes.SELECT
                }).then(function (categories) {
                    callback(null, categories);
                }).error(function (err) {
                    callback(err);
                });
            },
            deleteInfo: function (id, callback) {
                ArticleCategory.findById(id).then(function (category) {
                    if (!category) {
                        callback("分类不存在！");
                    } else {
                        sql = "delete from articleCategory where innerCode like '" + category.innerCode + 　"%'";
                        sequelize.query(sql).spread(function (results, metadata) {
                            if (metadata.affectedRows > 0) {
                                callback(null, results);
                            } else {
                                callback("SQL语句执行影响条数为0");
                            }
                        });
                    }

                }).catch(function (err) {
                    callback(err);
                });
            },
            resetInnerCode: function (parentId, parentInnerCode, categories) {
                if (categories) {
                    var i = 0;
                    categories.forEach(function (category) {
                        i++;
                        var code = utils.formatNumber(i, "000");
                        var innerCode = code;
                        if (parentInnerCode) {
                            innerCode = parentInnerCode + "." + code;
                        }
                        var sql = "update articleCategory set innerCode='" + innerCode + "' where id=" + category.id.toString();
                        sequelize.query(sql).spread(function (results, metadata) {
                            ArticleCategory.resetInnerCode(category.id, innerCode, null);
                        });
                    });
                } else {
                    var sql = "SELECT * FROM articleCategory where parentId=" + parentId.toString() + " order by sortNum asc, id asc";
                    sequelize.query(sql, {
                        type: sequelize.QueryTypes.SELECT
                    }).then(function (categories) {
                        ArticleCategory.resetInnerCode(parentId, parentInnerCode, categories);
                    });
                }
            }
        }
    });

    return ArticleCategory;
};