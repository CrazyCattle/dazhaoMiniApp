import {
  uploadUserImg,
  getUserInfor,
  getExpectList
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
    schoolInfor: '',
    expectList: []
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
    let key = e.currentTarget.dataset.key
    wx.navigateTo({
      url: `../editJobExpectNew/new?id=${id}&data=${JSON.stringify(this.data.expectList[key])}`
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
      current: this.data.user_pic,
      urls: [this.data.user_pic],
    })
  },
  getExpect() {
    wx.request({
      url: `${getExpectList}`,
      data: {
        token: app.globalData.token,
        stu_id: app.globalData.student_id
      },
      method: 'GET', 
      success: res => {
       console.log(res)
       if (res.data.error == '0') {
          this.setData({
            expectList: this.data.expectList.concat(res.data.result)
          })
       }
      }
    })
  },
  onLoad: function (options) {
    this.setData({
      user_pic: app.globalData.student_img || wx.getStorageSync('stud_img') || '../../images/head_mian_pic.png',
      stud_info: wx.getStorageSync('stud_info'),
      schoolInfor: wx.getStorageSync('schoolInfo')
    })
    this.getExpect()
  },
  onShow: function () {
    this.setData({
      user_pic: app.globalData.student_img || wx.getStorageSync('stud_img'),
      stud_info: wx.getStorageSync('stud_info'),
      schoolInfor: wx.getStorageSync('schoolInfo')
    })
  }
})