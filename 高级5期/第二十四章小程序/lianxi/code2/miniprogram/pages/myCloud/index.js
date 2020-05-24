// pages/myCloud/index.js
const db = wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  addData() {
    db.collection('test1').add({
      data: {
        name: '李四',
        age: 20
      }
    }).then(res => {
      console.log(res)
    })    
  },

  delData() {
    db.collection('test1').doc('989f4e215eca757f002c32ba443bd7e8').remove().then(res => {
      console.log(res)
    })
  },

  updateData() {
    db.collection('test1').doc('d721728a5eca78da0029ce577f5393bd').update({
      data: {
        name: '王五'
      }
    }).then(res => {
      console.log(res)
    }) 
  },

  getData() {
    db.collection('test1').where({
      age: _.gt(18)
    }).get().then(res => {
      console.log(res)
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