// pages/news/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsData: [],
    p: 1
  },

  getData() {
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: "http://localhost:8989/getData?p="+this.data.p,
      success: res => {
        this.setData({
          newsData: [...this.data.newsData, ...res.data],
          p: this.data.p+1
        })
        wx.hideLoading()
      }
    })
  },

  showDetail(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: "/pages/newsDetail/index?id="+id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})