const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaBody = require("koa-body");
let app = new Koa();
let router = new Router();
app.use(koaBody());
app.use(static(__dirname+"/static"));
router.get("/index",ctx=>{
    ctx.body  = "hello3000";
})

router.get("/fetch",ctx=>{
    ctx.body = {
        value:"some value"
    }
})
router.post("/fetchPost",ctx=>{
    console.log(ctx.request.body);
    ctx.body = {
        value:"some value post"
    }
})
app.use(router.routes());
app.listen(3000);