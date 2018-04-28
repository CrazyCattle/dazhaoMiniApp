import {
  resumeList,
  deliveryResume
} from '../../api';

import {
  setNewToken,
  initLoginStatus
} from '../../utils/util';

const app = getApp()

Page({
  data: {
    curShow: true,
    noResumeList: false,

    isBack: false,
    student_id: '',

    page: 1,
    fliterType: 'job',
    // page 1
    resumeList: [],
  },

  linkResume(e) {
    let resumes_id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../resume/resume?resumes_id=${resumes_id}`,
    })
  },
  deliveryResume() {
    wx.request({
      url: `${deliveryResume}`,
      data: {},
      method: 'GET',
      success: res => {
        console.log(res)
      }
    })
  },
  getResume() {
    let loginType = wx.getStorageSync('loginType')
    let _self = this

    wx.request({
      url: `${resumeList}`,
      method: 'POST',
      data: {
        stu_id: app.globalData.student_id,
        token: app.globalData.token
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: res => {
        console.log(res)
        const { error } = res.data

        if (res.data.tokeninc == '0') {
          if (loginType == 'wxlogin') {
            setNewToken().then(res => {
              if (res == 'ok') {
                _self.getResume()
              }
            })
          } else {
            initLoginStatus()
          }
        } else {
          if (error == '0') {
            this.setData({
              resumeList: res.data.listjson
            })
            if (res.data.listjson.length == '0') {
              this.setData({
                noResumeList: !this.data.noResumeList
              })
            }
          } else if (error == '1') {
            this.setData({
              resumeList: [],
              noResumeList: !this.data.noResumeList
            })
          }
        }
      },
      fail: res => {
        throw Error(res)
      },
      complete: res => {
        // res
      }
    })
  },
  onLoad: function (options) {
    if (!!app.globalData.student_id) {
      this.setData({
        student_id: app.globalData.student_id
      })
      this.getResume()
    } else {
      this.setData({
        noResumeList: !this.data.noResumeList
      })
    }
  }
})