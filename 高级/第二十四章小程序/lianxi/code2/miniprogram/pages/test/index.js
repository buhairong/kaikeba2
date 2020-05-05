// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  sendMessage() {
    wx.sendSocketMessage({
      data: "some value..."
    })

    wx.onSocketMessage(res => {
      console.log(JSON.parse(res.data))
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 连接 websocket
    wx.connectSocket({
      url: "ws://192.168.3.11:8282/"
    })
    wx.onSocketOpen(() => {
      console.log("连接成功")
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