// pages/editBasicInfor/infor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    educ: ['请选择学历', '专科', '本科', '硕士', '博士'],
    department: ['请选择院系', '专科', '本科', '硕士', '博士'],
    major: ['请选择专业', '计算机科学与技术','通信工程','多媒体'],
    index: 0,
    departmentIndex: 0,
    majorIndex: 0,
    startDate: '请选择年月',
    endDate: '请选择年月',
  },
  listenerMajor: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      majorIndex: e.detail.value
    });
  },
  listenerDepartment: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      departmentIndex: e.detail.value
    });
  },
  listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
  },
  listenerStartTime(e) {
    this.setData({
      startDate: e.detail.value
    })
  },
  listenerEndTime(e) {
    this.setData({
      endDate: e.detail.value
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