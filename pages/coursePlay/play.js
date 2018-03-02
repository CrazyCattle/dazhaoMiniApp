import { getPlayUrl } from '../../api';
Page({
  data: {
    // 视频 信息
    controls: true,
    autoplay: false,
    showPlayBtn: true,
    showCenterPlayBtn: false,
    playInfor: {},

    active: false,
    menuActive: false,
    collected: true
  },
  more () {
    this.setData({
      active: !this.data.active
    })
  },
  showMenu () {
    this.setData({
      menuActive: !this.data.menuActive
    })
  },
  linkCoursePlay (e) {
    let curid = e.target.dataset.curid
    let id = e.target.dataset.id
    if (curid !== id) {
      wx.navigateTo({
        url: `../coursePlay/play?id=${id}`
      })
    }
  },
  onLoad: function (options) {
    let id = options.id
    wx.request({
      url: `${getPlayUrl}${id}`,
      method: 'GET',
      success: res => {
        console.log(res)
        const { error } = res.data
        if (error == '0') {
          const { result } = res.data
          console.log(result)
          this.setData({
            playInfor: result
          })
        }
      },
      fail: err => {
        throw Error(err);
      },
      complete: res => {
        // console.log(res)
      }
    })
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {}
})