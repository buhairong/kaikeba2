const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const koaBody = require('koa-body')
const mysql = require('mysql2')

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

router.post('/register', async ctx => {
    console.log(ctx.request.body)
    let {username, password} = ctx.request.body
    let sql = 'INSERT INTO user (username, password, createDate) VALUES (?, ?, ?)'

    let result

    try {
        let [rows] = await conection.promise().query(sql, [username, password, Date.now()])
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

app.use(router.routes())
app.listen(3000)