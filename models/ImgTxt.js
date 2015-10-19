module.exports = function (sequelize, DataTypes) {
    var ImgTxt = sequelize.define('ImgTxt', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        positionId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        url: DataTypes.STRING,
        picFileName: DataTypes.STRING,
        remark: DataTypes.STRING,
        sortNum: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "imgtxt",
        classMethods: {
            getAll: function (positionId, callback) {
                var sql = "select * from imgtxt where positionId=" + positionId + " order by sortNum";

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

    return ImgTxt;
};