// pages/resumeList/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  linkStatus () {
    wx.navigateTo({
      url: '../inforStatus/status',
    })
  },
  linkInvi() {
    wx.navigateTo({
      url: '../enrollmentInvitation/invi',
    })
  },
  linkRecommend() {
    wx.navigateTo({
      url: '../enrollmentRecommend/recommend',
    })
  },
  linkNotice() {
    wx.navigateTo({
      url: '../inforNotice/notice',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})