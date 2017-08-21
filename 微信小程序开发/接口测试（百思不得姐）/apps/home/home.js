Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    datas: []
  },

  /**
   * 生命周期函数--监听页面加载
   * 
   * 只在页面初始化的时候 执行一次
   */
  onLoad: function (options) {

    this.pageIndex = 1;
    console.log(this, window);

    // 只要页面存在  数组中的数据 会一直存在 没有必要在返回这个页面 的时候  重新请求数据
    this.loadData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          height: res.screenHeight
        });
      }
    });


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  this.loadData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  loadData: function () {
    wx.showLoading({
      title: '正在加载中',
      mask:true
    })
    console.log("is to bottom");

    var self = this;

    self.pageIndex++;
    wx.request({
      url: 'https://route.showapi.com/255-1?showapi_appid=40098&showapi_sign=88c68e03d5d64d7c9a2da24829b0cccf&type=41&page= '+self.pageIndex,
      method: "GET",
      success: function (res) {
        console.log(res);
wx.hideLoading();
        if (res.statusCode == 200) {
          self.setData({
            //self.data.datas  之前请求到的数组
            // res.data.showapi_res_body.pagebean.contentlist  通过接口 获得到的 （第二页、第三页数据） 通过 concat 把两个数组拼接成了一个数组
            datas: self.data.datas.concat(res.data.showapi_res_body.pagebean.contentlist)
          });
          wx.stopPullDownRefresh();
        } else {
          console.log(res.errMsg);
        }
      },
      fail: function (res) {
        console.log(res);
      },
    })
  }
})
