// pages/welcome/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '测试数据',
    judge: true
  },

  fn(e) {
    console.log('fn...',e.currentTarget.dataset.id)
    this.setData({
      message: '修改的值',
      judge: !this.data.judge
    })
  },

  getData() {
    wx.request({
      url: "http://localhost:8989/getList",
      method: "post",
      data: {
        name: "kkb"
      },
      success(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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