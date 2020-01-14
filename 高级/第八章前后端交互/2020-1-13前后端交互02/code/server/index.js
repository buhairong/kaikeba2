const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaServerHttpProxy = require("koa-server-http-proxy");
let app = new Koa();
let router = new Router();
// /api/post --->http://localhost:4000/serverPost
app.use(static(__dirname+"/static"));

app.use(koaServerHttpProxy("/api",{
    target: 'http://localhost:4000',
    pathRewrite: { '^/api': '' },
    changeOrigin: true
}))
router.post("/serverPost",ctx=>{
    console.log(222);
    ctx.body = "5000端口的数据";
})
// 接口转发 : 服务端代理；
router.get("/index",ctx=>{
    ctx.body  = "hello5000";
})
router.post("/post",ctx=>{
    ctx.body = "5000端口的返还";
    
})

app.use(router.routes());
app.listen(5000);