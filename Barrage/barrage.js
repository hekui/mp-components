// components/Barrage/barrage.js
let interval, interval1, interval2, interval3
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      value: [],
      observer: function(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
        this.formatData(newVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    barrageRow1: [],
    barrageRow2: [],
    barrageRow3: [],
    raf: 1000/50, // 动画帧率，每秒60次
    pace: 0.5,  // 滚动距离，每raf移动像素
    row1Width: 0,
    posLeft1: 0,  // 水平滚动中left值
    posLeft2: 0,
    posLeft3: 0,
  },

  ready: function(){
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initMarquee: function(){
      let _this = this
      // let windowWidth = wx.getSystemInfoSync().windowWidth; //屏幕宽度
      const query = wx.createSelectorQuery().in(this)
      query.selectAll('#marquee1, #marquee2, #marquee3').boundingClientRect(function (rect) {
        console.log(rect)
        let row1Width = rect[0].width, row2Width = rect[1].width, row3Width = rect[2].width
        _this.roll({
          row1Width, row2Width, row3Width
        });
      }).exec()
    },
    roll: function (options) {
      let _this = this
      let data = this.data 
      interval = setInterval(function () {
        // 考虑小数的情况
        _this.setData({
          posLeft1: data.posLeft1 < -options.row1Width ? (data.posLeft1 + options.row1Width) : data.posLeft1 - data.pace,
          posLeft2: data.posLeft2 < -options.row2Width ? (data.posLeft2 + options.row2Width) : data.posLeft2 - data.pace,
          posLeft3: data.posLeft3 < -options.row3Width ? (data.posLeft3 + options.row3Width) : data.posLeft3 - data.pace,
        })
      }, data.raf)
    },
    // 格式化数据，按顺序依次放入三行
    formatData: function(newVal){
      let row1 = [], row2 = [], row3 = [];
      newVal.forEach((item,index) => {
        switch (index % 3) {
          case 0:
            row1.push(item)
            break;
          case 1:
            row2.push(item)
            break;
          case 2:
            row3.push(item)
            break;
          default:
            break;
        }
      })
      this.setData({
        barrageRow1: row1,
        barrageRow2: row2,
        barrageRow3: row3
      })
      wx.nextTick(() => {
        this.initMarquee()
      })
    },
  }
})
