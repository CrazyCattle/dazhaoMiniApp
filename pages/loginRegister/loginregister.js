import { schoolInfo } from "../../api";
const app = getApp();

Page({
  data: {
    logoUrl: ""
  },
  linkLogin() {
    wx.navigateTo({
      url: "../login/login"
    });
  },
  lonkBind() {
    wx.navigateTo({
      url: "../bindAccount/account"
    });
  },
  register() {
    wx.navigateTo({
      url: "../register/register"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    new Promise((resolve, reject) => {
      if (!app.globalData.schoolInfo) {
        wx.request({
          url: `${schoolInfo}`,
          method: "GET",
          success: res => {
            console.log(res);
            if (res.data.error == "0") {
              app.globalData.schoolInfo = res.data.result;
              wx.setStorageSync("schoolInfo", res.data.result);
              resolve(app.globalData.schoolInfo);
            }
          },
          fail: res => {
            throw Error(err);
          },
          complete: () => {
            // complete
          }
        });
      } else {
        resolve(app.globalData.schoolInfo);
      }
    }).then(res => {
      this.setData({
        logoUrl: res.enter_logo
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
