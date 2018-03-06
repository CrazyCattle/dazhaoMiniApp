import { getCollect } from "../../api";

const app = getApp();

Page({
  data: {
    scrollTop: 0,
    timer: null,
    curPage: 1,
    dataExsit: false,
    showLoading: false,
    // 职位推荐
    courseList: []
  },
  linCourse(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../coursePlay/play?id=${id}`
    });
  },
  onLoad: function(options) {
    wx.request({
      url: `${getCollect}?stu_id=${app.globalData.student_id}&p=${
        this.data.curPage
      }`,
      method: "GET",
      success: res => {
        console.log(res);
        if (res.data.error == "0") {
          this.setData({
            courseList: res.data.result,
            dataExsit: res.data.dataExsit
          });
        }
        if (res.data.dataExsit) {
          this.setData({
            curPage: this.data.curPage++
          });
        }
      },
      fail: res => {},
      complete: res => {}
    });
  },
  lower(e) {
    if (this.data.dataExsit) {
      wx.showNavigationBarLoading();
      this.setData({
        showLoading: true
      })
      const self = this;
      if (self.timer) {
        clearTimeout(self.timer);
      }
      self.timer = setTimeout(() => {
        wx.request({
          url: `${getCollect}?stu_id=${app.globalData.student_id}&p=${
            this.data.curPage
          }`,
          method: "GET",
          success: res => {
            console.log(res);
            if (res.data.error == "0") {
              this.setData({
                courseList: this.data.courseList.concat(res.data.result),
                dataExsit: res.data.dataExsit,
                showLoading: false
              });
              wx.hideNavigationBarLoading();
            }
            if (res.data.dataExsit) {
              this.setData({
                curPage: this.data.curPage++
              });
            }
          },
          fail: res => {},
          complete: res => {}
        });
        
      }, 1000);
    }
  }
});
