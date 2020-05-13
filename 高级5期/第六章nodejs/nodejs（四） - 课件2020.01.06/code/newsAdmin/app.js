// mvc  --> model  view  controller:控制器; 
const Koa = require("koa");
const static = require("koa-static");
const views = require("koa-views");
const router = require("./router");
const koaBody = require("koa-body");
let app = new Koa();
app.use(static(__dirname + "/static"));
app.use(views(__dirname + "/views", {
    extension: "pug"
}))
app.use(koaBody({
    multipart:true //允许上传文件
}))
router(app);
app.listen(8989);