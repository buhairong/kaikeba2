//作业： 1.加载主页和详细页面 2.动态呈现主页数据（读取数据-->通过数据组装html-->html呈现在前端）；
// 主页路由是"/"或者是"/index"  详细页面路由 "/detail";

const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const mime = require('./views/mime.json')

const data = JSON.parse(fs.readFileSync('./views/data.json').toString())
const pageSize = 5
let currentPage = 1
const pages = Math.ceil(data.length / pageSize)
const endHtml = '</div></body></html>'

// 拼接页码
let pagination = () => {
    let str = ''
    let prevPage = currentPage <= 1 ? 1 : currentPage - 1
    let nextPage = currentPage >= pages ? pages : currentPage*1 + 1
    if (pages > 1) {
        str = `<div class="pagination"><a href="index.html?page=${prevPage}" class="prev">⌜</a>`

        for(let i = 1; i<= pages; i++) {
            str+= `<a href="index.html?page=${i}">${i}</a>`
        }

        str+= `<a href="index.html?page=${nextPage}" class="next">⌝</a></div>`
    }

    return str
}

// 拼接新闻列表
let list = (currentPage) => {
    let str = '<ul class="news-list">'

    let currentPageData = data.filter((item, index) => {
        return index >= (currentPage-1) * pageSize && index < currentPage * pageSize
    })

    currentPageData.forEach(item => {
        str += `
            <li class="news">
                <a href="detail.html?id=${item.id}">
                    <img src="${item.imgUrl}" alt="">
                </a>
                <div>
                    <h3>
                        <a href="detail.html?id=${item.id}">${item.title}</a>
                    </h3>
                    <div class="info">
                        <span class="tips"><span>${item.country}</span></span>
                        <span class="time">| &nbsp;&nbsp;${item.addTime}</span>
                    </div>
                </div>
            </li>
        `
    })

    str += '</ul>'

    return str
}

// 拼接详情页
let getDetail = (id) => {
    let str = ''
    let item = data.find(item => item.id == id)
    if (item) {
        str += `
            <h1 class="title">${item.title}</h1>
            <div class="article-info"> ${item.country} 时间：${item.addTime}</div>
            <p class="content">
                ${item.content}
            </p>
        `
    }

    return str
}

// 获取参数
let getParam = (queryString, param) => {
    let value = null
    let arr = queryString.split('&')
    for(let item of arr) {
        let obj = item.split('=')
        if (obj[0] === param) {
            value = obj[1]
            break
        }
    }

    return value
}

const server = http.createServer((req, res) => {
    let obj = url.parse(req.url)

    console.log('obj', obj)

    if(obj.pathname === '/' || obj.pathname === '/index.html') {
        res.setHeader('content-type', 'text/html;charset=utf8')
        let indexData = fs.readFileSync('./views/index.html').toString()
        let startIndex = indexData.indexOf('<div class="wrap">')
        let startHtml = indexData.substr(0, startIndex+18)
        let html = startHtml
        if(obj.query) {
            let query = getParam(obj.query, 'page')
            if(query) {
                currentPage = query
            }
        }
        html += list(currentPage)
        html += pagination()
        html += endHtml
        res.write(html)
    }else if(obj.pathname === '/detail.html') {
        res.setHeader('content-type', 'text/html;charset=utf8')
        let indexData = fs.readFileSync('./views/detail.html').toString()
        let startIndex = indexData.indexOf('<div class="text">')
        let startHtml = indexData.substr(0, startIndex+18)
        let html = startHtml
        let id = 1
        if(obj.query) {
            let query = getParam(obj.query, 'id')
            if(query) {
                id = query
            }
        }
        html += getDetail(id)
        html += endHtml
        res.write(html)
    }else {
        if(obj.pathname !== '/favicon.ico') {
            let ext = path.extname(obj.pathname)
            res.setHeader('content-type', mime[ext])
            let resData = fs.readFileSync('views' + obj.pathname)
            res.write(resData)
        }
    }

    res.end()
})

server.listen(8888)