Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    dynasty: '',
    profile: '',//简介
    emperor: '',//帝王
    milestone: '',//历史事件
    winWidth: 0,
    winHeight: 0,
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var dynasty = options.dynasty;
    wx.setNavigationBarTitle({ title: dynasty })
    this.setData({
      id: id,
      dynasty: dynasty
    })

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });

    wx.request({
      url: 'https://chengxi.duapp.com/wechat/history/getDetail.do',
      data: {
        id: that.data.id
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode == 200) {
          that.setData({
            profile: res.data.profile,
            emperor: res.data.emperor,
            milestone: res.data.milestone,
          });
        } else {
          wx.showToast({
            title: '请求错误',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
  /** 
   * 滑动切换tab 
   */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})