<template>
  <div>
    <div class="title_content">
      <div class="bar_title">开课吧点评</div>
      <div class="area">
        <span class="area_name" @click="goToCity">{{address}}</span>
        <img class="downIcon" src="/static/images/down.png" />
        <img @click="goToPersonal" class="people" src="/static/images/people.png" />
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

      <div class="love_item" v-for="(item,key) in remarkData" :key="key" @click="showDetail(item._id)">
        <img :src="'cloud://dianping-830xs.6469-dianping-830xs-1300966336/'+item.image_path" />
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
            <span v-for="(v,k) in item.labelArr" :key="k" v-if="v">{{v}}</span>
          </li>
        </ul>
      </div>

      <!-- <div class="love_item">
        <img src="/static/images/eatPicture.png" />
        <ul class="list_right">
          <li class="list_title">大碗居(万柳店)</li>
          <li class="list_price">
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            ￥81/人
          </li>
          <li class="list_local">草桥 北京菜</li>
          <li class="list_tag">
            <span>古色古香</span>
            <span>菜色精致</span>
            <span>菜色精致</span>
            <span>菜色精致</span>
          </li>
        </ul>
      </div> -->
    </div>
    <div class="loading">正在加载更多内容...</div>
  </div>
</template>

<script>
// 引入SDK核心类
var QQMapWX = require("../../utils/qqmap-wx-jssdk.js");
// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: "2UEBZ-QFN3W-MFAR6-RS57X-AE3OE-EIFSW" // 必填
});
let app = getApp();
const db = wx.cloud.database();
export default {
  data() {
    return {
      address: "加载中...",
      remarkData:[],
      p:1
    };
  },
  components: {},
  onLoad() {
    // 定位地址；
    wx.getLocation({
      type: "wgs84",
      success: res => {
        console.log(res);
        qqmapsdk.reverseGeocoder({
          //Object格式
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            console.log(res.result.address_component.city);
            // console.log(this);
            this.address = res.result.address_component.city;
          }
        });
      }
    });
    console.log("onload...");
    // // 读取全局有没有address
    // if( app.globalData.address){
    //   this.address = app.globalData.address;
    // }
    // 获取数据；
    this.getData();
  },
  onShow() {
    console.log("onShow...");
    if (app.globalData.address) {
      this.address = app.globalData.address;
    }
  },
  onReachBottom(){
    console.log("触底了..");
    this.getMoreData();
  },
  methods: {
    goToPersonal(){
        wx.navigateTo({
          url:"/pages/personal/main"
        })
    },
    goToCity() {
      wx.navigateTo({
        url: "/pages/city/main?address=" + this.address
      });
    },
   async getData(){
        // 获取商家信息；
     let res =   await db.collection('js05remark').get();
       
        for(let i=0;i<res.data.length;i++){
          res.data[i].labelArr = res.data[i].label.split(",").slice(0,4);
        }
        this.remarkData = res.data;
         console.log( this.remarkData );
         this.p++;
    },
   async getMoreData(p){
      //  limit 2,2  -- > skip(2).limit(2)
     let res = await db.collection('js05remark').skip((this.p-1)*5).limit(5).get();
     console.log(res);
     this.remarkData = [...this.remarkData,...res.data]
    },
    showDetail(id){
      console.log(id);
      wx.navigateTo({
        url:"/pages/detail/main?id="+id
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
}
.menu_item img {
  width: 88rpx;
  height: 88rpx;
  margin: 20rpx 20rpx;
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
.list_right {
  margin-left: 28rpx;
}
.list_title {
  font-weight: bold;
  font-size: 28rpx;
  margin-bottom: 8rpx;
}
.list_price {
  font-size: 20rpx;
  margin-bottom: 8rpx;
}
.list_price img {
  width: 25rpx;
  height: 25rpx;
  vertical-align: middle;
}
.list_local {
  font-size: 20rpx;
  color: #666666;
  margin-bottom: 8rpx;
}
.list_tag {
  display: flex;
  flex-direction: row;
}
.list_tag span {
  display: flex;
  font-size: 20rpx;
  color: #666666;
  border: 1px solid #bbbbbb;
  width: 108rpx;
  height: 41rpx;
  justify-content: center;
  align-items: center;
  margin-right: 8rpx;
}
.loading {
  width: 750rpx;
  background: #f0f0f0;
  color: #666666;
  text-align: center;
  padding-top: 30rpx;
  font-size: 24rpx;
}
</style>
