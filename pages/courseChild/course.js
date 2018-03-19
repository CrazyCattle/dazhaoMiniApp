import { getSClass } from '../../api.js';

const WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    showMore: false,
    class_intro: {},
    classThree: [],
    courseList: [
      {
        user_pic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        user_name: 'test saj 1',
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '第一次求职？来看这里',
        learning: '232',
        data: '06:16'
      },
      {
        user_pic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        user_name: 'test saj 1',
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '简历吐槽大会，这里有你的吗？',
        learning: '232',
        data: '06:16'
      },
      {
        user_pic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        user_name: 'test saj 1',
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '第一次求职？来看这里',
        learning: '232',
        data: '06:16'
      }
    ],
  },
  showMore () {
    this.setData({
      showMore: !this.data.showMore
    })
  },
  linkCoursePlay (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../coursePlay/play?id=${id}`,
    })
  },
  onLoad: function (options) {
    let id = options.id
    let _self = this

    wx.request({
      url: `${getSClass}${id}`,
      method: 'GET',
      success: res => {
        console.log(res)
        const { error } = res.data
        if (error == '0') {
          console.log(res.data.result)
          const { class_intro, classThree } = res.data.result
          const article = class_intro.class_intro
          const { class_name } = class_intro
          wx.setNavigationBarTitle({
            title: `${class_name}系列课程`
          })
          WxParse.wxParse('article', 'html', article, _self, 5);
          this.setData({
            classThree
          })
        }
      },
      fail: err => {
        throw Error(err);
      },
      complete: res => {
        // console.log(res)
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