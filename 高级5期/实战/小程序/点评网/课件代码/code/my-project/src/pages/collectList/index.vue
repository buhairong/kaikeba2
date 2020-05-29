<template>
  <div>
    <CollcetList :favorList="favorList"></CollcetList>
  </div>
</template>

<script>
import CollcetList from '../../components/CollectItem.vue';
const db = wx.cloud.database();
const _ = db.command;
export default {
  data() {
    return {
      favorList: []
    };
  },
  components: {CollcetList},
  async onLoad() {
    var openid = wx.getStorageSync("openid");
    var userInfo = wx.getStorageSync("userInfo");
    if (openid && userInfo) {
      // 获取集合里的收藏店铺的id
      let res = await db
        .collection("collect")
        .where({
          openid
        })
        .get();
      // console.log(res);
      let ids = [];
      res.data.forEach(item => {
        ids.push(item.id);
      });
      // console.log(ids);
      let result = await db
        .collection("favorList")
        .where({
          id: _.in(ids)
        })
        .get();
      this.favorList = result.data;
      // console.log(result);
    } else {
      wx.showToast({
        title: "请先登录",
        icon: "none",
        duration: 2000
      });
    }
  }
};
</script>

<style scoped>
</style>
