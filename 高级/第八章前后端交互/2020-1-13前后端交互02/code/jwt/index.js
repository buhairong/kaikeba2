// 鉴权；
// 登录----》成功---->根据密钥生成 token（2处明文和一处密文构成）（门票）;
// token ---> 存储；  ---》请求接口携带token  ---》服务端---》验证  ---》正常请求；
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
router.post("/checkUser",ctx=>{
    console.log(ctx.request.body);
    let {username,pwd} = ctx.request.body;
    console.log(username,pwd);
    let info;
    if(username === "张三" && pwd === "123"){
        info = {
            message:"正确",
            status:1
        }
        // 存储cookie、存session   签发token
        
    }else{
        info = {
            message:"错误",
            status:0
        }
    }
    ctx.body = info;
})

app.use(router.routes());
app.listen(7000);

