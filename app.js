//app.js
App({
  globalData: {
    userInfo: null,
    stud_info: wx.getStorageSync('stud_info') || {},
    student_id: wx.getStorageSync('student_id') || '',
    openid: wx.getStorageSync("openid") || '',
    schoolInfor: wx.getStorageSync('schoolInfor') || ''
  },
  onLaunch: function() {

    console.log(this.globalData.student_id)
    let self = this;
    wx.showShareMenu({
      withShareTicket: true
    });

    

    let promise = new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          console.log(res);
          resolve(res.code)
        }
      });
    })
    promise.then((res) => {
      return new Promise((resolve, reject) => {
        // wx.getStorage({
        //   "key":"stud_info",
        //   success: res => {
        //     resolve(res)
        //   }
        // })
        resolve(1)
      })
    }).then((res) => {
      return new Promise((resolve, reject) => {
        // console.log(res.data)
        // this.globalData.stud_info = res.data
        // this.globalData.student_id = res.data.student_id
        // console.log(this.globalData.stud_info, this.globalData.student_id)
        resolve(1)
      })
    }).then((res) => {
      console.log(res)
    })
    

    // // 登录
    // new Promise((resolve, reject) => {
    //   wx.login({
    //     success: res => {
    //       console.log(res);
    //       resolve(res);
    //     }
    //   });
    // }).then(res => {
    //   // 获取 openid 以及 session_key
    //   wx.request({
    //     url: `https://www.mohuso.com/port/wxAuthorization?code=${res.code}`,
    //     method: "GET",
    //     success: res => {
    //       // console.log(res.data, res.data.error, res.data.result.openid)
    //       if (res.data.error == "0") {
    //         this.globalData.openid = res.data.result.openid;
    //         console.log(self.globalData.openid);
    //         wx.setStorage({
    //           "key": "openid",
    //           "data": this.globalData.openid
    //         });
    //         wx.getStorage({
    //           key:"openid",
    //           success: (res) => {
    //             console.log('异步', res)
    //           }
    //         })
    //       }
    //     },
    //     fail: function() {
    //       // fail
    //     },
    //     complete: function() {
    //       // complete
    //     }
    //   });
    // });

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  }
});
