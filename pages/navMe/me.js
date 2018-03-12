import {
  getUserInfor
} from '../../api';

const app = getApp()

Page({
  data: {
    stud_info: {},
    stud_id: '',
    stud_img: '',
    schoolInfor: ''
  },
  linkLR() {
    wx.navigateTo({
      url: '../loginRegister/loginregister'
    })
  },
  linkMyCourse() {
    if (!!app.globalData.student_id) {
      wx.navigateTo({
        url: '../resumeCenter/center'
      })
    } else {
      wx.showToast({
        title: "请先登录",
        icon: "none",
        duration: 1000
      });
    }
  },
  linkResumeCenter() {
    if (!!app.globalData.student_id) {
      wx.navigateTo({
        url: '../resumeCenter/center'
      })
    } else {
      wx.showToast({
        title: "请先登录",
        icon: "none",
        duration: 1000
      });
    }
  },
  editUserInfor() {
    wx.navigateTo({
      url: '../userInformation/information'
    })
  },
  linkSuggestion() {
    wx.navigateTo({
      url: '../suggestion/suggestion'
    })
  },
  linkSetting() {
    wx.navigateTo({
      url: '../inforSetting/setting'
    })
  },
  editPwd () {
    wx.navigateTo({
      url: `../editUserPwd/pwd`,
    })
  },
  loginOut() {
    wx.removeStorageSync('schoolInfo')
    wx.removeStorageSync('stud_info')
    wx.removeStorageSync('student_id')
    wx.removeStorageSync('stud_img')
    app.globalData.stud_info = ''
    app.globalData.student_id = ''
    app.globalData.student_img = ''
    wx.showToast({
      title: "退出成功",
      icon: "none",
      duration: 1000
    });
    let timer = setTimeout(() => {
      wx.reLaunch({
        url: '../navMe/me'
      })
    }, 300)
  },
  onLoad: function (options) {
    if (!!app.globalData.student_id) {
      this.setData({
        schoolInfor: wx.getStorageSync('schoolInfo')
      })
      wx.request({
        url: getUserInfor,
        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          stu_id: app.globalData.student_id
        },
        success: res => {
          console.log(res)
          if (res.data.error == '0') {
            const { listjson } = res.data
            wx.setStorageSync(
              "stud_info",
              (app.globalData.stud_info = listjson)
            );
            wx.setStorageSync(
              "stud_img",
              (app.globalData.student_img = listjson.student_img)
            );

            this.setData({
              stud_info: listjson,
              stud_img: listjson.student_img,
              stud_id: app.globalData.student_id
            })
          }
        }
      })
    }
  },
  onShow: function () {
    console.log(app.globalData.student_id, '0000')
    console.log(app.globalData.stud_info, '1111')
    console.log(app.globalData.student_img, '2222')
    this.setData({
      stud_info: wx.getStorageSync('stud_info'),
      stud_img: app.globalData.student_img,
      stud_id: app.globalData.student_id
    })
  }
})