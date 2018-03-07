import {
  resumeBasicEdit,
  getResumeOne
} from '../../api';

const app = getApp()
Page({
  data: {
    resume_id: '',
    // 简历信息
    user_pic: "",
    resumeTitle: '',
    user_name: '',
    user_phone: '',
    user_email: '',
    user_exprect: '',
    // 简历期望
    jobExpect: ["web前端", "PHP开发"],
    jobExpectIndex: 0,
  },
  chooseImg() {
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: res => {
        console.log(res);
        if (res.errMsg == "chooseImage:ok") {
          this.setData({
            user_pic: res.tempFilePaths[0]
          });
        }
      },
      fail: res => { throw Error(res) },
      complete: res => {
        // res
      }
    });
  },
  listenerJobExpect(e) {
    this.setData({
      jobExpectIndex: e.detail.value,
    });
    this.setData({
      user_exprect: this.data.jobExpect[this.data.jobExpectIndex]
    })
  },
  iptTitle(e) {
    this.setData({
      resumeTitle: e.detail.value.trim()
    })
  },
  iptName(e) {
    this.setData({
      user_name: e.detail.value.trim()
    })
  },
  iptPhone(e) {
    this.setData({
      user_phone: e.detail.value.trim()
    })
  },
  iptEmail(e) {
    this.setData({
      user_email: e.detail.value.trim()
    })
  },
  iptExprect(e) {
    console.log(e.detail)
    this.setData({
      user_exprect: e.detail.value.trim()
    })
  },
  submitResumeInfo () {
    if (!this.data.resumeTitle) {
      wx.showToast({
        title: "简历名称不能为空",
        icon: "none",
        duration: 1000
      });
    } else if (!this.data.user_name) {
      wx.showToast({
        title: "姓名不能为空",
        icon: "none",
        duration: 1000
      });
    } else if (!this.data.user_phone) {
      wx.showToast({
        title: "手机号码不能为空",
        icon: "none",
        duration: 1000
      });
    } else if (!this.data.user_email) {
      wx.showToast({
        title: "邮箱不能为空",
        icon: "none",
        duration: 1000
      });
    } else if (!this.data.user_exprect) {
      wx.showToast({
        title: "求职期望不能为空",
        icon: "none",
        duration: 1000
      });
    } else {
      console.log(
        this.data.resume_id,
        app.globalData.student_id,
        this.data.resumeTitle,
        this.data.user_name,
        this.data.user_phone,
        this.data.user_email,
        this.data.user_exprect
      );
      wx.request({
        url: `${resumeBasicEdit}`,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        data: {
          resumes_id: this.data.resume_id,
          student_id: app.globalData.student_id,
          title: this.data.resumeTitle,
          truename: this.data.user_name,
          mobile: this.data.user_phone,
          email: this.data.user_email,
          expectwork: this.data.user_exprect
        },
        success: res => {
          console.log(res)
          wx.showToast({
            title: res.data.errortip,
            icon: "none",
            duration: 1000
          });
          if (res.data.error == '0') {
            console.log(res.data)
            console.log(getCurrentPages())
            if (res.data.error == '0') {
              wx.navigateBack()
            }
          }
        },
        fail: res => { },
        complete: res => { }
      })
    }
  },
  onLoad: function (options) {
    let id = options.id
    console.log(id)
    this.setData({
      resume_id: id,
      user_exprect: this.data.jobExpect[this.data.jobExpectIndex]
    })

    wx.request({
      url: `${getResumeOne}`,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        resumes_id: id,
        stu_id: app.globalData.student_id 
      },
      success: res => {
        console.log(res)
        if (res.data.error == '0') {
          const { listjson } = res.data
          this.setData({
            user_pic: listjson.img,
            resumeTitle: listjson.title,
            user_name: listjson.truename,
            user_phone: listjson.mobile,
            user_email: listjson.email,
            user_exprect: listjson.expectwork,
          })
        }
      }
    })
  }
});
