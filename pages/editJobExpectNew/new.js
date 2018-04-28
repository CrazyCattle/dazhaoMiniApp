import {
  getZPType, //行业大类
  getIndustryList,//行业小类
  getSalaryBase,//薪资
  getunitsizeType,//公司规模
  getPositionType,
  getProvinceList, //省份
  getCityList, //father_id 城市
} from '../../api';

Page({
  data: {
   
    address: ['请选择求职地点', '互联网/IT425', '金融'],
    addressIndex: 0,

    resumeTitle: '',
    user_name: '',
    user_phone: '',
    user_email: '',

    user_exprect: '',
    industry: '',
    city: '',

    // 目标行业
    industryIndex: [0, 0],
    industryArray: [[], []],
    industryOne: [],
    industryOneC: [],

    //职位类别
    jobIndex: [0, 0],
    jobArray: [[], []],
    jobOne: [],
    jobOneC: [],

    // 地点
    addressIndex: [0, 0],
    addressArray: [[], []],
    addressOne: [],
    addressOneC: [],
    
    // 薪资数据
    salaryArr: [],
    salaryIndex: 0,
    salaryIndexArr: [],
    // 公司规模数据
    sizeArr: [],
    sizeIndex: 0,
    sizeIndexArr: [],
    //公司性质
    xzArr: [],
    xzIndex: 0,
    xzIndexArr: [],
  },


  //获取薪资
  getSalaryBaseFun() {
    wx.request({
      url: `${getSalaryBase}`,
      method: 'GET',
      success: res => {
        if (res.data.error == '0') {
          const arr1 = []
          const arr2 =[]
          res.data.result.forEach((v, i) => {
            arr1.push(v.tilte)
            arr2.push(v.parameter)
          })
          this.setData({
            salaryArr: arr1,
            salaryIndexArr: arr2
          })
        }
      }
    })
  },
  listenerSalary(e) {
    this.setData({
      salaryIndex: e.detail.value
    });
  },

  //获取公司规模
  getunitsizeTypeFun() {
    wx.request({
      url: `${getunitsizeType}`,
      method: 'GET',
      success: res => {
        if (res.data.error == '0') {
          const arr1 = []
          const arr2 = []
          res.data.result.forEach((v, i) => {
            arr1.push(v.tilte)
            arr2.push(v.parameter)
          })
          this.setData({
            sizeArr: arr1,
            sizeIndexArr: arr2
          })
        }
      }
    })
  },
  listenerSize(e) {
    this.setData({
      sizeIndex: e.detail.value
    });
  },

  //获取公司性质
  getCompanyXZFun() {
    wx.request({
      url: `${getZPType}?module=ComUnitType`,
      method: 'GET',
      success: res => {
        if (res.data.error == '0') {
          const arr1 = []
          const arr2 = []
          res.data.listjson.forEach((v, i) => {
            arr1.push(v.tilte)
            arr2.push(v.parameter)
          })
          this.setData({
            xzArr: arr1,
            xzIndexArr: arr2
          })
        }
      }
    })
  },
  listenerNature(e) {
    this.setData({
      xzIndex: e.detail.value
    });
  },

  // 监听目标行业
  listenerIndustry(e) {
    console.log(e)
    this.setData({
      industry: this.data.industryArray[1][e.detail.value[1]]
    })
  },
  listenerIndustryChange(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    let c = e.detail.column
    let v = e.detail.value
    let _self = this
    if (c == '0') {
      _self.data.industryOne.forEach((val, i) => {
        if (val.tilte == _self.data.industryArray[0][v]) {
          wx.request({
            url: `${getIndustryList}?tb_type=${val.parameter}`,
            success: res => {
              console.log(res)
              if (res.data.error == '0') {
                console.log(res.data,12321)
                const arr = []
                res.data.result.forEach((v, i) => {
                  arr.push(v.industry_name)
                })
                _self.setData({
                  industryArray: [_self.data.industryOneC, arr]
                })
              }
            }
          })
        }
      })
    }
  },

  //招聘职位职位类型
  getPosiParentTypeFun() {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${getPositionType}?father_id=0&level=1`,
        method: 'GET',
        success: res => {
          if (res.data.error == '0') {
            const { listjson } = res.data
            const jobOne = []
            listjson.forEach((v, i) => {
              jobOne.push(v.positiontype_name)
            })
            this.setData({
              jobOne: listjson,
              jobOneC: jobOne
            })
            resolve(listjson)
          }
        }
      })
    })
  },
  getPosiChildTypeFun(id) {
    let _self = this
    wx.request({
      url: `${getPositionType}?father_id=${id}&level=2`,
      method: 'GET',
      success: res => {
        if (res.data.error == '0') {
          const arr = []
          res.data.listjson.forEach((v, i) => {
            arr.push(v.positiontype_name)
          })
          this.setData({
            jobArray: [this.data.jobOneC, arr]
          })
        }
      }
    })
  },

  // 监听职位类别
  listenerJobList(e) {
    console.log(1)
    this.setData({
      user_exprect: this.data.jobArray[1][e.detail.value[1]]
    })
  },
  listenerJobChange(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    let c = e.detail.column
    let v = e.detail.value
    let _self = this
    if (c == '0') {
      console.log( _self.data.jobOne,_self.data.jobArray)
      _self.data.jobOne.forEach((val, i) => {
        if (val.positiontype_name == _self.data.jobArray[0][v]) {
          wx.request({
            url: `${getPositionType}?father_id=${val.positiontype_id}&level=2`,
            success: res => {
              console.log(res)
              if (res.data.error == '0') {
                console.log(res.data,12321)
                const arr = []
                res.data.listjson.forEach((v, i) => {
                  arr.push(v.positiontype_name)
                })
                _self.setData({
                  jobArray: [_self.data.jobOneC, arr]
                })
              } else {
                wx.showToast({
                  title: res.data.errortip,
                  icon: 'none',
                  duration: 1000
                })
              }
            }
          })
        }
      })
    }
  },

  // 地点监听
  listenerCity(e) {
    this.setData({
      city: this.data.addressArray[1][e.detail.value[1]]
    })
  },
  listenerCityChange(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    let c = e.detail.column
    let v = e.detail.value
    let _self = this
    if (c == '0') {
      _self.data.addressOne.forEach((val, i) => {
        if (val.province_name == _self.data.addressArray[0][v]) {
          wx.request({
            url: `${getCityList}?father_id=${val.province_code}`,
            success: res => {
              if (res.data.error == '0') {
                const arr = []
                res.data.listjson.forEach((v, i) => {
                  arr.push(v.city_name)
                })
                _self.setData({
                  addressArray: [_self.data.addressOneC, arr]
                })
              } else {  
                wx.showToast({
                  title: res.data.errortip,
                  icon: 'none',
                  duration: 1000
                })
              }
            }
          })
        }
      })
    }
  },

  onLoad: function (options) {
    console.log(options.id)
    console.log(JSON.parse(options.data))
    this.setData({
      user_exprect: '测试',
      industry: '测试',
      city: '测试'
    })

    this.getSalaryBaseFun()
    this.getunitsizeTypeFun()
    this.getCompanyXZFun()

    this.getPosiParentTypeFun().then((res) => {
      console.log(res[0].positiontype_id)
      this.getPosiChildTypeFun(res[0].positiontype_id)
    })

    // 行业大类
    new Promise((resolve, reject) => {
      wx.request({
        url: `${getZPType}?module=inc_industry`,
        success: res => {
          if (res.data.error == '0') {
            const { listjson } = res.data
            const jobOne = []
            listjson.forEach((v, i) => {
              jobOne.push(v.tilte)
            })
            this.setData({
              industryOne: listjson,
              industryOneC: jobOne
            })
            resolve(listjson)
          }
        }
      })
    }).then(res => {
      wx.request({
        url: `${getIndustryList}?tb_type=${res[0].parameter}`,
        success: res => {
          console.log(res,1000)
          if (res.data.error == '0') {
            const arr = []
            res.data.result.forEach((v, i) => {
              arr.push(v.industry_name)
            })
            this.setData({
              industryArray: [this.data.industryOneC, arr]
            })
          }
        }
      })
    })

    // 地点
    new Promise((resolve, reject) => {
      wx.request({
        url: `${getProvinceList}`,
        success: res => {
          console.log(res, 'p')
          if (res.data.error == '0') {
            const { listjson } = res.data
            const jobOne = []
            listjson.forEach((v, i) => {
              jobOne.push(v.province_name)
            })
            this.setData({
              addressOne: listjson,
              addressOneC: jobOne
            })
            console.log(this.data.addressOne,this.data.addressOneC,11)
            resolve(listjson)
          }
        }
      })
    }).then(res => {
      wx.request({
        url: `${getCityList}?father_id=${res[0].province_code}`,
        success: res => {
          console.log(res, 'city')
          if (res.data.error == '0') {
            const arr = []
            res.data.listjson.forEach((v, i) => {
              arr.push(v.city_name)
            })
            this.setData({
              addressArray: [this.data.addressOneC, arr]
            })
          }
        }
      })
    })
  },
  onShow: function () {}
})