// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
const cheerio = require('cheerio')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let res = await axios.get('https://news.ifeng.com/')
  let $ = cheerio.load(res.data)
  let arr = []
  $('.news-stream-newsStream-mr13 a').each((k, v) => {
    let obj = {
      title: $(v).text()
    }
    arr.push(obj)
  })

  return arr
}