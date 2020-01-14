const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaBody = require("koa-body");
let app = new Koa();
app.use(koaBody());
let router = new Router();
app.use(static(__dirname+"/static"));
router.options("/*",ctx=>{
    ctx.set("Access-Control-Allow-Origin","http://localhost:3000");
    //允许获取的头部信息；
    ctx.set("Access-Control-Expose-Headers","Date,Content-Type, Content-Length")
    // 设置前端允许请求的方法；
    ctx.set("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,HEAD,OPTIONS");
    // 设置允许携带凭证；
    ctx.set("Access-Control-Allow-Credentials",true);
    // 设置预检请求的缓存时间；
    ctx.set("Access-Control-Max-Age",3600);
    // 允许前端设置的头部
    ctx.set("Access-Control-Allow-Headers","Content-Type, Content-Length, Authorization,test");
    console.log("有预检请求");
    ctx.body = "";
})
router.get("/index",ctx=>{
    ctx.body  = "hello4000";
})
router.post("/post",ctx=>{
    console.log(ctx.request.body);
    // 1.不安全；2.不能设置允许携带凭证；
    // ctx.set("Access-Control-Allow-Origin","*");
    ctx.set("Access-Control-Allow-Origin","http://localhost:3000");
    //允许获取的头部信息；
    ctx.set("Access-Control-Expose-Headers","Date,Content-Type, Content-Length")
    // 设置前端允许请求的方法；
    ctx.set("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,HEAD,OPTIONS");
    // 设置允许携带凭证；
    ctx.set("Access-Control-Allow-Credentials",true);
    // 设置预检请求的缓存时间；
    ctx.set("Access-Control-Max-Age",3600);
    // 允许前端设置的头部
    ctx.set("Access-Control-Allow-Headers","Content-Type, Content-Length, Authorization,test");
    console.log("有请求过来了");
    ctx.body  = "4000端口返还数据";
})

router.post("/serverPost",ctx=>{
    console.log(111);
    ctx.body = "4000端口的数据";
})

app.use(router.routes());
app.listen(4000);