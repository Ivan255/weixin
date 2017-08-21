Page({
  data:{
datas:[{},{},{},{},{},{},{}]
  },
  
  goBack:function(){

    wx.navigateBack({
      delta: 1,
    })
  }
})