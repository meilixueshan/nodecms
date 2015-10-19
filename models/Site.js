module.exports = function (sequelize, DataTypes) {
    var Site = sequelize.define('Site', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true
        },
        content: DataTypes.TEXT,
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "site",
        classMethods: {
            getInfo: function (callback) {
                var sql = "select content from site where id=1";
                sequelize.query(sql, {
                    type: sequelize.QueryTypes.SELECT
                }).then(function (results) {
                    var data = eval("(" + results[0].content + ")");
                    callback(null, data);
                }).error(function (err) {
                    callback(err);
                });
            },
        }
    });
    return Site;
};