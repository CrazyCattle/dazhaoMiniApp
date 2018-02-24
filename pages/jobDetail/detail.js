// pages/companyRecommend/company.js

// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var map;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: false,
    // 位置 经纬度
    address: '',
    lat: undefined,
    lng: undefined,
    // 公司地址
    companyAddress: '上海市杨浦区长阳路1687号1408优客工场',
    // 名企推荐
    companyList: [
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
        desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
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
        desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      }
    ]
  },
  linkMap (e) {
    console.log(e.target.dataset.name)
    let address = e.target.dataset.name

    // 实例化API核心类
    this.setData({
      address: address
    })
    map = new QQMapWX({
      key: 'LSXBZ-ACULK-KVFJZ-AFI56-KPMJF-PLFIP'
    });

    // 调用接口
    new Promise((resolve, reject) => {
      map.geocoder({
        address: this.data.address,
        success: (res) => {
          if (res.status == '0') {
            this.setData({
              lat: res.result.location.lat,
              lng: res.result.location.lng,
            })
            resolve({
              lat: this.data.lat,
              lng: this.data.lng
            })
          }
        }
      })
    }).then((res) => {
      wx.openLocation({
        latitude: res.lat,
        longitude: res.lng,
        scale: 18,
        address: this.data.address
      })
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