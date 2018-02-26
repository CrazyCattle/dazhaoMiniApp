// pages/coursePlay/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoSrc: 'http://200027599.vod.myqcloud.com/200027599_3470c60cc68e11e68b570957a7f62ea8.f30.mp4',
    poster: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
    controls: true,
    autoplay: false,
    showPlayBtn: true,
    showCenterPlayBtn: false,

    active: false
  },
  more () {
    this.setData({
      active: !this.data.active
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