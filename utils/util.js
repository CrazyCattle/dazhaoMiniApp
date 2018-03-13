import {
  getUserToken
} from '../api';

const app = getApp()

const formatTime = date => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1

  return year + '-' + (month > 9 ? month : '0' + month)
}

const setNewToken = () => {
  console.log(app.globalData)
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${getUserToken}${app.globalData.openid}`,
      success: res => {
        console.log(res)
        if (res.data.error == '0') {
          const { listjson } = res.data
          wx.setStorageSync(
            "token",
            (app.globalData.token = listjson.token)
          );
        }
        resolve('ok')
      }
    })
  })
}

module.exports = {
  formatTime: formatTime,
  setNewToken
}
