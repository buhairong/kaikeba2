const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const nunjucks = require('koa-nunjucks-2')
const data = require('./views/data.json')

let app = new Koa()
let router = new Router()

app.use(static(__dirname + '/static'))

app.use(nunjucks({
    ext: 'html',
    path: __dirname + '/views',
    nunjucksConfig: {
        trimBlocks: true
    }
}))

router.get('/', async ctx => {
    ctx.redirect('/index')
})

router.get('/index', async ctx => {
    const pageSize = 5
    const total = Math.ceil(data.length / pageSize)
    const currentPage = ctx.query.page || 1
    const currentPageData = data.filter((item, index) => {
        return (currentPage - 1) * pageSize <= index && currentPage * pageSize > index
    })
    const prev = currentPage == 1 ? 1 : currentPage*1 - 1
    const next = currentPage == total ? total : currentPage*1 + 1

    await ctx.render('index', {
        total,
        currentPageData,
        prev,
        next
    })
})

router.get('/detail', async ctx => {
    const id = ctx.query.id || 1
    const currentData = data.filter(item => item.id == id)

    await ctx.render('detail', {
        currentData
    })
})

app.use(router.routes())
app.listen(8888)