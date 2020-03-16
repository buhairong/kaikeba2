import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      username: '',
      cartTotal: 0
  },
  mutations: {
      setUsername(state, username) {
          state.username = username
      },
      initCartTotal(state, num) {
          state.cartTotal = num
      },
      addCartTotal(state) {
          state.cartTotal += 1
      },
      minusCartTotal(state) {
          state.cartTotal -= 1
      },
      logOut(state) {
          state.username = ''
          state.cartTotal = 0
      }
  },
  actions: {
  },
  modules: {
  }
})
