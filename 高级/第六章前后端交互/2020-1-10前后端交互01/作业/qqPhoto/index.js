const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const koaBody = require('koa-body')

let app = new Koa()
app.use(koaBody({
    multipart: true
}))
app.use(static(__dirname + '/static'))

let router = new Router()

app.use(router.routes())
app.listen(3000)