import {
  getStudentMis
} from '../../api'

import {
  initLoginStatus,
  getDetails,
  getUserState
} from '../../utils/util'

const app =getApp()

Page({
  data: {
    scrollTop: 0,
    showTips: false,
    messageArr: [],
    showLoading: true,
    timer: null,
    curpage: 1,
    canLoadMore: true
  },
  getAllMess () {
    const _self = this
    if (this.data.canLoadMore) {
      this.setData({
        showLoading: true
      })
      wx.request({
        url: `${getStudentMis}?stu_id=${app.globalData.student_id}&token=${app.globalData.token}&mis_type=3&p=${this.data.curpage}&nums=10`,
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
                if (data.length == 10) {
                  this.setData({
                    curpage: ++this.data.curpage,
                    canLoadMore: true
                  })
                } else {
                  this.setData({
                    canLoadMore: false
                  })
                }
                this.setData({
                  showLoading: false,
                  messageArr: this.data.messageArr.concat(data)
                })
              } else {
                this.setData({
                  showTips: !this.data.showTips
                })
              }
            }
          }
        }
      })
    }
  },
  onLoad: function (options) {
    if (getUserState()) {
      this.getAllMess()
    } else {
      this.setData({
        showTips: !this.data.showTips
      })
    }
  },
  onShow: function () {
  
  },
  onUnload: function () {
  
  },
  onReachBottom: function () {
  
  }
})