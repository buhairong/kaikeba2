const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const mysql = require("mysql2");
const koaBody = require("koa-body");
let app = new Koa();
let router = new Router();
app.use(koaBody());
const server = require("http").createServer(app.callback());
const io = require("socket.io")(server);
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "123",
    database: 'js05',
    charset: "utf8"
});
// console.log(__dirname);
// console.log(__filename);
app.use(static(__dirname + "/static"));
router.get("/test", ctx => {
    ctx.body = "hello";
})
router.get("/getData", async ctx => {
    let sql = "SELECT * FROM chat";
    let [rows] = await connection.promise().query(sql);
    ctx.body = rows;
})
router.post("/addChat", async ctx => {
    // console.log(ctx.request.body);
    let { content } = ctx.request.body;
    let sql = "INSERT INTO chat (content) VALUES (?)";
    let result = await connection.promise().query(sql, [content]);
    // console.log(result);
    let info;
    if (result[0].affectedRows > 0) {
        info = {
            message: "添加成功",
            status: 1
        }
    } else {
        info = {
            message: "添加失败",
            status: 0
        }
    }
    ctx.body = info;
})

io.on("connection", async (socket) => {
    let sql = "SELECT * FROM chat";
    let [rows] = await connection.promise().query(sql);
    socket.emit("getData", rows)
    socket.on("addData", async data => {
        let content = data.content;
        let sql = "INSERT INTO chat (content) VALUES (?)";
        let result = await connection.promise().query(sql, [content]);
        // console.log(result);
        let info;
        if (result[0].affectedRows > 0) {
            info = {
                message: "添加成功",
                status: 1,
            }
            let sql = "SELECT * FROM chat";
            let [rows] = await connection.promise().query(sql);
            socket.emit("getData", rows)
            socket.broadcast.emit("getData", rows);
        } else {
            info = {
                message: "添加失败",
                status: 0
            }
        }
        console.log(info);
    })
})


app.use(router.routes());
server.listen(8888);