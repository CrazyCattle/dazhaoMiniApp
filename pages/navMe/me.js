let app = getApp()
Page({
  data: {
    stud_info: {},
    stud_id: undefined,
    stud_img: ''
  },
  linkLR () {
    wx.navigateTo({
      url: '../loginRegister/loginregister'
    })
  },
  linkResumeCenter () {
    wx.navigateTo({
      url: '../resumeCenter/center'
    })
  },
  editUserInfor () {
    wx.navigateTo({
      url: '../userInformation/information'
    })
  },
  linkSuggestion () {
    wx.navigateTo({
      url: '../suggestion/suggestion'
    })
  },
  linkSetting () {
    wx.navigateTo({
      url: '../inforSetting/setting'
    })
  },
  loginOut () {
    wx.removeStorageSync('schoolInfo')
    wx.removeStorageSync('stud_info')
    wx.removeStorageSync('student_id')
    app.globalData.stud_info = ''
    app.globalData.stud_id = ''
    wx.reLaunch({
      url: '../navMe/me'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.stud_info)
    if (!!app.globalData.stud_info) {
      this.setData({
        stud_info: app.globalData.stud_info
      })
    }
    console.log(this.data.stud_info)
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