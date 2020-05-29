<template>
  <div class="detail_container">
    <div class="container_up">
      <div class="detail_content">
        <div class="imgContainer">
          <img v-if="detailData.image_path" :src="'cloud://buhairong.6275-buhairong-1302235292/'+detailData.image_path" />
        </div>
        <ul>
          <li class="store_title">{{detailData.title}}</li>
          <li class="store_price">
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            <img src="/static/images/b-star.png" />
            559条 ￥41/人
          </li>
          <li class="store_taste">口味：7.8 环境：8.3 服务：8.1</li>
          <li class="store_type">上地 快餐简餐</li>
        </ul>
      </div>
      <div class="local">
        <div class="content-show">
          <img src="/static/images/clock.png" /> 营业至21:00
          <img src="/static/images/wifi.png" /> WIFI
          <img src="/static/images/car.png" /> 停车场
          <img src="/static/images/more.png" />
        </div>
      </div>
      <div class="position">
        <img src="/static/images/position.png" />
        <div class="text-content">
          <span>上地十街辉煌国际西6号楼低商1-2楼(地铁13号线西二旗A口西500米)</span>
          <p>距离步行60m，需要1分钟</p>
        </div>
        <div class="phone-container">
          <img src="/static/images/phone.png" />
        </div>
      </div>
    </div>
    <div class="rule"></div>
    <div class="rank">
      <img class="rank-img" src="/static/images/rank.png" />
      「上地小吃快餐热榜」 第1名
      <img class="rank-more" src="/static/images/more.png" />
    </div>
    <div class="rule"></div>
    <div class="group-buying">
      <img class="group-buying-img" src="/static/images/group-buy.png" alt="团" />

      <div class="show-list-item">
        <img class="food-show" src="/static/images/eatPicture.png" />
        <div class="text-container">
          <span class="food-detail">
            单人商务套餐，提供免费WIFI
            <span>已售28</span>
          </span>
          <p>
            <span class="now-price">￥35</span>
            <span class="original-price">￥57</span>
          </p>
        </div>
      </div>

      <div class="show-list-item">
        <img class="food-show" src="/static/images/eatPicture.png" />
        <div class="text-container">
          <span class="food-detail">
            单人商务套餐，提供免费WIFI
            <span>已售28</span>
          </span>
          <p>
            <span class="now-price">￥35</span>
            <span class="original-price">￥57</span>
          </p>
        </div>
      </div>

      <div class="more-container">
        查看其他4个团购 <span class="more-arrows" ></span>
      </div>
      <div class="footer">
          <div @click="collect"><img :src="isCollect ? '/static/images/collect-active.png' : '/static/images/collect.png'" /> 收藏</div>
          <div><img src="/static/images/remark.png" /> 写点评</div>
      </div>
    </div>
  </div>
</template>

<script>
import Util from '../../utils'

const db = wx.cloud.database()

export default {
  data() {
    return {
      detailData: {},
      isCollect: false,
      openid: null
    };
  },
  components: {},
  async onLoad(e) {
    db.collection('dianping').doc(e.id).get().then(res => {
      this.detailData = res.data
    })

    // 是否收藏
    this.openid = await Util.getOpenId()

    let userInfo = await wx.getStorageSync(this.openid)

    if(userInfo) {
      console.log('onload4')
      let result = await db.collection('dianping-collect').where({
        openid,
        rid: e.id
      })

      if(result.data.length) {
        this.isCollect = true
      }else{
        this.isCollect = false
      }
    }
  },
  methods: {
    collect() {
      if(this.openid) {
        if(this.isCollect) {

        }else {
          db.collection('dianping-collect').add({
            data: {
              openid: this.openid,
              rid: this.detailData._id
            }
          }).then(res => {
            this.isCollect = true
          })
        }
      }else {
        wx.showToast({
          title: '请登录'
        })
      }
    }
  }
};
</script>

