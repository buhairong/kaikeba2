const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaBody  = require("koa-body");
let app = new Koa();
app.use(koaBody({
    multipart:true
}));
app.use(static(__dirname+"/static"));
let router = new Router();
router.get("/test",ctx=>{
    ctx.body = "hello";
})
router.post("/upload",ctx=>{
    // 转存文件 保存路径；--》课下练习；
    ctx.body = "some value..";
})
app.use(router.routes());
app.listen(8787);