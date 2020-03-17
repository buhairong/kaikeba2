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

router.get('/getUserCartNum', koaJwt({secret: 'mytoken'}), ctx => {
    const {username} = ctx.request.query
    let result = {}
    let total = 0
    if(cart[username]) {
        cart[username].forEach(item => total += item.number)
        result = {
            code: 0,
            total
        }
    } else {
        result = {
            code: 0,
            total
        }
    }

    ctx.body = result
})

router.get('/getUserCart', koaJwt({secret: 'mytoken'}), ctx => {
    const {username} = ctx.request.query
    let result = {}
    if(cart[username]) {
        result = {
            code: 0,
            userCart: cart[username]
        }
    } else {
        result = {
            code: 0,
            userCart: []
        }
    }
    ctx.body = result
})

router.post('/addCart', koaJwt({secret: 'mytoken'}), ctx => {
    const {username, good} = ctx.request.body
    let userCart = cart[username]

    if(userCart) {
        const isAdded = userCart.find(item => item.goodId === good.id)
        if(isAdded) {
            cart[username].map(item => {
                if(item.goodId === good.id) {
                    item.number += 1
                }
                return item
            })
        } else {
            cart[username].push({
                cartId: ++cartId,
                goodId: good.id,
                goodName: good.name,
                price: good.price,
                number: 1
            })
        }
    } else {
        cart[username] = [
            {
                cartId: ++cartId,
                goodId: good.id,
                goodName: good.name,
                price: good.price,
                number: 1
            }
        ]
    }

    console.log(cart)

    ctx.body = {
        code: 0,
        msg: '添加成功'
    }
})

router.post('/addCartNum', koaJwt({secret: 'mytoken'}), ctx => {
    const {username, good} = ctx.request.body

    cart[username].map(item => {
        if(item.goodId === good.goodId) {
            item.number += 1
        }
        return item
    })

    ctx.body = {
        code: 0,
        msg: '添加成功',
        userCart: cart[username]
    }
})

router.post('/minusCartNum', koaJwt({secret: 'mytoken'}), ctx => {
    const {username, good} = ctx.request.body

    cart[username].map(item => {
        if(item.cartId === good.cartId) {
            if(item.number > 0) {
                item.number -= 1
            }
        }
        return item
    })

    cart[username] = cart[username].filter(item => item.number > 0)

    ctx.body = {
        code: 0,
        msg: '删减成功',
        userCart: cart[username]
    }
})

app.use(router.routes())
app.listen(4000)