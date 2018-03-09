import {
  getUserInfor,
  editUserBasicInfo
} from '../../api';

import {
  formatTime
} from '../../utils/util'

const app = getApp()
const mobileReg = /^13(\d{9})$|^15(\d{9})$|^14(\d{9})$|^17(\d{9})$|^18(\d{9})$/;
const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
let stud_info = {}

Page({
  data: {
    stud_info: '',
    user_name: '',
    user_sex: '',
    user_birthday: '',
    user_phone: '',
    user_email: '',
    sex: ['男', '女'],

    endTime: '',
    index: 0,
  },
  listenerPickerSelected: function (e) {
    this.setData({
      index: e.detail.value
    });
    this.setData({
      user_sex: this.data.sex[this.data.index]
    })
  },
  listenerDatePickerSelected(e) {
    this.setData({
      user_birthday: e.detail.value
    })
  },
  iptName(e) {
    this.setData({
      user_name: e.detail.value.trim()
    })
  },
  iptEmail(e) {
    this.setData({
      user_email: e.detail.value.trim()
    })
  },
  iptPhone(e) {
    this.setData({
      user_phone: e.detail.value.trim()
    })
  },
  saveUserInfo() {
    console.log(this.data.user_name, this.data.user_email, this.data.user_phone, this.data.user_birthday, this.data.user_sex)
    if (!this.data.user_name) {
      wx.showToast({
        title: "姓名不能为空",
        icon: "none",
        duration: 1000
      });
    } else if (!this.data.user_email) {
      wx.showToast({
        title: "邮箱不能为空",
        icon: "none",
        duration: 1000
      });
    } else if (!this.data.user_phone) {
      wx.showToast({
        title: "手机号码不能为空",
        icon: "none",
        duration: 1000
      });
    } else {
      if (!mobileReg.test(this.data.user_phone)) {
        wx.showToast({
          title: "手机号码格式不正确",
          icon: "none",
          duration: 1000
        })
      } else if (!emailReg.test(this.data.user_email)) {
        wx.showToast({
          title: "邮箱格式不正确",
          icon: "none",
          duration: 1000
        })
      } else {
        wx.request({
          url: `${editUserBasicInfo}`,
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          data: {
            stu_id: app.globalData.student_id,
            student_truename: this.data.user_name,
            student_sex: this.data.user_sex,
            student_birthday: this.data.user_birthday,
            student_mobile: this.data.user_phone,
            student_email: this.data.user_email
          },
          success: res => {
            console.log(res)
            if (res.data.error == '0') {
              wx.showToast({
                title: res.data.errortip,
                icon: "none",
                duration: 1000
              })
              const { listjson } = res.data
              for (var key in listjson) {
                stud_info[key] = listjson[key]
              }
              wx.setStorageSync('stud_info', stud_info)
              let timer = setTimeout(() => {
                wx.navigateBack()
                clearTimeout(timer)
              }, 300)
            }
          }
        })
      }
    }
  },
  onLoad: function (options) {
    stud_info = wx.getStorageSync('stud_info')
    this.setData({
      stud_info: wx.getStorageSync('stud_info'),
      user_name: wx.getStorageSync('stud_info').student_truename,
      user_sex: wx.getStorageSync('stud_info').student_sex,
      user_birthday: wx.getStorageSync('stud_info').student_birthday,
      user_phone: wx.getStorageSync('stud_info').student_mobile,
      user_email: wx.getStorageSync('stud_info').student_email,
      endTime: formatTime(new Date())
    })
    this.data.sex.forEach((v, i) => {
      if (v == this.data.user_sex) {
        this.setData({
          index: i
        })
      }
    })
  },
  onShow: function () {

  }
})