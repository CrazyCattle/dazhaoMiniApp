// pages/editBasicInfor/infor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 行业
    industry: ['请选择目标行业', '互联网/IT4325', '金融'],
    industryIndex: 0,
    // 职位类别
    job: ['请选择职位类别', '互联网/IT23432', '金融'],
    jobIndex: 0,
    //职位
    address: ['请选择求职地点', '互联网/IT425', '金融'],
    addressIndex: 0,
    //职位
    salary: ['请选择薪资范围', '互联网/IT432', '金融'],
    salaryIndex: 0,
    //职位
    size: ['请选择公司规模', '互联网/IT34', '金融'],
    sizeIndex: 0,
    //职位
    nature: ['请选择公司性质', '互联网/IT12', '金融'],
    natureIndex: 0
  },
  // 行业监听
  listenerIndustry (e) {
    this.setData({
      industryIndex: e.detail.value
    });
  },
  // 职位类别监听
  listenerJob(e) {
    this.setData({
      jobIndex: e.detail.value
    });
  },
  // 行业监听
  listenerAddress(e) {
    this.setData({
      addressIndex: e.detail.value
    });
  },
  // 职位类别监听
  listenerSalary(e) {
    this.setData({
      salaryIndex: e.detail.value
    });
  },
  // 行业监听
  listenerSize(e) {
    this.setData({
      sizeIndex: e.detail.value
    });
  },
  // 职位类别监听
  listenerNature(e) {
    this.setData({
      natureIndex: e.detail.value
    });
  },
  addMoreAddress () {
    console.log(1)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
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

  }
})