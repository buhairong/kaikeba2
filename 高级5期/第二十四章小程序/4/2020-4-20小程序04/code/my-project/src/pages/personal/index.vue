<template>
<div>
  <button v-if="!isLogin" open-type="getUserInfo" @getuserinfo="getUser">点击登录</button>
  <div class="personal" v-if="isLogin" >
    <div class="person-picture">
      <img class="person-img" :src="userInfo.avatarUrl" alt />
    </div>
    <span>{{userInfo.nickName}}</span>
    <div class="collection" >
      <span class="collection-text">收藏列表</span>
      <span class="right-arrows"></span>
    </div>
    <div class="downPage"></div>
  </div>
</div>
  
</template>

<script>
import Util from '../../utils/index.js';
export default {
  data() {
    return {
      isLogin:false,
      userInfo:{}
    };
  },
  components: {},
 async onLoad(){
      let openid =await Util.getOpenid();
      console.log(openid);
     if(wx.getStorageSync(openid)){
        // 登录过；
        this.userInfo = JSON.parse( wx.getStorageSync(openid) );
        console.log(this.userInfo);
        this.isLogin = true;
     }
  },
  methods: {
   async getUser(){
      let userInfo =   await Util.getUserInfo();
      let openid = await Util.getOpenid();
      userInfo.openid = openid;
      this.isLogin = true;
      this.userInfo = userInfo;
      wx.setStorageSync(openid,JSON.stringify(userInfo));
    }
  },
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
.collection{
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
.collection-text{
    float: left;
    display: block;
    margin-left: 30rpx;
}
.right-arrows{
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
.downPage{
  width: 750rpx;
  height: 780rpx;
  background: #cccccc;
}
</style>
