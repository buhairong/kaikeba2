const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const jwt = require('jsonwebtoken')
const koaJwt = require('koa-jwt')

let users = require('./data/users.json')
let items = require('./data/items.json')
let cartId = 0;
let cart = {
    /*"mt": [
        {
            cartId: 1,
            goodId: 1,
            goodName: 'Redmi K20',
            price: '199900',
            number: 3
        }
    ]*/
}

let app = new Koa()

app.use(koaBody())
let router = new Router()

router.get('/getItems', ctx => {
    const sort = ctx.request.query.sort || ''
    if(sort) {
        let res = [...items].sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price)
        ctx.body = res
    } else {
        ctx.body = items
    }
})

router.post('/login', ctx => {
    const {username, password} = ctx.request.body
    let result = {}
    const res = users.find(user => {
        return user.username === username && user.password === password
    })

    if(res) {
        const token = jwt.sign({
            _id: username
        }, 'mytoken', {expiresIn: '2h'})

        result = {
            code: 0,
            msg: '登录成功',
            token
        }
    } else {
        result = {
            code: 1,
            msg: '用户名或密码错误'
        }
    }

    ctx.body = result
})

router.post('/reg', ctx => {
    const {username, password} = ctx.request.body
    let result = {}
    const res = users.find(user => {
        return user.username === username
    })

    if(!res) {
        users.push({
            "username": username,
            "password": password
        })
        const token = jwt.sign({
            _id: username
        }, 'mytoken', {expiresIn: '2h'})

        result = {
            code: 0,
            msg: '注册成功',
            token
        }
    } else {
        result = {
            code: 1,
            msg: '用户已存在'
        }
    }

    ctx.body = result
})



app.use(router.routes())
app.listen(4000)