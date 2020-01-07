const Router = require("koa-router");
const newController = require("../controller/news");
let router = new Router({
    prefix:"/news"
});

router.get("/index",newController.showIndex);
router.get("/showDetail",newController.showDetail);
router.get("*",ctx=>{
    ctx.body = "404";
})
module.exports = router;