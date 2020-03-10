const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const jwt = require('jsonwebtoken')
const koaJwt = require('koa-jwt')

let app = new Koa()
app.use(koaBody)
let router = new Router()

router.post('/login', ctx => {
    console.log(ctx)
    let result = 'abc'
    ctx.body = result
})

app.use(router.routes())
app.listen(4000)