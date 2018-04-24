import {
  getStudentMis
} from '../../api'

import {
  setNewToken,
  initLoginStatus,
  getUserState,
  navToLogin
} from '../../utils/util'

const app =getApp()

Page({
  data: {
    showNav: true,
    showTips: false,
    messageArr: []
  },
  linkStatus () {
    wx.navigateTo({
      url: '../inforStatus/status',
    })
  },
  linkInvi() {
    wx.navigateTo({
      url: '../enrollmentInvitation/invi',
    })
  },
  linkRecommend() {
    wx.navigateTo({
      url: '../enrollmentRecommend/recommend',
    })
  },
  linkNotice() {
    wx.navigateTo({
      url: '../inforNotice/notice',
    })
  },
  getAllMess () {
    const _self = this
    wx.request({
      url: `${getStudentMis}`,
      data: {
        stu_id: app.globalData.student_id,
        token: app.globalData.token,
        mis_type: 0,
        p: 1,
        nums: 10,
      },
      success: res => {
        console.log(res)
        if (res.data.tokeninc == '0') {
          if (loginType == 'wxlogin') {
            setNewToken().then(res => {
              if (res == 'ok') {
                _self.getAllMess()
              }
            })
          } else {
            initLoginStatus()
          }
        } else {
          if (res.data.error == '0') {
            let data =  res.data.result.list
            if (data.length > 0) {
              console.log(data)
              this.setData({
                showNav: true,
                messageArr: data
              })
            } else {
              this.setData({
                showNav: true,
                showTips: !this.data.showTips
              })
            }
          }
        }
      }
    })
  },
  onLoad: function (options) {
    if (getUserState()) {
      this.getAllMess()
    } else {
      this.setData({
        showNav: false,
        showTips: !this.data.showTips
      })
    }
  },
  onShow: function() { }
})