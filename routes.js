var path = require('path');
var ueditor = require("ueditor");
//引入Controller
var adminHomeCtl = require('./controllers/admin/homeCtl');
var adminSiteCtl = require('./controllers/admin/siteCtl');
var adminPageCtl = require('./controllers/admin/pageCtl');
var adminArticleCategoryCtl = require('./controllers/admin/articleCategoryCtl');
var adminArticleCtl = require('./controllers/admin/articleCtl');
var adminSeoCtl = require('./controllers/admin/seoCtl');
var adminImgTxtPositionCtl = require('./controllers/admin/imgTxtPositionCtl');
var adminImgTxtCtl = require('./controllers/admin/imgTxtCtl');
var adminUEditorCtl = require('./controllers/admin/ueditorCtl');

var frontHomeCtl = require('./controllers/homeCtl');
var frontPageCtl = require('./controllers/pageCtl');
var frontArticleCtl = require('./controllers/articleCtl');
var frontTestCtl = require('./controllers/testCtl');

module.exports = function (app) {
    //后台页面响应
    app.get('/admin/loginCheck', adminHomeCtl.loginCheck);
    app.get('/admin/login', adminHomeCtl.login);
    app.get('/admin/logout', adminHomeCtl.logout);

    app.post('/admin/password/save', adminHomeCtl.savePassword);
    app.get('/admin/password', adminHomeCtl.password);

    app.post('/admin/site/save', adminSiteCtl.save);
    app.get('/admin/site', adminSiteCtl.index);

    app.get('/admin/page/edit/:id', adminPageCtl.edit);
    app.get('/admin/page/edit', adminPageCtl.edit);
    app.post('/admin/page/save', adminPageCtl.save);
    app.get('/admin/page/delete/:id', adminPageCtl.delete);
    app.get('/admin/page', adminPageCtl.index);

    app.get('/admin/articleCategory/sort/:compositeId', adminArticleCategoryCtl.sort);
    app.get('/admin/articleCategory/edit/:id', adminArticleCategoryCtl.edit);
    app.get('/admin/articleCategory/edit', adminArticleCategoryCtl.edit);
    app.post('/admin/articleCategory/save', adminArticleCategoryCtl.save);
    app.get('/admin/articleCategory/delete/:id', adminArticleCategoryCtl.delete);
    app.get('/admin/articleCategory', adminArticleCategoryCtl.index);

    app.get('/admin/article/edit/:id', adminArticleCtl.edit);
    app.get('/admin/article/edit', adminArticleCtl.edit);
    app.post('/admin/article/save', adminArticleCtl.save);
    app.get('/admin/article/delete/:id', adminArticleCtl.delete);
    app.get('/admin/article/:id', adminArticleCtl.index);
    app.get('/admin/article', adminArticleCtl.index);

    app.get('/admin/seo/edit/:id', adminSeoCtl.edit);
    app.get('/admin/seo/edit', adminSeoCtl.edit);
    app.post('/admin/seo/save', adminSeoCtl.save);
    app.get('/admin/seo/delete/:id', adminSeoCtl.delete);
    app.get('/admin/seo', adminSeoCtl.index);

    app.get('/admin/imgtxtposition/sort/:compositeId', adminImgTxtPositionCtl.sort);
    app.get('/admin/imgtxtposition/edit/:id', adminImgTxtPositionCtl.edit);
    app.get('/admin/imgtxtposition/edit', adminImgTxtPositionCtl.edit);
    app.post('/admin/imgtxtposition/save', adminImgTxtPositionCtl.save);
    app.get('/admin/imgtxtposition/delete/:id', adminImgTxtPositionCtl.delete);
    app.get('/admin/imgtxtposition', adminImgTxtPositionCtl.index);

    app.get('/admin/imgtxt/sort/:id', adminImgTxtCtl.sort);
    app.get('/admin/imgtxt/edit/:compositeId', adminImgTxtCtl.edit);
    app.post('/admin/imgtxt/save', adminImgTxtCtl.save);
    app.get('/admin/imgtxt/delete/:compositeId', adminImgTxtCtl.delete);
    app.get('/admin/imgtxt/index/:positionId', adminImgTxtCtl.index);

    app.get('/admin/', adminHomeCtl.index);

    //引用ueditor
    app.use("/public/ueditor/ue", ueditor(path.join(__dirname, ''), adminUEditorCtl.index));


    //前台页面响应
    app.get('/article/detail/:id', frontArticleCtl.detail);
    app.get('/article/list/:id', frontArticleCtl.list);
    app.get('/product/detail/:id', frontArticleCtl.detail);
    app.get('/product/list/:id', frontArticleCtl.list);
    app.get('/page/:id', frontPageCtl.index);
    app.get('/test', frontTestCtl.index);
    app.get('/', frontHomeCtl.index);
};