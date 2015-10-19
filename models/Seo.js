module.exports = function (sequelize, DataTypes) {
    var Seo = sequelize.define('Seo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pageName: {
            type: DataTypes.STRING,
            unique: true
        },
        seoTitle: DataTypes.STRING,
        seoKeywords: DataTypes.STRING,
        seoDescription: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "seo",
        classMethods: {
            getAll: function (callback) {
                var sql = "select * from seo order by id";

                sequelize.query(sql, {
                    type: sequelize.QueryTypes.SELECT
                }).then(function (infos) {
                    callback(null, infos);
                }).error(function (err) {
                    callback(err);
                });
            },
        },
    });

    return Seo;
};