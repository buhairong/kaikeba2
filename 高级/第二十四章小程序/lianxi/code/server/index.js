const koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");
let newsData = require("./data.json");
let app = new koa();
let router = new Router();
app.use(koaBody());
router.get("/", ctx => {
    ctx.body = "some value...";
})
router.get("/getData", ctx => {
    let p = ctx.query.p || 1;
    console.log(p)
    let perPage = 7;
    let formatData = JSON.parse(JSON.stringify(newsData)).splice((p - 1) * perPage, perPage);
    ctx.body = formatData;
})
router.get("/getDetail", ctx => {
    let id = parseInt(ctx.query.id) || 1;
    // console.log(id);
    let detail = newsData.filter(item => item.id == id)[0];
    ctx.body = detail;
})

router.get("/getList", ctx => {
    ctx.body = {
        name: "张三",
        age: 20
    }
})
router.post("/getList", ctx => {
    console.log(ctx.request.body)
    ctx.body = {
        name: "张三",
        age: 20
    }
})
router.all("/getListPost", ctx => {
    console.log(ctx.request.body);
    ctx.body = {
        name: "张三post",
        age: 20
    }
})

app.use(router.routes());
app.listen(8989);