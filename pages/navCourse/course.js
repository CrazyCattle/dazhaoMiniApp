import {
  getCClass,
  getIndexCRecommend,
  getCollect,
  getHistory,
  getNewCourse
} from '../../api';

const app = getApp()

Page({
  data: {
    isBack: false,

    showCollectMore: false,
    showHistoryMore: false,

    showLoading: false,
    placeholderTxt: '搜索课程、讲师或关键字',
    focus: false,
    page: 1,
    // page 1数据
    typeArr: [],
    // page 2 轮播
    imgUrls: [],
    indicatorDots: false,
    autoplay: true,
    canautoplay: false,
    circular: true,
    interval: 2500,
    duration: 300,
    // 发现好课
    courseList: [],
    curCoursePage: 1,
    dataExsit: false,

    // page 3
    courseCollected: [],
    courseHistory: []
  },
  iptFocus(e) {
    this.setData({
      focus: !this.data.focus
    })
    console.log(this.data.focus)
  },
  searchChange (e) {
    console.log(e.detail.value)
  
  },
  iptConfirm(e) {
    let keyword = e.detail.value
    wx.navigateTo({
      url: `../courseCollection/collect?keyword=${keyword}`
    })
  },
  linkCourse() {
    wx.navigateTo({
      url: '../moreCourse/course'
    })
  },
  linkCoursePlay(e) {
    let id = e.target.dataset.id
    wx.navigateTo({
      url: `../coursePlay/play?id=${id}`
    })
  },
  tabPage(e) {
    let page = e.target.dataset.page
    this.setData({
      page: page
    })
    if (!!app.globalData.student_id) {
      if (page == 2) {
        if (this.data.imgUrls.length == 0) {
          wx.request({
            url: `${getIndexCRecommend}?stu_id=${app.globalData.student_id}`,
            success: res => {
              console.log(res)
              const { result } = res.data
              this.setData({
                imgUrls: result
              })
            }
          })
        }

        if (this.data.courseList.length == 0) {
          wx.request({
            url: `${getNewCourse}${this.data.curCoursePage}&stu_id=${app.globalData.student_id}`,
            data: {},
            method: 'GET',
            success: res => {
              console.log(res, '1111111111')
              const { error } = res.data
              if (error == '0') {
                this.setData({
                  courseList: res.data.result,
                  curCoursePage: ++this.data.curCoursePage,
                  dataExsit: res.data.dataExsit
                })
              }
            },
            fail: res => {
              throw Error(res)
            },
            complete: res => {
              // complete
            }
          })
        }
      }

      if (page == 3) {
        this.getCollectCourse()
        this.getHistoryCourse()
      }
    }
  },
  getCollectCourse() {
    wx.request({
      url: `${getCollect}?num=3&stu_id=${app.globalData.student_id}`,
      method: 'GET',
      success: res => {
        console.log(res)
        if (res.data.error == '0') {
          this.setData({
            courseCollected: res.data.result,
            showCollectMore: res.data.dataExsit
          })
        }
      },
      fail: res => {
        throw Error(res)
      },
      complete: res => {
        // complete
      }
    })
  },
  getHistoryCourse() {
    wx.request({
      url: `${getHistory}?num=3&stu_id=${app.globalData.student_id}`,
      method: 'GET',
      success: res => {
        console.log(res)
        if (res.data.error == '0') {
          this.setData({
            courseHistory: res.data.result,
            showHistoryMore: res.data.dataExsit
          })
        }
      },
      fail: res => {
        throw Error(res)
      },
      complete: res => {
        // complete
      }
    })
  },
  linkChildPage(e) {
    let id = e.target.dataset.id
    wx.navigateTo({
      url: `../courseChild/course?id=${id}`
    })
  },
  linkCollect() {
    wx.navigateTo({
      url: '../courseCollection/collect'
    })
  },
  linkRecord() {
    wx.navigateTo({
      url: '../courseRecord/record'
    })
  },
  linCourse(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../coursePlay/play?id=${id}`
    })
  },
  onLoad: function (options) {
    wx.request({
      url: `${getCClass}`,
      method: 'GET',
      success: res => {
        const { error } = res.data
        if (error == '0') {
          const { result } = res.data
          this.setData({
            typeArr: result
          })
        }
        console.log(res)
      },
      fail: err => {
        throw Error(err);
      },
      complete: res => {
        // console.log(res)
      }
    })
  },
  onShow() {
    console.log(this.data.isBack, this.data.page == '3')
    if (this.data.isBack) {
      if (this.data.page == '3') {
        this.getCollectCourse()
        this.getHistoryCourse()
      }

      this.setData({
        focus: !this.data.focus
      })
    }
    console.log(this.data.page == '3')
    this.setData({
      isBack: true
    })
  },
  onReachBottom: function () {
    if (this.data.page == 2 && this.data.dataExsit) {
      this.setData({
        showLoading: true
      })
      wx.request({
        url: `${getNewCourse}${this.data.curCoursePage}&stu_id=${app.globalData.student_id}`,
        method: 'GET',
        success: res => {
          const { error } = res.data
          if (error == '0') {
            this.setData({
              courseList: this.data.courseList.concat(res.data.result),
              dataExsit: res.data.dataExsit,
              showLoading: false
            })
            if (this.data.dataExsit) {
              this.setData({
                curCoursePage: ++this.data.curCoursePage
              })
            }
          }
        },
        fail: res => {
          throw Error(res)
        },
        complete: res => {
          // complete
        }
      })
    }
  }
})