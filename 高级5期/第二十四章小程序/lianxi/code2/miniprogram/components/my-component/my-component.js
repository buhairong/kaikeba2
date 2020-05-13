// components/my-component.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    myvalue: {
      type: "string",
      value: "默认值",
      observer(newValue, oldValue) {
        console.log(newValue,oldValue)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickFn() {
      console.log('clickFn')
    },
    changeVal() {
      this.setData({
        myvalue: "修改的值"
      })
    },
    goDad() {
      this.triggerEvent("myEvent", "参数")
    }
  }
})
