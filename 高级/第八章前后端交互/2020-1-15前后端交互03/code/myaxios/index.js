// axios服务端；服务端代理
const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const axios = require("axios");
let app = new Koa();
let router = new Router();

app.use(static(__dirname+"/static"));
router.get("/index",ctx=>{
    ctx.body  = "hello3000";
})
router.get("/getData",async ctx=>{
    // 转发到4000端口请求
    // axios({
    //     url:"http://localhost:4000/getData"
    // }).then(res=>{
    //     console.log(res);
    // })
   let res =  await axios({url:"http://localhost:4000/getData"})
   console.log(res);
    ctx.body = res.data;
})
app.use(router.routes());
app.listen(3000);