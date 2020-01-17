const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const koaBody = require('koa-body')
const mysql = require('mysql2')
const jwt = require('jsonwebtoken')
const koaJwt = require('koa-jwt')

let app = new Koa()
app.use(koaBody({
    multipart: true
}))
app.use(static(__dirname + '/static'))

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'kaikeba',
    charset: 'utf8'
})

let router = new Router()

router.options("/*",ctx=>{
    ctx.set("Access-Control-Allow-Origin","http://localhost:3000");
    // 设置前端允许请求的方法；
    ctx.set("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,HEAD,OPTIONS");
    // 设置允许携带凭证；
    ctx.set("Access-Control-Allow-Credentials",true);
    // 设置预检请求的缓存时间；
    ctx.set("Access-Control-Max-Age",3600);
    // 允许前端设置的头部
    ctx.set("Access-Control-Allow-Headers","Content-Type, Content-Length, Authorization,token");
    console.log("有预检请求");
    ctx.body = "";
})

//CORS
let cors = (ctx) => {
    ctx.set("Access-Control-Allow-Origin", "http://localhost:3000")
    // 设置前端允许请求的方法；
    ctx.set("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,HEAD,OPTIONS")
    // 设置允许携带凭证；
    ctx.set("Access-Control-Allow-Credentials",true)
    // 设置预检请求的缓存时间；
    ctx.set("Access-Control-Max-Age",3600)
    // 允许前端设置的头部
    ctx.set("Access-Control-Allow-Headers","Content-Type, Content-Length, Authorization,token")

}

router.post('/test', koaJwt({secret: 'mytoken'}), ctx => {
    cors(ctx)
    ctx.body = 'abc'
})

router.post('/upload', koaJwt({secret: 'mytoken'}), ctx => {
    cors(ctx)
    ctx.body = 'abcd'
})

router.post('/register', async ctx => {
    cors(ctx)
    let {username, password} = ctx.request.body
    let sql = 'INSERT INTO user (username, password, createDate) VALUES (?, ?, ?)'

    let result

    try {
        console.log(username, password)
        let [rows] = await conection.promise().query(sql, [username, password, Date.now()])
        console.log(rows)
        if (rows.affectedRows > 0) {
            result = {
                status: 0,
                msg: '注册成功'
            }
        } else {
            result = {
                status: 1,
                msg: '注册失败'
            }
        }
    } catch(err) {
        console.log(err)
    }

    ctx.body = result
})

router.post('/login', async ctx => {
    cors(ctx)
    let {username, password} = ctx.request.body
    let sql = 'SELECT username FROM user WHERE username = ? AND password = ?'
    let result = []

    try{
        let [rows] = await conection.promise().query(sql, [username, password])
        console.log(rows)
        if (rows.length > 0) {
            // 签发token
            // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImlhdCI6MTU3OTA5MjE1NiwiZXhwIjoxNTc5MDk5MzU2fQ.l3DYPXazvkYrscvuVOuh-ufiR0j9kjTsQ3HkhKlyndY
            // 前面2个都是通过base64编码
            const token = jwt.sign({
                _id: username
            }, 'mytoken', {expiresIn: '2h'})

            result = {
                status: 0,
                msg: '登录成功',
                token
            }
        } else {
            result = {
                status: 1,
                msg: '用户名或密码错误'
            }
        }
    }catch(e) {
        console.log(e)
    }

    ctx.body = result
})

app.use(router.routes())
app.listen(4000)