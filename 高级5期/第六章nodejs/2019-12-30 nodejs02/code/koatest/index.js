// express --> koa
const Koa = require("koa");
let app = new Koa();

// 中间件；
// app.use(async (ctx,next)=>{
//     // console.log(ctx.request.query)
//     // ctx  context 
//     // ctx.req === req;  ctx.res === res;
//     // ctx.request   ;  ctx.response;
//     // ctx.response.body = "hello world你好";
//     ctx.body = "hello world你好";
// });
// 中间件
let middleWare1 = async function(ctx,next){
        console.log("m1 start...");
        ctx.state = {
            name:"zhangsan"
        }

        // await new Promise()
        next(); // --> middleWare2();
        console.log("m1 end...");
}
let middleWare2 = async function(ctx,next){
    console.log("m2 start...");
    console.log(ctx.state);
    next(); //middleWare3();
    console.log("m2 end...");
}

// let middleWare3
app.use(middleWare1);
app.use(middleWare2);
app.use(async (ctx)=>{
    // 状态码；
    // ctx.status = 403;
    ctx.body = "hello";
})  

app.listen(8887);