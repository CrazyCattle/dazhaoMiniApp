import { 
  getCRecommend,
  getPositionList
 } from "../../api.js";

let app = getApp()

Page({
  data: {
    student_id: app.globalData.student_id || wx.getStorageSync("student_id") || '',
    curpage: 1,
    canLoadMore: false,
    showLoading: false,
    scrollTop: 0,
    timer: null,
    jobList: []
  },
  getSameCompany(pId) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${getPositionList}`,
        data: {
          p: 1,
          nums: 4,
          positiontype_id: pId
        },
        success: res => {
          resolve(res.data.result.list)
        }
      })
    })
  },
  onLoad: function(options) {
    wx.request({
      url: `${getPositionList}`,
      data: {
        p: 1,
        nums: 10,
        positiontype_id: options.id
      },
      method: 'GET',
      success: res => {
        this.setData({
          jobList: this.data.jobList.concat(res.data.result.list)
        })
      }
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  lower(e) {
    if (this.data.canLoadMore) {
      const self = this;
      wx.showNavigationBarLoading();
      if (self.timer) {
        clearTimeout(self.timer);
      }
      self.timer = setTimeout(() => {
        this.getCRData().then((res) => {
          const { error } = res.data;
          if (error == "0") {
            const { list } = res.data.result;
            this.setData({
              courseList: this.data.courseList.concat(list)
            });
          }
        })
        wx.hideNavigationBarLoading();
      }, 500);
    }
  }
});
