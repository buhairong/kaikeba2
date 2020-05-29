<template>
  <div>
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
</template>

<script>
export default {
  props: ["favorList"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
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
