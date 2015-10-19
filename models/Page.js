module.exports = function (sequelize, DataTypes) {
    var Page = sequelize.define('Page', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        seoTitle: DataTypes.STRING,
        seoKeywords: DataTypes.STRING,
        seoDescription: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "page",
        classMethods: {
            getAll: function (callback) {
                var sql = "select id, title, seoTitle from page order by id";

                sequelize.query(sql, {
                    type: sequelize.QueryTypes.SELECT
                }).then(function (pages) {
                    callback(null, pages);
                }).error(function (err) {
                    callback(err);
                });
            },
        },
    });

    return Page;
};