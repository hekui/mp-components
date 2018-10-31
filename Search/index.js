// components/SwiperSlider/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String,
      value: ''
    },
    hideSubmitBtn: {
      type: Boolean,
      value: false
    },
    focus: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: "",
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    valueChanged: function (newVal) {
      this.setData({ value : newVal.detail.value })
      this.triggerEvent('valueChanged', { value: this.data.value}, {})
    },
    submitSearch: function (event) {
      this.triggerEvent('submit', {value: this.data.value}, {})
    },
    deleteInput: function (event) {
      this.setData({ value : "" })
      this.triggerEvent('valueChanged', { value: '' }, {})
    },
  }
})
