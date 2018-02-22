// pages/companyRecommend/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 100,
    timer: null,
    mockData: [
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[1个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[2个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[3个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[4个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[5个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      }
    ],
    // 名企推荐
    companyList: [
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[1个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[2个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[3个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[4个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[5个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[6个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[7个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: '[9个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      }
    ]
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
  
  },
  lower (e) {
    console.log(e)
    wx.showNavigationBarLoading();
    const self = this
    if (self.timer) {
      clearTimeout(self.timer)
    }
    self.timer = setTimeout(() => {
      self.setData({
        companyList: self.data.companyList.concat(self.data.mockData)
      })
      wx.hideNavigationBarLoading()
    }, 1000)
  }
})