<style scoped>
.detail_container {
  display: flex;
  flex-direction: column;
  margin-top: 40rpx;
}
.container_up {
  padding-left: 32rpx;
  padding-right: 32rpx;
}
.detail_content {
  display: flex;
  border-bottom: 1px solid #efefef;
  padding-bottom: 20rpx;
}
.imgContainer {
  border: 1rpx solid #f0f0f0;
  padding: 1rpx;
  border-radius: 15rpx;
  margin-right: 32rpx;
  height: 212rpx;
}
.imgContainer img {
  width: 210rpx;
  height: 210rpx;
  border-radius: 15rpx;
}
.store_title {
  font-weight: bold;
  font-size: 30rpx;
  margin-bottom: 21rpx;
}
.store_price {
  font-size: 30rpx;
  color: #7b7b7b;
  font-weight: 200;
  margin-bottom: 21rpx;
  display: flex;
  flex-direction: row;
  line-height: 36rpx;
}
.store_price img {
  width: 33rpx;
  height: 33rpx;
  vertical-align: middle;
}
.store_taste {
  font-size: 26rpx;
  color: #868686;
  font-weight: 200;
  margin-bottom: 21rpx;
}
.store_type {
  font-size: 26rpx;
  color: #868686;
  font-weight: 200;
}
.content-show {
  font-weight: 150;
  border-bottom: 1px solid #e1e1e1;
}
.content-show img {
  width: 28rpx;
  height: 28rpx;
}
.content-show img:nth-child(2) {
  margin-left: 42rpx;
}
.content-show img:nth-child(3) {
  margin-left: 42rpx;
}
.content-show img:nth-child(4) {
  margin-left: 60rpx;
}
.local {
  height: 103rpx;
  display: block;
  line-height: 103rpx;
}
.position {
  height: 186rpx;
  display: flex;
  flex-direction: row;
  margin-top: 35rpx;
}
.position img {
  width: 21rpx;
  height: 28rpx;
  margin-top: 8rpx;
  margin-right: 21rpx;
}
.text-content {
  width: 500rpx;
}
.text-content p {
  font-size: 30rpx;
  color: #777777;
  margin-top: 15rpx;
}
.text-content span {
  font-size: 30rpx;
  color: #111111;
  font-weight: 200;
}
.phone-container {
  width: 96rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60rpx;
  margin-top: 30rpx;
  margin-left: 48rpx;
  border-left: 1px solid #e1e1e1;
}
.phone-container img {
  width: 32rpx;
  height: 35rpx;
}
/* 灰色分割线 */
.rule {
  width: 750rpx;
  height: 18rpx;
  background: #f6f6f6;
}
/* 小吃排行 */
.rank {
  height: 110rpx;
  width: 750rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #4d4d4d;
}
.rank-img {
  width: 40rpx;
  height: 40rpx;
  margin-left: 28rpx;
}
.rank-more {
  width: 17rpx;
  height: 28rpx;
  margin-left: 210rpx;
}

/* 团列表 */
.group-buying {
  display: flex;
  flex-direction: column;
}
.group-buying-img {
  width: 40rpx;
  height: 40rpx;
  margin-left: 28rpx;
  margin-top: 28rpx;
  position: absolute;
}
/* 食物显示 */
.food-show {
  width: 120rpx;
  height: 120rpx;
  border-radius: 15rpx;
  margin-right: 21rpx;
}
.show-list-item {
  display: flex;
  flex-direction: row;
  margin-left: 88rpx;
  margin-top: 26rpx;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 17rpx;
}
.food-detail {
  font-size: 28rpx;
  font-weight: 200;
}
.food-detail span {
  font-size: 26rpx;
  color: #9a9a9a;
}
.now-price {
  font-size: 35rpx;
  color: #ff6633;
  margin-right: 14rpx;
}
.original-price {
  text-decoration: line-through;
  font-size: 24rpx;
  color: #777777;
}
.text-container {
  padding-top: 20rpx;
}
.food-detail span {
  margin-left: 40rpx;
}
.more-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 28rpx;
  font-size: 24.5rpx;
  font-weight: 200;
}
.more-arrows{
  margin-left: 10rpx;
  /* border: 1px solid; */
  border-bottom: 1px solid #bbbbbb;
  border-right: 1px solid #bbbbbb;
  width: 18rpx;
  height: 18rpx;
  display: block;
  rotate: 45deg;
}
/* 底部样式 */
.footer{
  height: 86rpx;
  display: flex;
  flex-direction: row;
  background: #fcfcfb;
  align-items: center;
  color: #707070;
}
.footer div{
  flex:1;
  display: flex;
  justify-content:center;
  height: 34rpx;
  font-size: 28rpx;
}
.footer div:nth-child(1){
  border-right: 1px solid;
}
.footer img{
  width: 34rpx;
  height: 34rpx;
  vertical-align: middle;
  margin-right: 10rpx;
}

</style>
