import {
  getUserInfor
} from '../../api';

import {
  setNewToken,
  initLoginStatus,
  getUserState,
  navToLogin
} from '../../utils/util';

const app = getApp()

Page({
  data: {
    token: '',
    stud_info: {},
    stud_id: '',
    stud_img: '',
    schoolInfor: ''
  },
  linkSend() {
    if (getUserState()) {
      wx.navigateTo({
        url: '../resumeCenter/center?action=send'
      })
    } else {
      // wx.showToast({
      //   title: "请先登录",
      //   icon: "none",
      //   duration: 1000
      // });
      navToLogin()
    }
  },
  linkView() {
    if (getUserState()) {
      wx.navigateTo({
        url: '../resumeCenter/center?action=view'
      })
    } else {
      // wx.showToast({
      //   title: "请先登录",
      //   icon: "none",
      //   duration: 1000
      // });
      navToLogin()
    }
  },
  linkLR() {
    wx.navigateTo({
      url: '../loginRegister/loginregister'
    })
  },
  linkMyCourse() {
    if (getUserState()) {
      wx.navigateTo({
        url: '../courseRecord/record?from=me'
      })
    } else {
      // wx.showToast({
      //   title: "请先登录",
      //   icon: "none",
      //   duration: 1000
      // });
      navToLogin()
    }
  },
  linkCourseCollect(){
    if (getUserState()) {
      wx.reLaunch({
        url: '../navCourse/course?page=3',
      })
    } else {
      navToLogin()
    }
  },
  linkResumeCenter() {
    if (getUserState()) {
      wx.navigateTo({
        url: '../resumeCenter/center'
      })
    } else {
      // wx.showToast({
      //   title: "请先登录",
      //   icon: "none",
      //   duration: 1000
      // });
      navToLogin()
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
  editPwd() {
    wx.navigateTo({
      url: `../editUserPwd/pwd`,
    })
  },
  loginOut() {
    wx.removeStorageSync('schoolInfo')
    wx.removeStorageSync('stud_info')
    wx.removeStorageSync('student_id')
    wx.removeStorageSync('stud_img')
    wx.removeStorageSync('token')

    app.globalData.stud_info = ''
    app.globalData.student_id = ''
    app.globalData.student_img = '../../images/user_pic.png'
    app.globalData.token = ''

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
  getUserData() {
    return new Promise(resolve => {
      wx.request({
        url: getUserInfor,
        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          stu_id: app.globalData.student_id,
          token: app.globalData.token
        },
        success: res => {
          resolve(res)
        }
      })
    })
  },
  updateUserData() {
    wx.request({
      url: getUserInfor,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        stu_id: app.globalData.student_id,
        token: app.globalData.token
      },
      success: res => {
        console.log(res)
        if (res.data.error == '0') {
          const { listjson } = res.data
          wx.setStorageSync("stud_info", (app.globalData.stud_info = listjson));
          wx.setStorageSync("stud_img", (app.globalData.student_img = listjson.student_img));

          this.setData({
            stud_info: listjson,
            stud_img: listjson.student_img,
            stud_id: app.globalData.student_id
          })
        }
      }
    })
  },
  onLoad: function (options) {
    let schoolInfo = wx.getStorageSync('schoolInfo')
    let _self = this
    if (schoolInfo) {
      _self.setData({
        schoolInfor: wx.getStorageSync('schoolInfo') || ''
      })
    }
    let loginType = wx.getStorageSync('loginType')

    if (!!app.globalData.student_id && !!app.globalData.token) {
      _self.getUserData().then(res => {
        console.log(res)
        if (res.data.tokeninc == '0') {
          if (loginType == 'wxlogin') {
            setNewToken().then(res => {
              if (res == 'ok') {
                _self.updateUserData()
              }
            })
          } else {
            initLoginStatus() 
          }
        } else {
          if (res.data.error == '0') {
            const { listjson } = res.data
            wx.setStorageSync("stud_info", (app.globalData.stud_info = listjson));
            if (!listjson.student_img) {
              wx.setStorageSync("stud_img", (app.globalData.student_img = '../../images/head_mian_pic.png'));
              this.setData({
                stud_img: '../../images/head_mian_pic.png'
              })
            } else {
              wx.setStorageSync("stud_img", (app.globalData.student_img = listjson.student_img));
              this.setData({
                stud_img: listjson.student_img
              })
            }
            this.setData({
              stud_info: listjson,
              stud_id: app.globalData.student_id
            })
            console.log(this.data.stud_img)
          }
        }
      })
    }
  },
  onShow: function () {
    this.setData({
      stud_info: wx.getStorageSync('stud_info'),
      stud_img: app.globalData.student_img || wx.getStorageSync('stud_img') || '../../images/user_pic.png',
      stud_id: app.globalData.student_id
    })
    if (!app.globalData.student_img && !!wx.getStorageSync('stud_img')) {
      app.globalData.student_img = wx.getStorageSync('stud_img')
    }
  }
})