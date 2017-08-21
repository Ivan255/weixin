// apps/home/home.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     title:"你好,小程序！",
     textColor:"redColor",
     list:["111121","asgerr","shdbx","3331212","32565465"]
  },
  nextPage:function(){
    wx.navigateTo({
      url: '../homeDetail/homeDetail',
      success:function(res){},
      fail:function(res){},
      complete:function(res){},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //在调用app中声明的函数
     app.myFun();
     //在调用app中声明的属性
     console.log(app.data.username);

     
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  changeTitle:function(){
    this.setData({
      title: "你好，Ivan！",
      textColor:"orangeColor"
      , bgColor: "backgroundColor"
      , background:"向往的生活"
    });
  

  },

})