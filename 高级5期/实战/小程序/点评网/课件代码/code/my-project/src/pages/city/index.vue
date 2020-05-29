<template>
  <div class="city_container">
    <scroll-view class="scrollView" scroll-y :scroll-into-view="letter">
      <div class="right-letter">
        <span>热门</span>
        <span v-for="(v,k) in letters" :key="k" @click="scrollToLetter(v)">{{v}}</span>
      </div>
      <div class="location">
        <span class="chiose-city">北京市</span>
        <span class="gps">GPS定位</span>
      </div>
      <div class="hot-city">
        <div class="city-title">热门城市</div>
        <div class="hot-city-container">
          <div>上海</div>
          <div>北京</div>
          <div>广东</div>
          <div>深圳</div>
          <div>天津</div>
          <div>杭州</div>
          <div>南京</div>
          <div>苏州</div>
          <div>成都</div>
          <div>武汉</div>
          <div>重庆</div>
          <div>西安</div>
        </div>
        <div v-for="(v,k) in cityData" :key="k" :id="v.letter">
          <div class="letter">{{v.letter}}</div>
          <ul class="city-list" v-for="(city,key) in v.citys" :key="key">
            <li @click="showCity(city)">{{city}}</li>
          </ul>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
let cityData = require("../../utils/cityData.js");
// console.log(cityData);
let app = getApp();
export default {
  data() {
    return {
      address: "无",
      cityData: cityData,
      letters: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      letter: ""
    };
  },
  onLoad(options) {
    console.log(options);
    this.address = options;
  },
  components: {},
  methods: {
    scrollToLetter(letter) {
      // console.log(letter);
      this.letter = letter;
    },
    showCity(city) {
      console.log(city);
      app.globalData.address = city;
      wx.navigateBack({
        delta: 1
      });
      
    }
  }
};
</script>

<style scoped>
.location {
  display: flex;
  width: 750rpx;
  height: 90rpx;
  align-items: center;
}
/* 城市标题 */
.city-title {
  font-size: 28rpx;
  color: #aaaaaa;
  margin-top: 20rpx;
  margin-left: 30rpx;
  margin-bottom: 18rpx;
}
.chiose-city {
  font-size: 24rpx;
  margin-left: 30rpx;
  margin-right: 20rpx;
}
.gps {
  color: #c0c0c0;
  font-size: 20rpx;
}
.hot-city {
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  width: 750rpx;
  height: 464rpx;
  border-bottom: 1px solid #dfdfdf;
  border-top: 1px solid #dfdfdf;
}
.hot-city-container {
  margin-left: 28rpx;
  margin-right: 70rpx;
}
.hot-city-container div {
  width: 200rpx;
  height: 70rpx;
  background: white;
  float: left;
  text-align: center;
  margin-right: 8rpx;
  margin-top: 8rpx;
  border: 2px solid #dedede;
  line-height: 70rpx;
  font-size: 24rpx;
}
.letter {
  color: #aeaeae;
  font-size: 22rpx;
  margin-left: 30rpx;
  margin-top: 6rpx;
}
.city-list {
  margin-left: 28rpx;
}
.city-list li {
  height: 90rpx;
  border-bottom: 1px solid #dedede;
  line-height: 90rpx;
  font-size: 24rpx;
}
/* 右侧的字母 */
.right-letter {
  width: 40rpx;
  position: fixed;
  right: 20rpx;
  top: 200rpx;
  display: flex;
  flex-direction: column;
  font-size: 18rpx;
  color: #515b67;
}
.right-letter span {
  text-align: center;
  margin-bottom: 4rpx;
}
.scrollView {
  height: 1334rpx;
}
</style>
