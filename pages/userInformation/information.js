import {
  uploadUserImg,
  getUserInfor
} from '../../api';

import {
  setNewToken,
  initLoginStatus
} from '../../utils/util';

const app = getApp()

Page({
  data: {
    user_pic: '',
    stud_info: '',
    userImgPath: '',
    schoolInfor: ''
  },
  linkEditBasic() {
    wx.navigateTo({
      url: '../editBasicInfor/infor'
    })
  },
  linkEditEduc() {
    wx.navigateTo({
      url: '../editEducation/educ'
    })
  },
  linkJobExpect(e) {
    let id = e.target.dataset.id
    wx.navigateTo({
      url: `../editJobExpectation/expect?id=${id}`
    })
  },
  chooseImg() {
    let _self = this
    let loginType = wx.getStorageSync('loginType')

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        console.log(res)
        if (res.errMsg == "chooseImage:ok") {
          _self.setData({
            user_pic: res.tempFilePaths[0],
            userImgPath: res.tempFiles
          })
          _self.uploadImg()
        }
      },
      fail: res => {
        throw Error(res)
      },
      complete: res => {
        // console.log(res)
      }
    })
  },
  uploadImg() {
    let _self = this
    let loginType = wx.getStorageSync('loginType')

    wx.uploadFile({
      url: `${uploadUserImg}`,
      header: {
        "Content-Type": "multipart/form-data"
      },
      method: 'POST',
      filePath: _self.data.user_pic,
      name: 'image',
      formData: {
        'file': _self.data.userImgPath,
        'stu_id': app.globalData.student_id,
        'token': app.globalData.token
      },
      success: res => {
        const data = JSON.parse(res.data)

        if (data.tokeninc == '0') {
          if (loginType == 'wxlogin') {
            setNewToken().then(res => {
              if (res == 'ok') {
                _self.uploadImg()
              }
            })
          } else {
            initLoginStatus()
          }
        } else {
          if (data.error == '0') {
            app.globalData.student_img = data.originalimg
            wx.setStorageSync('stud_img', data.originalimg)
            wx.showToast({
              title: data.errortip,
              icon: "none",
              duration: 1000
            });
          }
        }
      }
    })
  },
  prewImg() {
    wx.previewImage({
      current: this.data.user_pic ? this.data.user_pic : '../../images/user_pic.png',
      urls: [this.data.user_pic],
    })
  },
  onLoad: function (options) {
    this.setData({
      user_pic: wx.getStorageSync('stud_img'),
      stud_info: wx.getStorageSync('stud_info'),
      schoolInfor: wx.getStorageSync('schoolInfo')
    })
  },
  onShow: function () {
    this.setData({
      user_pic: wx.getStorageSync('stud_img'),
      stud_info: wx.getStorageSync('stud_info'),
      schoolInfor: wx.getStorageSync('schoolInfo')
    })
  }
})