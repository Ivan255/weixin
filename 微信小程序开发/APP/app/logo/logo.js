var util = require('../../utils/util.js')
Page({
  data: {
    logo: []
  },
  onLoad: function () {
    this.setData({
      logo: (wx.getStorageSync('logo') || []).map(function (logo) {
        return util.formatTime(new Date(logo))
      })
    })
  }
})