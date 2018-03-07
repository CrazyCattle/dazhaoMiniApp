import { 
  resumeList,
  delResume
 } from '../../api';

const app = getApp()

Page({
  data: {
    isBack: false,
    student_id: '',

    page: 1,
    fliterType: 'job',
    // page 1
    resumeList: [],
    // page 2
    status: {
      sending: '0',
      seeing: '25%',
      filtering: '50%',
      inving: '75%',
      seeing: '100%',
    },
    // page 3
    id: 0,
    ids: 1,
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
  showDetail (e) {
    let id = e.target.dataset.id
    this.setData({
      id: id
    })
  },
  showStatus (e) {
    let ids = e.target.dataset.ids
    this.setData({
      ids: ids
    })
  },
  tabPage(e) {
    let page = e.target.dataset.page
    this.setData({
      page: page
    })
  },
  changeCokllectFilter (e) {
    let type = e.target.dataset.type
    this.setData({
      fliterType: type
    })
  },
  editResumeBasicInfor (e) {
    let id = e.target.dataset.id
    wx.navigateTo({
      url: `../editResumeBasicInfor/infor?id=${id}`,
    })
  },
  delResume (e) {
    new Promise((resolve, reject) => {
      wx.showModal({
        title: '确定删除此简历吗？',
        content: '删除后不可恢复',
        confirmText: '删除',
        success: res => {
          console.log(res)
          if (res.confirm) {
            resolve(res.confirm)
          }
        }
      })
    }).then(res => {
      if (res) {
        let resumes_id = e.target.dataset.id
        wx.request({
          url: `${delResume}`,
          data: {
            resumes_id,
            stu_id: app.globalData.student_id
          },
          method: 'POST',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: res => {
            console.log(res)
            if (res.data.error == '0') {
              this.getResume()
              wx.showToast({
                title: res.data.errortip,
                icon: "none",
                duration: 1000
              });
            }
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        })
      }
    })
    
    
  },
  linkResume () {
    wx.navigateTo({
      url: '../resume/resume?id=1',
    })
  },
  getResume () {
    wx.request({
      url: `${resumeList}`,
      method: 'POST',
      data: {
        stu_id: app.globalData.student_id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: res => {
        console.log(res)
        const { error } = res.data
        if (error == '0') {
          this.setData({
            resumeList: res.data.listjson
          })
        } else if (error == '1') {
          this.setData({
            resumeList: []
          })
        }
      },
      fail: res => {
        throw Error(res)
      },
      complete: res => {
        // res
      }
    })
  },
  onLoad: function (options) {
    console.log(app.globalData.student_id)
    if (!!app.globalData.student_id) {
      this.setData({
        student_id: app.globalData.student_id
      })
      this.getResume()
    }
  },
  onShow () {
    console.log(this.data.isBack)
    if (this.data.isBack) {
      this.getResume()
    }
    this.setData({
      isBack: true
    })
  }
})