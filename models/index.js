var fs = require("fs");
var path = require("path");
var Sequelize = require('sequelize');
var config = require('../config.json').db;
var db = {};

// initialize database connection
// sequelize在保存date类型的数据时存在时区问题，需要在options中加入timezone选项，设置时区差
var sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    config.options
);

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/*
var models = require('./models');
var User = models.User;

var user = User.build({ first_name: "John", last_name: "Doe "});
*/