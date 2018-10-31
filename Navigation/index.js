// components/Navigation/index.js
Component({
  externalClasses: ['my-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    hideBack: Boolean,
    backUrl: String,
    hasSlot: {
      type: Boolean,
      value: false,
    },
    delta: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 0,
    navgationHeight: 44
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached: function() {
    var sys = wx.getSystemInfoSync();
    // console.log('sys', sys)
    this.setData({
      statusBarHeight: sys.statusBarHeight
    })
  }
})
