import {
  getIndexCRecommend,
  banner,
  getPositionList,
  getCompanyList
} from '../../api.js';

import {
  getUserState,
  navToLogin
} from '../../utils/util'


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
    jobList: [],
    // 名企推荐
    companyList: []
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
    if (!!app.globalData.student_id) {
      wx.navigateTo({
        url: '../moreCourse/course'
      })
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1000
      })
    }
  },
  linkJobDetail (e) {
    if (getUserState()) {
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `../jobDetail/detail?id=${id}`
      })
    } else {
      navToLogin()
    }
  },
  linkCompanyDetail (e) {
    if (getUserState()) {
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `../companyDetail/detail?id=${id}`
      })
    } else {
      navToLogin()
    }
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
  // 获取首页轮播
  getBannerFun() {
    wx.request({
      url: `${banner}`,
      method: 'GET',
      success: res => {
        if (res.data.error == '0') {
          this.setData({
            banner: res.data.result
          })
        }
      }
    })
  },
  // 获取首页课程推荐轮播
  getIndexCRecommendFun() {
    wx.request({
      url: `${getIndexCRecommend}`+(!!app.globalData.student_id?`?stu_id=${app.globalData.student_id}`:''),
      success: res => {
        const { result } = res.data
        if (res.data.error == '0') {
          this.setData({
            imgUrls: result
          })
        }
      }
    })
  },
  // 获取职位推荐
  getPositionListFun() {
    wx.request({
      url: `${getPositionList}?p=1&isrom=0&nums=4`,
      method: 'GET',
      success: (res) => {
        if (res.data.error == '0') {
          console.log(res.data)
          this.setData({
            jobList: res.data.result.list
          })
        }
      }
    })
  },
  // 获取企业推荐
  getCompanyListFun() {
    wx.request({
      url: `${getCompanyList}?p=1&nums=4`,
      method: 'GET',
      success: (res) => {
        if (res.data.error == '0') {
          this.setData({
            companyList: res.data.result.list
          })
        }
      }
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '首页'
    })
    this.getBannerFun()
    this.getIndexCRecommendFun()
    this.getPositionListFun()
    this.getCompanyListFun()
  }
})