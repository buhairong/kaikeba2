// 同源：协议 域名  端口 相同；
const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaBody  = require("koa-body");
let app = new Koa();
app.use(koaBody());
app.use(static(__dirname+"/static"));
let router = new Router();
router.get("/test",ctx=>{
    ctx.body = "hello";
})
router.post("/post",ctx=>{
    console.log("有请求发送过来",ctx.request.body);
    // ctx.body = "hello";
    ctx.body = {
        name:"张三",
        age:30
    }
})
router.post("/xml",ctx=>{
    // console.log("有请求发送过来",ctx.request.body);
    // ctx.body = "hello";
    ctx.set("Content-Type","text/xml");
    ctx.body = `<?xml version='1.0' encoding='utf8' ?>
    <books>
        <nodejs>
            <name>nodejs从入门到精通</name>
            <price>$5.8</price>
        </nodejs>
        <vuejs>
            <name>vue从入门到精通</name>
            <price>$5.9</price>
        </vuejs>
    </books>
    `
    
})


app.use(router.routes());
app.listen(8989);