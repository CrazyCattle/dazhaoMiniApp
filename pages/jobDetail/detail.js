import {
  getPositionOne,
  getPositionList
} from '../../api'

import {
  initLoginStatus,
  getDetails,
  getUserState
} from '../../utils/util'

// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var map;

const app = getApp()
const WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    collected: false,
    // 位置 经纬度
    address: '',
    lat: undefined,
    lng: undefined,
    // 职位详情
    list: {},
    // 名企推荐
    companyList: [
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // },
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // },
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // },
      // {
      //   pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      //   desc: '[8个]管培生、客户经理、Java研发工程师、 fdasfdsfdsafdsfds',
      //   company: '上海脚步网络科技有限公司',
      //   address: '上海',
      //   educ: '本科',
      //   data: '2018.01.24'
      // }
    ]
  },
  linkMap (e) {
    console.log(e.target.dataset.name)
    let address = e.target.dataset.name

    if (address) {
      // 实例化API核心类
      this.setData({
        address: address
      })
      map = new QQMapWX({
        key: 'LSXBZ-ACULK-KVFJZ-AFI56-KPMJF-PLFIP'
      });
      // 调用接口
      new Promise((resolve, reject) => {
        map.geocoder({
          address: this.data.address,
          success: (res) => {
            if (res.status == '0') {
              this.setData({
                lat: res.result.location.lat,
                lng: res.result.location.lng,
              })
              resolve({
                lat: this.data.lat,
                lng: this.data.lng
              })
            }
          }
        })
      }).then((res) => {
        wx.openLocation({
          latitude: res.lat,
          longitude: res.lng,
          scale: 18,
          address: this.data.address
        })
      })
    } else {
      wx.showToast({
        icon: "none",
        title: '该公司尚未填写地址',
        duration: 1000
      })
    }
  },
  collect () {
    this.setData({
      collected: !this.data.collected
    })
    wx.showToast({
      title: this.data.collected?'收藏成功':'取消成功',
      icon: 'none',
      duration: 2000
    })
  },
  getDetails (id) {
    const _self = this
    return new Promise((resolve,reject) => {
      wx.request({
        url: `${getPositionOne}`,
        data: {
          token: app.globalData.token,
          stu_id: app.globalData.student_id,
          position_id: id
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
              console.log(this.data.list)
              const { position_demand,position_description } = res.data.result.list
              WxParse.wxParse('article1', 'html', position_demand, _self, 5);
              WxParse.wxParse('article2', 'html', position_description, _self, 5);
              resolve(this.data.list.positiontype_id)
            }
          }
        }
      })
    })
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
  onLoad: function (options) {
    const id = options.id
    this.getDetails(id).then(res => {
      this.getSameCompany(res).then(res => {
        this.setData({
          companyList: this.data.companyList.concat(res)
        })
        console.log(this.data.companyList)
      })
    })
  },
  onReady: function () {},
  onShareAppMessage: function () {}
})