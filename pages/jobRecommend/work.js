// pages/companyRecommend/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    placeholderTxt: '搜索公司或职位名称',
    focus: false,
    filterType: 0,
    scrollTop: 0,
    timer: null,
    mockData: [
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      }
    ],
    // 职位推荐
    jobList: [
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      }
    ]
  },
  filterData (e) {
    let type = e.target.dataset.type
    this.setData({
      filterType: type
    })
  },
  tabFilter (e) {
    console.log(e)
    console.log(this.data.active, e.target.dataset.id)
    let id = e.target.dataset.id
    if (this.data.active == id) {
      this.setData({
        active: 0
      })
    } else {
      if (id >= 0) {
        this.setData({
          active: id
        })
      }
    }
  },
  filterEduc (e) {
    // 学历过滤
    this.setData({
      active: 0
    })
    console.log(this.data.active)
  },
  iptFocus (e) {
    this.setData({
      focus: !this.data.focus
    })
  },
  iptConfirm (e) {
    // 确定搜索
    console.log(e.detail.value)
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
    console.log(this.data.jobList)
    wx.showNavigationBarLoading();
    const self = this
    if (self.timer) {
      clearTimeout(self.timer)
    }
    self.timer = setTimeout(() => {
      self.setData({
        jobList: self.data.jobList.concat(self.data.mockData)
      })
      wx.hideNavigationBarLoading()
    }, 1000)
  }
})