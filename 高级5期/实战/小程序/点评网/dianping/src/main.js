import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

// 初始化云
wx.cloud.init({
  traceUser: true
})

const app = new Vue(App)
app.$mount()
