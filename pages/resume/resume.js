// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendResumeBox: false
  },
  sendresume () {
    this.setData({
      sendResumeBox: !this.data.sendResumeBox
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.downloadFile({
      url: 'http://dazhao100.cn/resume/download?resumes_id=31151',
      success: res => {
        console.log(res)
        if (res.errMsg = "downloadFile:ok" && res.statusCode == 200) {
          wx.openDocument({
            filePath: res.tempFilePath,
            success: res => {
              console.log('打开文档成功')
            }
          })
        }
      }
    })
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