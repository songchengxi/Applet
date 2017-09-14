Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    dynasty: '',
    profile: '',//简介
    emperors: '',//帝王
    events: '',//历史事件
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
      url: 'https://chengxi.duapp.com/wechat/history/findAllDetail.do',
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
            profile: res.data.detail.profile,
            emperors: res.data.emperors,
            events: res.data.events,
          });
          that.data.emperors.forEach(function (item) {
            item.toggle = false
          });
          that.data.events.forEach(function (item) {
            item.toggle = false
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
  emperorsToggle: function (e) {
    let index = e.currentTarget.dataset.index;
    var emperorsToggle = this.data.emperors[index].toggle;
    this.setData({
      ['emperors[' + index + '].toggle']: !emperorsToggle
    })
  },
  logToggle: function (e) {
    let index = e.currentTarget.dataset.index;
    var nowToggle = this.data.events[index].toggle;
    this.setData({
      ['events[' + index + '].toggle']: !nowToggle
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