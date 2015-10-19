module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "user",
        classMethods: {
            savePassword: function (username, password, newPassword, callback) {
                User.findOne({
                    where: {
                        username: username
                    }
                }).then(function (user) {
                    if (user.password != password) {
                        callback("原密码输入错误！");
                    } else {
                        var values = {
                            password: newPassword
                        };
                        var selector = {
                            where: {
                                id: user.id
                            }
                        };
                        User.update(values, selector).then(function (count) {
                            if (count > 0) {
                                callback(null);
                            } else {
                                callback("SQL语句执行影响条数为0");
                            }
                        }).catch(function (err) {
                            callback(err);
                        });
                    }
                }).catch(function (err) {
                    callback(err);
                });
            },
        }
    });

    return User;
};