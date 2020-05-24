// pages/game/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    userInfo: null,
    usersArr: [],
    startTime: null,
    message: ""
  }, 

  async getInfo() {
    let userInfo = await this.getUserInfo()
    let openid = await this.getOpenId()
    userInfo.openid = openid
    wx.setStorageSync(openid, JSON.stringify(userInfo))
    
    wx.sendSocketMessage({
      data: JSON.stringify(userInfo),
    })

    wx.onSocketMessage((res) => {
      console.log(res)
      let usersArr = JSON.parse(res.data)
      this.setData({
        isLogin: true,
        usersArr
      })
    })
  },

  getUserInfo() {
    // 获取用户信息
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        success: (res) => {
          let userInfo = res.userInfo  
          resolve(userInfo)      
        },
        fail: (err) => {
          reject(err)
        }
      })
    })    
  },

  getOpenId() {
    // 获取 openid
    return new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          let code = res.code
          wx.request({
            url: "https://api.weixin.qq.com/sns/jscode2session?appid=wx4a74252abccb50b6&secret=6bc9553e6694fa5c392effd060365131&js_code="+code+"&grant_type=authorization_code",
            success: res => {
              let openid = res.data.openid
              resolve(openid)              
            },
            fail: (err) => {
              reject(err)
            }
          })
        }
      })
    })
  },

  startTime() {
    let startTime = new Date().getTime()
    this.setData({
      startTime
    })
  },

  async endTime() {
    let endTime = new Date().getTime()
    let tapTime = (endTime - this.data.startTime)/1000
    console.log(tapTime)

    if(tapTime > 0 && tapTime <= 1) {
      this.setData({
        message: "差太远！！"
      })
    }else if(tapTime > 1 && tapTime <= 2.5) {
      this.setData({
        message: "接近了！！"
      })
    }else if(tapTime > 2.5 && tapTime <= 3.5) {
      this.setData({
        message: "太棒了！！"
      })
    }else {
      this.setData({
        message: "超了！！"
      })
    }
    
    let openid = await this.getOpenId()
    let userInfo = JSON.parse(wx.getStorageSync(openid))
    userInfo.tapTime = tapTime

    wx.sendSocketMessage({
      data: JSON.stringify(userInfo)
    })

    wx.onSocketMessage((res) => {
      let usersArr = JSON.parse(res.data)
      this.setData({
        isLogin: true,
        usersArr
      })
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 连接socket
    wx.connectSocket({
      url: 'ws://192.168.3.11:8282',
    })

    wx.onSocketOpen(async () => {
      console.log('连接成功')
      let openid = await this.getOpenId()
      let userInfo = wx.getStorageSync(openid)
      console.log(userInfo)

      if(userInfo) {
        // 已经登录 把登录信息推送到 socket 服务器广播
        wx.sendSocketMessage({
          data: JSON.stringify(userInfo),
        })
    
        wx.onSocketMessage((res) => {
          console.log(JSON.parse(res.data))
          let usersArr = JSON.parse(res.data)
          this.setData({
            isLogin: true,
            usersArr
          })
        })
      }else {
        // 没有登录
        this.setData({
          isLogin: false
        })
      }


      // if(wx.getStorageSync("userInfo")) {
      //   let userInfo = JSON.parse(wx.getStorageSync("userInfo"))
      //   this.setData({
      //     userInfo,
      //     isLogin: true,
      //     usersArr: [...this.data.usersArr, userInfo]
      //   })
  
      //   // 发送服务端广播
      //   wx.sendSocketMessage({
      //     data: JSON.stringify(userInfo)
      //   })
  
      //   wx.onSocketMessage((res) => {
      //     console.log(JSON.parse(res.data))
      //     this.setData({
      //       usersArr: JSON.parse(res.data)
      //     })
      //   })
      // }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})