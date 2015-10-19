exports.echo = function (res, str) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.end(str);
};

exports.error = function (res, str) {
    res.writeHead(500, {
        'content-type': 'text/plain'
    });
    res.end(str);
};

// session name
exports.getAuthenSessionName = function (userType) {
    var sessionName = "user";
    if (userType == 0) {
        sessionName = "admin";
    }
    sessionName = "authen_" + sessionName;
    return;
};

//set authen informcation
exports.setAuthen = function (req, res, userType, userInfo) {
    var sessionName = this.getAuthenSessionName(userType);
    req.session[sessionName] = userInfo;
};

// get authen information
exports.getAuthen = function (req, res, userType) {
    var sessionName = this.getAuthenSessionName(userType);
    return req.session[sessionName];
};

// clear all session information
exports.clearAuthen = function (req) {
    if (req.session) {
        req.session.destroy();
    }
};

//logined user's info checking
//userType: 0:admin; 1:user
exports.authenVerify = function (req, res, userType, fn) {
    if (!this.getAuthen(req, res, userType)) {
        if (userType == 0) {
            res.redirect('/admin/login');
        } else {
            res.redirect('/login');
        }
    } else {
        fn();
    }
};

//logined user's info checking. it is ajax used.
//userType: 0:admin; 1:user
exports.authenVerifyAjax = function (req, res, userType, fn) {
    if (!this.getAuthen(req, res, userType)) {
        this.echo(res, "登录超时，请重新登录！");
    } else {
        fn();
    }
};