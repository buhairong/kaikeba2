function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

function getUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: res => {
        resolve(res.userInfo)
      },
      fail: err =>{
        reject(err)
      }
    })
  })
}

function getOpenId() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        if(res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx4a74252abccb50b6&secret=4d77f76317233c606ba560de9744c6a7&js_code='+res.code+'&grant_type=authorization_code',
            success: res => {
              resolve(res.data.openid)
            },
            fail: err => {
              reject(err)
            }
          })
        }
      },
      fail: err =>{
        reject(err)
      }
    })
  })
}

export default {
  formatNumber,
  formatTime,
  getUserInfo,
  getOpenId
}
