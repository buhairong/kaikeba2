// components/my-component/my-componet.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    myvalue:{
      type:"string",
      value:"默认值",
      observer(newValue,oldValue){
        console.log(newValue, oldValue)
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
    clickFn(){
      console.log("fn...")
    },
    changeValue(){
      this.setData({ myvalue:"修改的值"})
    },
    goDad(){
      this.triggerEvent("myevent","参数");
    }
  }
})
