// apps/painoView/painoView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    audios: [{ title: "C4", audio: "http://7xnvmn.com1.z0.glb.clouddn.com/c4.ogg" }, { title: "D4", audio: "http://7xnvmn.com1.z0.glb.clouddn.com/d4.ogg" }, { title: "E4", audio: "http://7xnvmn.com1.z0.glb.clouddn.com/e4.ogg" }, { title: "F4", audio: "http://7xnvmn.com1.z0.glb.clouddn.com/f4.ogg" }, { title: "G4", audio: "http://7xnvmn.com1.z0.glb.clouddn.com/g4.ogg" }, { title: "A4", audio: "http://7xnvmn.com1.z0.glb.clouddn.com/a4.ogg" }, { title: "B4", audio: "http://7xnvmn.com1.z0.glb.clouddn.com/b4.ogg" }, { title: "C5", audio: "http://7xnvmn.com1.z0.glb.clouddn.com/c5.ogg" }, { title: "吉他", audio: "http://xmdx.sc.chinaz.com/files/download/sound1/201203/1022.mp3" }, { title: "鼓", audio: "http://fjdx.sc.chinaz.com/files/download/sound1/201309/3558.mp3" }]
  },
  play:function(event){
    var id = event.currentTarget.dataset.id;
    var src = event.currentTarget.dataset.src;

    if (id == this.lastID){
      this.backgroundAudioManager.src = src;
      this.backgroundAudioManager.stop();
    }

    this.audioCtx = wx.createAudioContext(id);
    this.audioCtx.play();

    this.lastID = id;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    this.lastID = "";
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
  
  }
})