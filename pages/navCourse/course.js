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
    // page 3
    courseCollected: [],
    courseHistory: []
  },
  iptFocus(e) {
    this.setData({
      focus: !this.data.focus
    })
  },
  iptConfirm(e) {
    // 确定搜索
    console.log(e.detail.value)
  },
  linkCourse () {
    wx.navigateTo({
      url: '../moreCourse/course'
    })
  },
  linkCoursePlay (e) {
    let id = e.target.dataset.id
    wx.navigateTo({
      url: `../coursePlay/play?id=${id}`
    })
  },
  tabPage (e) {
    let page = e.target.dataset.page
    this.setData({
      page: page
    })
    if (!!app.globalData.student_id) {
      if (page == 2) {
        if (!!app.globalData.student_id) {
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

          wx.request({
            url: `${getNewCourse}1&stu_id=${app.globalData.student_id}`,
            data: {},
            method: 'GET',
            success: res => {
              console.log(res, '1111111111')
              const { error } = res.data
              if (error == '0') {
                this.setData({
                  courseList: res.data.result
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
        wx.request({
          url: `${getCollect}3&stu_id=${app.globalData.student_id}`,
          method: 'GET',
          success: res => {
            console.log(res)
          },
          fail: res => {
            throw Error(res)
          },
          complete: res => {
            // complete
          }
        })
        wx.request({
          url: `${getHistory}3&stu_id=${app.globalData.student_id}`,
          method: 'GET',
          success: res => {
            console.log(res)
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
  },
  linkChildPage (e) {
    let id = e.target.dataset.id
    wx.navigateTo({
      url: `../courseChild/course?id=${id}`
    })
  },
  linkCollect () {
    wx.navigateTo({
      url: '../courseCollection/collect'
    })
  },
  linkRecord () {
    wx.navigateTo({
      url: '../courseRecord/record'
    })
  },
  linCourse (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../coursePlay/play?id=${id}`
    })
  } ,
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})