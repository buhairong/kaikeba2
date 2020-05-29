<template>
  <div>
    <div class="title_content">
      <div class="bar_title">开课吧点评</div>
      <div class="area">
        <span class="area_name" @click="goToCity">{{address}}</span>
        <img class="downIcon" src="/static/images/down.png" />
        <img class="people" src="/static/images/people.png" @click="goToPersonal"/>
      </div>
    </div>
    <div class="menu_content">
      <div class="menu_item">
        <img src="/static/images/eat.png" />
        <span>美食</span>
      </div>
      <div class="menu_item">
        <img src="/static/images/ktv.png" />
        <span>KTV</span>
      </div>
      <div class="menu_item">
        <img src="/static/images/foot.png" />
        <span>足疗/按摩</span>
      </div>
      <div class="menu_item">
        <img src="/static/images/hotel.png" />
        <span>酒店</span>
      </div>
      <div class="menu_item">
        <img src="/static/images/improve.png" />
        <span>丽人/美发</span>
      </div>
    </div>
    <div class="line_gray"></div>
    <div class="gass_love">
      <span class="love_title">猜你喜欢</span>

      <div class="love_item" v-for="item in remarkData" :key="_id" @click="showDetail(item._id)">
        <img :src="'cloud://buhairong.6275-buhairong-1302235292/'+item.image_path" />
        <ul class="list_right">
          <li class="list_title">{{item.title}}</li>
          <li class="list_price">
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            ￥{{item.price}}/人
            </li>
          <li class="list_local">{{item.specific}}</li>
          <li class="list_tag">
            <span v-for="(label, k) in item.labelArr" :key="k">{{label}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading" >
          {{msg}}
    </div>
  </div>
</template>

<script>
let app = getApp()
const db = wx.cloud.database()

// 引入SDK核心类
const QQMapWX = require('../../utils/qqmap-wx-jssdk')

// 实例化API核心类
const qqmapsdk = new QQMapWX({
  key: '3WTBZ-DI6WD-57T4R-HMHFV-HQ4ZZ-SGBCS' // 必填
})
export default {
  data() {
    return {
      address: '加载中...',
      remarkData: [],
      p: 1,
      msg: '正在加载更多内容...'
    };
  },
  components: {},
  onLoad() {
    // 定位地址
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            this.address = res.result.address_component.city
          }
        })
      }
    })
    this.getData()
  },
  onShow() {
    if(app.globalData.address) {
      this.address = app.globalData.address
    }
  },
  onReachBottom() {
    this.getData()
  },
  methods: {
    goToCity() {
      wx.navigateTo({
        url: '/pages/city/main?address='+this.address
      })
    },
    async getData() {
      // 获取商家信息
      try{
        const list = await db.collection('dianping').skip((this.p-1)*5).limit(5).get()
        if(list.data.length < 5) {
          this.msg= '我是有底线的'
        }else {
          list.data.forEach(item => item.labelArr = item.label.split(','))
          this.remarkData = [...this.remarkData, ...list.data]
          this.p++
        }
      }catch(err) {
        this.msg= '我是有底线的'
      }
    },
    showDetail(id) {
      wx.navigateTo({
        url: '/pages/detail/main?id='+id
      })
    },
    goToPersonal() {
      wx.navigateTo({
        url: '/pages/personal/main'
      })
    }
  }
};
</script>

<style scoped>

.home_container {
  width: 750rpx;
  height: 300rpx;
  background: red;
}

.title_content {
  width: 750rpx;
  height: 194rpx;
  background: #181818;
  display: flex;
  flex-direction: column;
}
.bar_title {
  color: white;
  margin-top: 60rpx;
  margin-left: 34.5rpx;
  font-size: 28rpx;
}
.area {
  color: #d4ab81;
  font-size: 22rpx;
  margin-top: 33rpx;
}
.area_name {
  margin-left: 36rpx;
  margin-right: 9rpx;
}
.downIcon {
  width: 10rpx;
  height: 8rpx;
}
.people {
  width: 48rpx;
  height: 48rpx;
  vertical-align: middle;
  position: absolute;
  right: 28rpx;
}
.menu_content {
  width: 750rpx;
  height: 198rpx;
  display: flex;
  flex-direction: row;
}

.line_gray {
  height: 18rpx;
  background: #f0f0f0;
  width: 750rpx;
}
.menu_item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu_item img {
  width: 88rpx;
  height: 88rpx;
  margin: 20rpx 0;
}
.menu_item span {
  font-size: 24rpx;
}
/* 猜你喜欢 */
.gass_love {
  display: flex;
  flex-direction: column;
  padding-left: 28rpx;
}
.love_item {
  width: 750rpx;
  height: 208rpx;
  border-bottom: 4rpx solid #f0f0f0;
}
.love_title {
  font-size: 30rpx;
  color: #7c7c7c;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}
.love_item {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.love_item img {
  width: 155rpx;
  height: 155rpx;
  border: 2px solid#f0f0f0;
}
.list_right{
  margin-left: 28rpx;
}
.list_title{
  font-weight: bold;
  font-size: 28rpx;
  margin-bottom: 8rpx;
}
.list_price{
  font-size: 20rpx;
   margin-bottom: 8rpx;
}
.list_price img{
  width: 25rpx;
  height: 25rpx;
  vertical-align: middle;
}
.list_local{
  font-size: 20rpx;
  color: #666666;
   margin-bottom: 8rpx;
}
.list_tag{
  display: flex;
  flex-direction: row;
}
.list_tag span{
  display: flex;
  font-size: 20rpx;
  color: #666666;
  border: 1px solid #bbbbbb;
  width: 108rpx;
  height: 41rpx;
  justify-content:center;
  align-items: center;
  margin-right: 8rpx;
}
.loading{
  width: 750rpx;
  background: #f0f0f0;
  color: #666666;
  text-align: center;
  padding-top: 30rpx;
  font-size: 24rpx;
}
</style>
