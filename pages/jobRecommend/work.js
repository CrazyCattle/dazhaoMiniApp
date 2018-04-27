import {
  getPositionList,
  getZPType,
  getPositionType
} from '../../api'

Page({
  data: {
    recruitType: [],//招聘单位类型数组
    eduType: [],//学历类型数组
    posiTypeParent: [], //招聘职位类型一级
    posiTypeChild: [],//招聘职位类型二级
    curPage: 1,
    showLoading: false,
    canLoadingMore: true,

    recruitTypeId: 0,
    positionTypeId: undefined,

    active: 0,
    placeholderTxt: '搜索公司或职位名称',
    focus: false,
    filterType: 0,
    scrollTop: 0,
    timer: null,
    // 职位推荐
    jobList: []
  },
  // 招聘单位类型切换
  filterData (e) {
    let type = e.target.dataset.type
    let id = e.currentTarget.dataset.id

    if (this.data.filterType != type) {
      this.setData({
        filterType: type
      })
      console.log(type, id)
      this.setData({
        recruitTypeId: id
      })
      console.log(this.data.recruitTypeId, 12321321312)
    }
  },
  // 过滤下拉切换
  tabFilter (e) {
    console.log(e)
    console.log(this.data.active, e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
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
 
  // 学历类型过滤
  filterEduc (e) {
    this.setData({
      active: 0
    })
    // console.log(this.data.active)
  },
  chooseEduId(e){
    // 学历过滤 获取id
    let id = e.target.dataset.id
  },

  //招聘职位类型过滤
  chooseParentType(e){
    let id = e.currentTarget.dataset.id
    this.getPosiChildTypeFun(id)
  },
  chooseChildType(e) {
    let id = e.currentTarget.dataset.id
    console.log(this.data.recruitTypeId, id)
    this.getData(this.data.recruitTypeId, id)
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
  //获取招聘单位类型
  getRecruitTypeFun() {
    let _self = this
    wx.request({
      url: `${getZPType}?module=ComUnitType`,
      method: 'GET',
      success: res => {
        console.log(res)
        if (res.data.error == '0') {
          _self.setData({
            recruitType: this.data.recruitType.concat(res.data.listjson)
          })
        }
      }
    })
  },
  //获取招聘职位类型
  getPosiParentTypeFun() {
    let _self = this
    wx.request({
      url: `${getPositionType}?father_id=0&level=1`,
      method: 'GET',
      success: res => {
        console.log(res)
        if (res.data.error == '0') {
          _self.setData({
            posiTypeParent: res.data.listjson
          })
        }
      }
    })
  },
  getPosiChildTypeFun(id) {
    let _self = this
    wx.request({
      url: `${getPositionType}?father_id=${id}&level=2`,
      method: 'GET',
      success: res => {
        console.log(res)
        if (res.data.error == '0') {
          _self.setData({
            posiTypeChild: res.data.listjson
          })
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.errortip,
            duration: 1000
          })
          _self.setData({
            posiTypeChild: []
          })
        }
      }
    })
  },
  //通过单位类型和职位类型获取数据
  getData(rId, pId) {
    wx.request({
      url: `${getPositionList}`,
      data: {
        p: 1,
        unittype: rId,
        positiontype_id: pId,
        nums: 10
      },
      method: 'GET',
      success: res => {
        if (res.data.error == '0') {
          console.log(res.data.result.list)
          this.setData({
            jobList: res.data.result.list
          })
        }
      }
    })
  },
  //获取学历类型
  getEduTypeFun(){
    let _self = this
    wx.request({
      url: `${getZPType}?module=Degree`,
      method: 'GET',
      success: res => {
        console.log(res)
        if (res.data.error == '0') {
          _self.setData({
            eduType: this.data.eduType.concat(res.data.listjson)
          })
        }
      }
    })
  },
  // 获取职位数据
  getJobData() {
    let _self = this
    if (this.data.canLoadingMore) {
      _self.setData({
        showLoading: true
      })
      wx.request({
        url: `${getPositionList}`,
        data: {
          p: _self.data.curPage,
          nums: 10
        },
        type: 'GET',
        success: res => {
          if (res.data.error == '0') {
            const { list } = res.data.result
            if (list.length >= 1) {
              _self.setData({
                jobList: this.data.jobList.concat(list)
              })
            }
            if ( list.length >= 10) {
              _self.setData({
                curPage: ++_self.data.curPage
              })
            } else {
              _self.setData({
                canLoadingMore: false
              })
            }
            _self.setData({
              showLoading: false
            })
          }
        }
      })
    }
  },
  onLoad: function (options) {
    this.getRecruitTypeFun()
    this.getEduTypeFun()
    this.getPosiParentTypeFun()
    this.getJobData()  //获取职位
  },
  onShow: function () {
  
  },
  lower (e) {
    wx.showNavigationBarLoading();
    const self = this
    if (self.timer) {
      clearTimeout(self.timer)
    }
    self.timer = setTimeout(() => {
      this.getJobData()
      wx.hideNavigationBarLoading()
    }, 500)
  }
})