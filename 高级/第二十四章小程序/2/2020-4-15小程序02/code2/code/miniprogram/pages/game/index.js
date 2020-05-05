// pages/game/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    userInfo:null,
    usersArr:[],
    startTime:null,
    message:""
  },
  getInfo(){
      wx.getUserInfo({
        success:res=>{
          console.log(res);
          let userInfo = res.userInfo;
          // 获取openid；
          wx.login({
            success: res => {
              console.log(res);
              let code = res.code;
              wx.request({
                url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx001d76e76040ab4e&secret=5299a4635aea2175965aa6ff4cc38771&js_code=${code}&grant_type=authorization_code`,
                success: res => {
                  // console.log(res);
                  let openid = res.data.openid;
                  userInfo.openid = openid;
                  this.setData({ userInfo, isLogin: true, usersArr: this.data.usersArr.push(userInfo)});
                  wx.setStorageSync("userInfo", JSON.stringify(userInfo));
                  // 发送服务端广播
                  wx.sendSocketMessage({
                    data: JSON.stringify(userInfo)
                  })
                  wx.onSocketMessage(function(res){
                      console.log(res);
                  })
                  // console.log(userInfo)
                }
              })
            }
          })

        }
      })
  },
  startTime(){
    let startTime = new Date().getTime();
    // console.log(startTime);
    this.setData({ startTime})
  },
  endTime(){
    let endTime = new Date().getTime();
    let tapTime = (endTime - this.data.startTime)/1000;
    // console.log(tapTime)
    if(tapTime>0 && tapTime<=1){
        this.setData({message:"差太远！！"})
    } else if (tapTime > 1 && tapTime<=2.5){
      this.setData({ message: "接近了！！" })
    }else if (tapTime >2.5 && tapTime <=3.5){
      this.setData({ message: "太棒了！！" })
    }else {
      this.setData({ message: "超了！！" })
    }
  // 练习：点击按钮同步点击的分数；清空断开连接的用户；

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 连接socket
    wx.connectSocket({
      url: 'ws://172.20.10.3:8282'
    })
    wx.onSocketOpen(() => {
      console.log("连接成功");

      if (wx.getStorageSync("userInfo")) {
        let userInfo = JSON.parse(wx.getStorageSync("userInfo"));
        console.log(userInfo);
        this.setData({ userInfo, usersArr: [...this.data.usersArr, userInfo], isLogin: true });
        // console.log(this.data.usersArr)
        wx.sendSocketMessage({
          data: JSON.stringify(userInfo)
        })
        wx.onSocketMessage( (res)=> {
          console.log("??", JSON.parse( res.data ));
          this.setData({ usersArr: JSON.parse(res.data) })
        })


      }

      
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