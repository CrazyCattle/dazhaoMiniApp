import { loginIn } from '../../api';

const app = getApp()

Page({
  data: {
    username: '',
    password: ''
  },
  register () {
    wx.navigateTo({
      url: '../register/register'
    })
  },
  inputName (e) {
    console.log(e.detail)
    this.setData({
      username: e.detail.value
    })
  },
  inputPwd (e) {
    console.log(e.detail)
    this.setData({
      password: e.detail.value
    })
  },
  loginIn () {
    this.setData({
      focus: false
    })
    console.log(this.data.username, this.data.password)
    if (this.data.username.trim() == '') {
      wx.showToast({
        title: '请输入学号/手机号不能为空',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.password.trim() == '') {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
        duration: 1000
      })
    } else {
      wx.request({
        url: `${loginIn}`,
        data: {
          username: this.data.username,
          password: this.data.password
        },
        success: res => {
          console.log(res)
          const { error } = res.data
          wx.showToast({
            title: res.data.errortip,
            icon: 'none',
            duration: 1000
          })
          if (error == '0') {
            wx.setStorageSync('stud_info',app.globalData.stud_info = res.data.listjson)
            wx.setStorageSync('student_id',app.globalData.student_id = res.data.listjson.student_id)
            wx.reLaunch({
              url: '../navMe/me'
            })
          }
        }
      })
    }
  },
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})