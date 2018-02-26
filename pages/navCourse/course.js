// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholderTxt: '搜索课程、讲师或关键字',
    focus: false,
    page: 1,
    // page 2 轮播
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    canautoplay: false,
    circular: true,
    interval: 2500,
    duration: 300,
    // 发现好课
    courseList: [
      {
        user_pic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        user_name: 'test saj 1',
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '第一次求职？来看这里',
        learning: '232',
        data: '06:16'
      },
      {
        user_pic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        user_name: 'test saj 1',
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '简历吐槽大会，这里有你的吗？',
        learning: '232',
        data: '06:16'
      },
      {
        user_pic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        user_name: 'test saj 1',
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '第一次求职？来看这里',
        learning: '232',
        data: '06:16'
      }
    ],
    // page 3
  },
  iptFocus(e) {
    this.setData({
      focus: !this.data.focus
    })
  },
  iptConfirm(e) {
    // 确定搜索
    console.log(e.detail.value)
  },
  tabPage (e) {
    let page = e.target.dataset.page
    this.setData({
      page: page
    })
  },
  linkChildPage () {
    wx.navigateTo({
      url: '../courseChild/course'
    })
  },
  linkCollect () {
    wx.navigateTo({
      url: '../courseCollection/collect'
    })
  },
  linkRecord () {
    wx.navigateTo({
      url: '../courseRecord/record'
    })
  },
  linCourse () {
    wx.navigateTo({
      url: '../coursePlay/play'
    })
  } ,
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