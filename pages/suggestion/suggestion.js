import {
  feedback
} from '../../api';

const app = getApp()

Page({
  data: {
    suggestion: ''
  },
  suggest (e) {
    this.setData({
      suggestion: e.detail.value.trim()
    })
  },
  submitSuggest() {
    if (!!this.data.suggestion) {
      wx.request({
        url: `${feedback}`,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        data: {
          stu_id: app.globalData.student_id,
          content: this.data.suggestion
        },
        success: res => {
          console.log(res)
          if(res.data.error == '0') {
            wx.showToast({
              title: res.data.errortip,
              icon: "none",
              duration: 1000
            });
            let timer = setTimeout(() => {
              wx.reLaunch({
                url: '../navMe/me'
              })
              clearTimeout(timer)
            }, 300)
          }
        }
      })
    } else {
      wx.showToast({
        title: '请填写建议内容',
        icon: "none",
        duration: 1000
      });
    }
  },
  onLoad: function (options) {
  
  }
})