<template>
  <div>
    <div class="title_content">
      <div class="bar_title">开课吧点评</div>
      <div class="area">
        <span @click="goToCity" class="area_name">{{address}}</span>
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

      <div class="love_item" v-for="(v,k) in favorList" :key="k" @click="showDetail(v.id)">
        <img :src="'cloud://dianping-830xs.6469-dianping-830xs-1300966336/'+v.image_path" />
        <ul class="list_right">
          <li class="list_title">{{v.title}}</li>
          <li class="list_price">
           <Star :score="v.score"></Star>
            ￥{{v.price}}/人
          </li>
          <li class="list_local">{{v.specific}}</li>
          <li class="list_tag">
            <span v-for="(item,key) in v.labelArr" :key="key">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading" v-if="isLoading">正在加载更多内容...</div>
  </div>
</template>

<script>
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
    key: '2UEBZ-QFN3W-MFAR6-RS57X-AE3OE-EIFSW' // 必填
});  
import Star from '../../components/Star.vue';
let app = getApp();
const db = wx.cloud.database();
export default {
  data() {
    return {
      address: "加载中...",
      favorList:[],
      isLoading:false,
      page:1
    };
  },
  onReachBottom(){
      console.log("触底了...")
      this.Loading = true;
    db.collection("favorList").skip((this.page-1)*10).limit(10).get().then(res=>{
    res.data.forEach((item,key)=>{
        res.data[key]['labelArr'] = item.label.split(",").splice(0,4);
    })
     console.log(res);
    this.favorList = [...this.favorList,...res.data]
     this.Loading = false;
  })
  },
  onLoad() {
    // 定位；
    wx.getLocation({
      type: "wgs84",
      success:res=>{
        console.log(res);
        // 反解析；
        qqmapsdk.reverseGeocoder({
           location: {
          latitude: res.latitude,
          longitude: res.longitude
        },
        success: result=> {
            let address = result.result.address_component.city;
            //  console.log(address);
            this.address = address;
        }
        })
      }
    });
  // 获取数据
  db.collection("favorList").skip((this.page-1)*10).limit(10).get().then(res=>{
    res.data.forEach((item,key)=>{
        res.data[key]['labelArr'] = item.label.split(",").splice(0,4);
    })
     console.log(res);
    this.favorList = res.data
    this.page++;
  })

  },
  onShow(){
    if(typeof app.globalData.address !== 'undefined'){
          this.address = app.globalData.address;
    }
  },
  components: {
    Star
  },
  methods: {
    goToCity(){
        // 跳转到城市选择页面
        wx.navigateTo({
           url: '/pages/city/main?address='+this.address,
        })
    },
    showDetail(id){
      // console.log(id);
      wx.navigateTo({
        url:"/pages/detail/main?id="+id
      })
    },
    goToPersonal(){
      wx.navigateTo({
        url:"/pages/personal/main"
      })
    }
  },

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
