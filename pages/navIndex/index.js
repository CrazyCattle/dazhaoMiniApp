import {
  getIndexCRecommend,
  banner
} from '../../api.js';

const app = getApp()

Page({
  data: {
    student_id: app.globalData.student_id || wx.getStorageSync("student_id") || '',
    // 轮播
    banner: [],
    imgUrls: [],
    indicatorDots: false,
    autoplay: true,
    canautoplay: false,
    circular: true,
    interval: 2500,
    duration: 300,
    // 职位推荐
    jobList: [
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   job: 'JAVA研发工程师',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // },
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   job: 'JAVA研发工程师',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // },
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   job: 'JAVA研发工程师',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // },
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   job: 'JAVA研发工程师',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // }
    ],

    // 名企推荐
    companyList: [
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // },
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // },
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // },
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // }
    ]
  },
  linkCompany () {
    wx.navigateTo({
      url: '../companyRecommend/company'
    })
  },
  linkJob () {
    wx.navigateTo({
      url: '../jobRecommend/work'
    })
  },
  linkCourse () {
    wx.navigateTo({
      url: '../moreCourse/course'
    })
  },
  linkJobDetail () {
    wx.navigateTo({
      url: '../jobDetail/detail?id=123'
    })
  },
  linkCompanyDetail () {
    wx.navigateTo({
      url: '../companyDetail/detail?id=123'
    })
  },
  linkCoursePlay (e) {
    let id = e.target.dataset.id
    wx.navigateTo({
      url: `../coursePlay/play?id=${id}`
    })
  },
  linkCourseType (e) {
    wx.switchTab({
      url: `../navCourse/course`,
    })
  },
  linkResumeCenter() {
    wx.navigateTo({
      url: '../resumeCenter/center'
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '首页'
    })
    wx.request({
      url: `${banner}`,
      method: 'GET',
      success: res => {
        if (res.data.error == '0') {
          this.setData({
            banner: res.data.result
          })

          console.log(this.data.banner)
        }
      },
      fail: res => {
        throw Error(err)
      },
      complete: res =>{
        // res
      }
    })

    if (!!app.globalData.student_id) {
      wx.request({
        url: `${getIndexCRecommend}?stu_id=${app.globalData.student_id}`,
        success: res => {
          console.log(res)
          const { result } = res.data
          this.setData({
            imgUrls: result
          })
        }
      })
    }
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