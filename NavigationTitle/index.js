// components/NavigationTitle/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    hideBack: {
      type: Boolean,
      value: false,
    },
    backUrl: {
      type: String,
      value: '',
    },
    delta: {
      type: Number,
      value: 1
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
    back: function(){
      console.log('back')
      if(getCurrentPages().length === 1){ // 分享进入、投放进入
        if(this.data.backUrl){
          console.log('redirectTo')
          wx.redirectTo({
            url: this.data.backUrl,
          })
        }else{
          wx.switchTab({
            url: '/pages/index/index'
          })
        }
      }else{
        wx.navigateBack({
          delta: this.data.delta,
        })
      }
    }
  }
})
