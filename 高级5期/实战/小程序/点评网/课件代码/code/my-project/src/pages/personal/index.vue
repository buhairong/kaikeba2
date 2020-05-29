<template>
  <div class="personal">
    <div class="person-picture" v-if="isLogin">
      <img class="person-img" :src="userInfo.avatarUrl" alt />
    </div>
    <span v-if="isLogin">{{userInfo.nickName}}</span>
    <button v-if="!isLogin" open-type="getUserInfo" @getuserinfo="getUserInfo">点击登录</button>
    <div class="collection" @click="goToCollect">
      <span @click="goToCollect" class="collection-text">收藏列表</span>
      <span class="right-arrows"></span>
    </div>
    <div class="downPage"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      userInfo: null
    };
  },
  components: {},
  onLoad() {
    // 获取openid  ， 缓存openid；
    wx.login({
      success(res) {
        console.log(res);
        if (res.code) {
          //发起网络请求
          // 通过code换取唯一标识符openid；
          wx.request({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx001d76e76040ab4e&secret=41e0e38072ede614f8a0641da7648920&js_code=${
              res.code
            }&grant_type=authorization_code`, //仅为示例，并非真实的接口地址
            success(res) {
              console.log(res.data);
              // 通过本地存储储存openid
              wx.setStorage({
                key: "openid",
                data: res.data.openid
              });
            }
          });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  },
  onShow() {
    var userInfo = wx.getStorageSync("userInfo");
    if (userInfo) {
      this.userInfo = userInfo;
      this.isLogin = true;
    }
  },
  methods: {
    getUserInfo() {
      wx.getUserInfo({
        success: res => {
          console.log(res);
          this.isLogin = true;
          this.userInfo = res.userInfo;
          // 通过缓存储存用户信息；
          wx.setStorage({
            key: "userInfo",
            data: res.userInfo
          });
        }
      });
    },
    goToCollect(){
        wx.navigateTo({
          url:"/pages/collectList/main"
        })
    }
  }
};
</script>

<style scoped>
.personal {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20rpx;
  font-size: 26rpx;
}

.person-picture {
  border-radius: 50%;
  width: 204rpx;
  height: 204rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #f3f5f2;
}
.collection {
  margin-top: 24rpx;
  width: 750rpx;
  height: 100rpx;
  line-height: 100rpx;
  border-top: 1px solid #dddddd;
}
.person-img {
  border-radius: 50%;
  width: 200rpx;
  height: 200rpx;
}
.collection-text {
  float: left;
  display: block;
  margin-left: 30rpx;
}
.right-arrows {
  width: 18rpx;
  height: 18rpx;
  display: block;
  rotate: 45deg;
  border-right: 1px solid;
  border-top: 1px solid;
  float: right;
  margin-top: 40rpx;
  margin-right: 35rpx;
}
.downPage {
  width: 750rpx;
  height: 780rpx;
  background: #cccccc;
}
</style>
