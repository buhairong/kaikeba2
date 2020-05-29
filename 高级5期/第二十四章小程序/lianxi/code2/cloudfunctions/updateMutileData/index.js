// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(event)

  try {
    return await db.collection('test1').where({
      age: _.gt(15)
    })
    .update({
      data: {
        height: '178cm'
      },
    })
  } catch(e) {
    console.error(e)
  }
}