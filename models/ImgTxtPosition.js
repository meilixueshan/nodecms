module.exports = function (sequelize, DataTypes) {
    var ImgTxtPosition = sequelize.define('ImgTxtPosition', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        positionName: DataTypes.STRING,
        remark: DataTypes.STRING,
        sortNum: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "ImgTxtPosition",
        classMethods: {
            getAll: function (callback) {
                var sql = "select * from ImgTxtPosition order by sortNum";

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

    return ImgTxtPosition;
};