import {
  uploadUserImg,
  getUserInfor
} from '../../api';

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
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        console.log(res)
        if (res.errMsg == "chooseImage:ok") {
          this.setData({
            user_pic: res.tempFilePaths[0],
            userImgPath: res.tempFiles
          })

          wx.uploadFile({
            url: `${uploadUserImg}`,
            header: {
              "Content-Type": "multipart/form-data"
            },
            method: 'POST',
            filePath: this.data.user_pic,
            name: 'image',
            formData: {
              'file': this.data.userImgPath,
              'stu_id': app.globalData.student_id
            },
            success: res => {
              const data = JSON.parse(res.data)
              console.log(data)
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
          })
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