// pages/companyDetail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMask: false,
    collected: false,
    logo: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    company_name: '上海脚步网络科技有限公司',
    active: 1,
    more: true,
    // 职位列表
    recruitList: [
      {
        job: '推荐算法实习生',
        salary: '10k～12K',
        address: '上海',
        education: '本科',
        endTime: '2018/01/25'
      },
      {
        job: '推荐算法实习生',
        salary: '10k～12K',
        address: '上海',
        education: '本科',
        endTime: '2018/01/25'
      },
      {
        job: '推荐算法实习生',
        salary: '10k～12K',
        address: '上海',
        education: '本科',
        endTime: '2018/01/25'
      },
      {
        job: '推荐算法实习生',
        salary: '10k～12K',
        address: '上海',
        education: '本科',
        endTime: '2018/01/25'
      },
      {
        job: '推荐算法实习生',
        salary: '10k～12K',
        address: '上海',
        education: '本科',
        endTime: '2018/01/25'
      },
      {
        job: '推荐算法实习生',
        salary: '10k～12K',
        address: '上海',
        education: '本科',
        endTime: '2018/01/25'
      },
      {
        job: '推荐算法实习生',
        salary: '10k～12K',
        address: '上海',
        education: '本科',
        endTime: '2018/01/25'
      }
    ]
  },
  tabInfor (e) {
    this.setData({
      active: e.target.dataset.tab
    })
  },
  extendAll () {
    this.setData({
      more: !this.data.more
    })
  },
  share () {
    this.setData({
      showMask: !this.data.showMask
    })
  },
  collect () {
    this.setData({
      collected: !this.data.collected
    })
    wx.showToast({
      title: this.data.collected?'收藏成功':'取消成功',
      icon: 'none',
      duration: 2000
    })
  },
  productImg () {
    
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})