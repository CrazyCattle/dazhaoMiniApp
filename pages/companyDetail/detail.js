import {
  getCompanyOne,
  sendComCollect
} from '../../api'
import {
  initLoginStatus,
  getDetails,
  getUserState
} from '../../utils/util'
const WxParse = require('../../wxParse/wxParse.js');
const app =getApp()
Page({
  data: {
    companyId: undefined,
    showMask: false,
    collected: false,

    list: {},
    active: 1,
    more: true,
    // 职位列表
    recruitList: [
      {
        job: '推荐算法实习生',
        salary: '10k～12K',
        address: '上海',
        education: '本科',
        endTime: '2018/01/25'
      },
      {
        job: '推荐算法实习生',
        salary: '10k～12K',
        address: '上海',
        education: '本科',
        endTime: '2018/01/25'
      },
      {
        job: '推荐算法实习生',
        salary: '10k～12K',
        address: '上海',
        education: '本科',
        endTime: '2018/01/25'
      }
    ]
  }, 
  tabInfor (e) {
    this.setData({
      active: e.target.dataset.tab
    })
  },
  extendAll () {
    this.setData({
      more: false
    })
  },
  share () {
    this.setData({
      showMask: !this.data.showMask
    })
  },
  sendCollectCompany() {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${sendComCollect}`,
        data: {
          stu_id: app.globalData.student_id,
          token: app.globalData.token,
          company_id: this.data.companyId
        },
        method: 'GET',
        success: res => {
          if (res.data.error == '0') {
            resolve(res.data.result)
          }
        }
      })
    })
  },
  collectCompany (e) {
    let collected = e.currentTarget.dataset.collected
    if(!collected) {
      this.sendCollectCompany().then(res => console.log(res))
    }
    console.log(collected)
    // this.setData({
    //   collected: !this.data.collected
    // })
    // wx.showToast({
    //   title: this.data.collected?'收藏成功':'取消成功',
    //   icon: 'none',
    //   duration: 2000
    // })
  },
  productImg () {},
  getCompanyInformation(cId) {
    const _self = this
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${getCompanyOne}`,
        data: {
          stu_id: app.globalData.student_id,
          token: app.globalData.token,
          company_id: cId
        },
        method: 'GET',
        success: res => {
          console.log(res)
          if (res.data.tokeninc == '0') {
            if (loginType == 'wxlogin') {
              setNewToken().then(res => {
                if (res == 'ok') {
                  _self.getDetails()
                }
              })
            } else {
              initLoginStatus()
            }
          } else {
            if (res.data.error == '0') {
              const { list } = res.data.result
              this.setData({ list })
              const article = list.company_introduce
              console.log(list.collectinc)
              if (list.collectinc != 0) {
                this.setData({
                  collected: true
                })
              }
              WxParse.wxParse('article', 'html', article, _self, 5);
              console.log(this.data.list)
            }
          }
        }
      })
    })
  },
  onLoad: function (options) {
    this.setData({
      companyId: options.id
    })
    this.getCompanyInformation(options.id)
  },
  onShow: function () {
    
  }
})