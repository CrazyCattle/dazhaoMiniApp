import {
  getCompanyOne,
  sendComCollect,
  getPositionList
} from '../../api'

import {
  initLoginStatus,
  setNewToken,
  getDetails,
  getUserState,
  navToLogin
} from '../../utils/util'

const WxParse = require('../../wxParse/wxParse.js');
const app =getApp()

Page({
  data: {
    companyId: undefined,
    showMask: false,
    collected: false,
    list: {},
    active: 1,
    more: true,

    showMore: false,
    // 职位列表
    recruitList: []
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
  linkJobList() {
    wx.navigateTo({
      url: `../companyJobList/list?id=${this.data.companyId}`
    })
  },
  tabInfor (e) {
    this.setData({
      active: e.target.dataset.tab
    })
    if (this.data.active == '2'){
      if (this.data.recruitList.length == 0) {
        wx.request({
          url: `${getPositionList}`,
          data: {
            p: 1,
            nums: 10,
            company_id: this.data.companyId
          },
          method: 'GET',
          success: res => {
            if (res.data.error == '0') {
              this.setData({
                recruitList: res.data.result.list
              })
              if(this.data.recruitList.length >= 6) {
                this.setData({
                  showMore: true
                })
              } else {
                this.setData({
                  showMore: false
                })
              }
            }
          }
        })
      }
    }
  },
  extendAll () {
    this.setData({
      more: false
    })
  },
  share () {
    this.setData({
      showMask: !this.data.showMask
    })
  },
  sendCollectCompany() {
    let _self = this
    let loginType = wx.getStorageSync('loginType')
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${sendComCollect}`,
        data: {
          stu_id: app.globalData.student_id,
          token: app.globalData.token,
          company_id: this.data.companyId
        },
        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: res => {
          console.log(res)
          resolve(res)
          // if (res.data.tokeninc == '0') {
          //   if (loginType == 'wxlogin') {
          //     setNewToken().then(res => {
          //       if (res == 'ok') {
          //         _self.sendCollectCompany()
          //       }
          //     })
          //   } else {
          //     initLoginStatus()
          //   }
          // } else {
          //   console.log(res)
          //   if (res.data.error == '0') {
          //     resolve(res.data.result)
          //   }
          // }
        }
      })
    })
  },
  collectCompany (e) {
    let collected = e.currentTarget.dataset.collected
    // if(!collected) {
      this.sendCollectCompany().then(res => console.log(res))
    // }
    console.log(collected)
    // this.setData({
    //   collected: !this.data.collected
    // })
    // wx.showToast({
    //   title: this.data.collected?'收藏成功':'取消成功',
    //   icon: 'none',
    //   duration: 2000
    // })
  },
  productImg () {},
  getCompanyInformation(cId) {
    let _self = this
    let loginType = wx.getStorageSync('loginType')
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${getCompanyOne}`,
        data: {
          stu_id: app.globalData.student_id,
          token: app.globalData.token,
          company_id: cId
        },
        method: 'GET',
        success: res => {
          console.log(res)
          if (res.data.tokeninc == '0') {
            if (loginType == 'wxlogin') {
              setNewToken().then(res => {
                if (res == 'ok') {
                  _self.getCompanyInformation(cId)
                }
              })
            } else {
              initLoginStatus()
            }
          } else {
            if (res.data.error == '0') {
              const { list } = res.data.result
              this.setData({ list })
              const article = list.company_introduce
              console.log(list.collectinc)
              if (list.collectinc != 0) {
                this.setData({
                  collected: true
                })
              }
              WxParse.wxParse('article', 'html', article, _self, 5);
              console.log(this.data.list)
            }
          }
        }
      })
    })
  },
  onLoad: function (options) {
    this.setData({
      companyId: options.id
    })
    this.getCompanyInformation(options.id)
  },
  onShow: function () {},
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '企业详情',
      path: `pages/companyDetail/detail?id=${this.data.companyId}`,
      success: function(res) {
        console.log(res)
      }
    }
  }
})