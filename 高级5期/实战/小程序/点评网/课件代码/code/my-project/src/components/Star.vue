<template>
  <div class="starContainer">
    <img v-for="(item,key) in starArr" :key="key" :src="'/static/images/b-'+item+'.png'" />
  </div>
</template>

<script>
export default {
    props: ["score"],
  data() {
    return {};
  },
  components: {},
  computed: {
      starArr:function(){
        let score =  this.score/2;
        let scoreArr = []; 
        //   全星；
        for(let i=0;i<score;i++){
            scoreArr.push("on");
        }
        // 处理半星；
        if( 0<score%1 && score%1<0.5){
             scoreArr.push("half");
        }
        // 处理灰星；
        while(5-scoreArr.length){
            scoreArr.push("off");    
        }
        return scoreArr;
      }
  }
};
</script>

<style scoped>
.starContainer img {
  width: 25rpx;
  height: 25rpx;
  vertical-align: middle;
}
</style>
