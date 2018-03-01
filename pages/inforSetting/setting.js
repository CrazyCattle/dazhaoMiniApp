// pages/inforSetting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '短信推送', id: 0, checked: false },
      { name: '邮件推送', id: 1, checked: false },
      { name: '站内消息推送', id: 2, checked: false},
    ],
    noticeStep: [
      { name: '实时推送', id: '1', checked: false },
      { name: '每日一次', id: '2', checked: false },
      { name: '每周一次', id: '3', checked: false }
    ],
    id: 0,
    ids: []
  },
  switchChange (e) {
    console.log(e.detail.value)
  },
  checkboxChange (e) {
    console.log(e.detail.value)
    // let ids = []
    // this.data.items.forEach((el1, i1) => {
    //   e.detail.value.forEach((el2, i2) => {
    //     if (el2 == el1.name) {
    //       ids.push(i1 + 1)
    //     }
    //   })
    // })
    // this.setData({
    //   ids: ids.join('')
    // })
  },
  radioChange (e) {
    console.log(e.detail.value)
    // this.data.noticeStep.forEach((el, i) => {
    //   if (el.name == e.detail.value) {
    //     this.setData({
    //       id: i+1
    //     })
    //   }
    // })
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