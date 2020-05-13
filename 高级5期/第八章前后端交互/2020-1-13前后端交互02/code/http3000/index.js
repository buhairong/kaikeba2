const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
let app = new Koa();
let router = new Router();
app.use(static(__dirname+"/static"));
router.get("/index",ctx=>{
    ctx.body  = "hello3000";
})
router.get("/setCookie",ctx=>{
    ctx.cookies.set("username","zhangsan",{
        maxAge:1000*60*60*24
    });
    ctx.body = "设置cookie";
})
router.post("/post",ctx=>{
    ctx.body  = "3000端口返还数据";
})
app.use(router.routes());
app.listen(3000);