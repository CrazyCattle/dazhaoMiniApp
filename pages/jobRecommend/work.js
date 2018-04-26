import {
  getPositionList,
  getZPType
} from '../../api'

Page({
  data: {
    recruitType: [],//招聘类型
    active: 0,
    placeholderTxt: '搜索公司或职位名称',
    focus: false,
    filterType: 0,
    scrollTop: 0,
    timer: null,
    mockData: [
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      }
    ],
    // 职位推荐
    jobList: [
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      },
      {
        pic_url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        job: 'JAVA研发工程师',
        company: '上海脚步网络科技有限公司',
        address: '上海',
        educ: '本科',
        data: '2018.01.24'
      }
    ]
  },
  filterData (e) {
    let type = e.target.dataset.type
    this.setData({
      filterType: type
    })
  },
  tabFilter (e) {
    console.log(e)
    console.log(this.data.active, e.target.dataset.id)
    let id = e.target.dataset.id
    if (this.data.active == id) {
      this.setData({
        active: 0
      })
    } else {
      if (id >= 0) {
        this.setData({
          active: id
        })
      }
    }
  },
  filterEduc (e) {
    // 学历过滤
    this.setData({
      active: 0
    })
    console.log(this.data.active)
  },
  iptFocus (e) {
    this.setData({
      focus: !this.data.focus
    })
  },
  iptConfirm (e) {
    // 确定搜索
    console.log(e.detail.value)
  },
  // 获取职位推荐
  getPositionListFun() {
    wx.request({
      url: `${getPositionList}?p=1&isrom=1&nums=4`,
      method: 'GET',
      success: (res) => {
        if (res.data.error == '0') {
          console.log(res.data)
          this.setData({
            jobList: res.data.result.list
          })
        }
      }
    })
  },
  onLoad: function (options) {
    let _self = this
    wx.request({
      url: `${getZPType}`,
      method: 'GET',
      success: res => {
        console.log(res)
        if (res.data.error == '0') {
          _self.setData({
            recruitType: res.data.listjson
          })
        }
      }
    })
  },
  onShow: function () {
  
  },
  lower (e) {
    console.log(this.data.jobList)
    wx.showNavigationBarLoading();
    const self = this
    if (self.timer) {
      clearTimeout(self.timer)
    }
    self.timer = setTimeout(() => {
      self.setData({
        jobList: self.data.jobList.concat(self.data.mockData)
      })
      wx.hideNavigationBarLoading()
    }, 1000)
  }
})