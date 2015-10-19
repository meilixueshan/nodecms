var express = require('express');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

//设置模板引擎
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    secret: 'meilixueshan',
    name: 'brucelee',
    cookie: {
        maxAge: 86400000
    },
    resave: false,
    saveUninitialized: true,
}));
app.use("/public", express.static(__dirname + '/public'));
app.use("/m", express.static(__dirname + '/m'));
app.engine('.html', ejs.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

//引入页面路由
require('./routes')(app);

// 处理404错误
app.use(function (req, res) {
    res.status(400);
    res.render('404.html', {
        title: '404: File Not Found'
    });
});

// 处理500错误
app.use(function (error, req, res, next) {
    res.status(500);
    res.render('500.html', {
        title: '500: Internal Server Error',
        error: error
    });
});

//开启服务器地址访问：http://127.0.0.1:1337/
app.listen(1337);
console.log("start server http://127.0.0.1:1337/ ......");
console.log("利用apache的ab命令进行压力测试，如：");
console.log("ab -n 4000 -c 1000 http://127.0.0.1:1337/");