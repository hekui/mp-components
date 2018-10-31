// components/highlightText/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    keyword: {
      type: String,
      observer: 'keywordChanged'
    },
    text: {
      type: String,
      observer: 'textChanged'
    }
  },

  /**
   * Component initial data
   */
  data: {
    textArr:[],
    skeyword: '',
    stext: ''
  },

  /**
   * Component methods
   */
  methods: {
    keywordChanged(newVal) {
      this.skeyword = newVal
      this.manage()
    },
    textChanged(newVal) {
      this.stext = newVal
      this.manage()
    },
    manage: function() {
      if (!this.stext) { return }
      this.manageText(this.stext, this.skeyword || "")
    },
    manageText: function (str, key) {
      if(key){
        this.setData({ textArr: str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%') })
      }else{
        this.setData({ textArr: [str] })
      }
      // console.log('this.textArr', this.data.textArr)
    }
  },
  externalClasses: ['highlight']
})
