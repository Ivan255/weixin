// apps/index/index.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    colorViewSpace: 10,
    colorViewWidth: 0,
    colors: ["red"],
    items: [],
    playText: "开始",
    time: 60,
    audioURL: "http://7xnvmn.com1.z0.glb.clouddn.com/%E6%B8%B8%E6%88%8F%E5%8E%9F%E5%A3%B0-%E5%A4%A9%E5%A4%A9%E8%BF%9E%E8%90%8C%E8%83%8C%E6%99%AF%E9%9F%B3%E4%B9%90.mp3"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 定义 是几乘几的色块
    this.row = 2;
    this.timer = null;

    // this.drawView();

    this.audioContext = wx.createAudioContext("backgroundAudio");
  },

  start: function () {
    this.audioContext.play();

    this.timer = setInterval(function () {

      if (this.data.time <= 0) {
        this.stop();
        return;
      }
      this.setData({
        time: --this.data.time
      });

    }.bind(this), 500);
  },
  stop: function () {

    this.audioContext.pause();

    clearInterval(this.timer);
    this.setData({
      time: 60
    });
    this.row = 2;
    this.drawView();

    this.setData({
      playText: "开始"
    });
  },
  play: function () {
    var text = "";
    if (this.data.playText == "开始") {
      text = "停止";
      this.start();
      this.drawView();
    } else {
      text = "开始";
      this.stop();
    }
    this.setData({
      playText: text
    });
  },

  drawView: function () {

    var self = this;
    var list = [];

    var weekColorIndex = parseInt(Math.random() * (this.row * this.row));

    for (var i = 0; i < this.row * this.row; i++) {
      if (i == weekColorIndex) {
        // 设置 随机的 色块不透明度
        list.push(0.7);
        continue;
      }
      list.push(1);
    }
    self.setData({
      items: list
    });

    wx.getSystemInfo({
      success: function (res) {
        // 屏幕总宽度
        var width = res.screenWidth;

        // 如果色块没有间距的宽度  width/row=一个色块的宽度
        // 一个色块的宽度/100 = 间距
        // 需要重新计算色块的宽度
        // 色块间距的总宽度 = 间距*row*2
        // 重新计算色块的宽度 = （总宽度-总间距）/row
        var space = parseInt(width / self.row * 0.1);
        self.row > 15 ? 2 : space;
        // 计算总间距
        var allSpace = space * 2 * self.row;


        // 每个小色块的宽度：（总宽度-总间距）/每行色块的数量
        var itemWidth = (width - allSpace) / self.row;
        console.log(space, allSpace, itemWidth, width);
        self.setData({
          width: width,
          colorViewSpace: space,
          colorViewWidth: itemWidth
        });

      }
    });
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
  gussColor: function (event) {
    var weekColorOpacity = event.currentTarget.dataset.opacity;
    console.log(weekColorOpacity);
    if (weekColorOpacity != 1) {
      // 点对了
      this.row++;
    } else {
      this.row = 2;
    }
    this.drawView();
  }
})
// (300 / 2) *0.1