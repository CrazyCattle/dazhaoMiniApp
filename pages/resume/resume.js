import {
  sendEmail
} from '../../api';

import {
  setNewToken,
  initLoginStatus
} from '../../utils/util'

const app = getApp()
const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

Page({
  data: {
    sendResumeBox: false,
    resumes_id: '',
    SendTitle: '',
    truename: '',
    sendEmail: '',
    fromEmail: '',
    sendTxt: '脚步网络科技有限公司HR，您好！我是应聘贵公司房地产招商专员的求职者招妹。我曾做过大招世纪广场投资有限公司的招商招商专员，同同时也做过大招企业发展有限公司的销'
  },
  iptTitle(e) {
    let SendTitle = e.detail.value.trim()
    this.setData({
      SendTitle
    })
  },
  iptName(e) {
    let truename = e.detail.value.trim()
    this.setData({
      truename
    })
  },
  iptReEmail(e) {
    let sendEmail = e.detail.value.trim()
    this.setData({
      sendEmail
    })
  },
  iptSendEmail(e) {
    let fromEmail = e.detail.value.trim()
    this.setData({
      fromEmail
    })
  },
  iptCont(e) {
    let sendTxt = e.detail.value.trim()
    this.setData({
      sendTxt
    })
  },
  sendresume() {
    console.log(
      this.data.SendTitle,
      this.data.truename,
      this.data.sendEmail,
      this.data.fromEmail,
      this.data.sendTxt
    )

    if (!this.data.SendTitle) {
      wx.showToast({
        title: "邮件主题不能为空",
        icon: "none",
        duration: 1000
      })
    } else if (!this.data.truename) {
      wx.showToast({
        title: "姓名不能为空",
        icon: "none",
        duration: 1000
      })
    } else if (!this.data.sendEmail) {
      wx.showToast({
        title: "收件邮箱不能为空",
        icon: "none",
        duration: 1000
      })
    } else if (!this.data.fromEmail) {
      wx.showToast({
        title: "发件邮箱不能为空",
        icon: "none",
        duration: 1000
      })
    } else if (!this.data.sendTxt) {
      wx.showToast({
        title: "发送内容不能为空",
        icon: "none",
        duration: 1000
      })
    } else {
      if (!emailReg.test(this.data.sendEmail)) {
        wx.showToast({
          title: "收件邮箱格式不正确",
          icon: "none",
          duration: 1000
        })
      } else if (!emailReg.test(this.data.fromEmail)) {
        wx.showToast({
          title: "发件邮箱格式不正确",
          icon: "none",
          duration: 1000
        })
      } else {
        this.sendEmail()
      }
    }
  },
  sendEmail() {
    let _self = this
    let loginType = wx.getStorageSync('loginType')

    wx.request({
      url: `${sendEmail}`,
      header: {
        "Content-Type": "multipart/form-data"
      },
      method: 'POST',
      data: {
        stu_id: app.globalData.student_id,
        resumes_id: this.data.resumes_id,
        SendTitle: this.data.SendTitle,
        truename: this.data.truename,
        sendEmail: this.data.sendEmail,
        fromEmail: this.data.fromEmail,
        sendTxt: this.data.sendTxt,
        token: app.globalData.token
      },
      success: res => {
        console.log(res)
        const data = JSON.parse(res.data)

        if (data.tokeninc == '0') {
          if (loginType == 'wxlogin') {
            setNewToken().then(res => {
              if (res == 'ok') {
                _self.sendEmail()
              }
            })
          } else {
            initLoginStatus()
          }
        } else {
          if (data.error == '0') {
            wx.showToast({
              title: data.errortip,
              icon: "none",
              duration: 1000
            });
            let timer = setTimeout(() => {
              this.setData({
                sendResumeBox: !this.data.sendResumeBox
              })
            }, 300)
          }
        }
      }
    })
  },
  close() {
    this.setData({
      sendResumeBox: !this.data.sendResumeBox
    })
  },
  onLoad: function (options) {
    this.setData({
      resumes_id: options.resumes_id
    })
    // wx.downloadFile({
    //   url: 'https://static.dazhao100.cn/resume/download?resumes_id=31151',
    //   success: res => {
    //     console.log(res)
    //     if (res.errMsg = "downloadFile:ok" && res.statusCode == 200) {
    //       wx.openDocument({
    //         filePath: res.tempFilePath,
    //         success: res => {
    //           console.log('打开文档成功')
    //         }
    //       })
    //     }
    //   }
    // })
  },
  onReady: function () { },
  onShow: function () { }
})