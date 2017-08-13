//获取应用实例
var app = getApp()
Page({
  data: {
    windowHeight:0,
    hasMore: false,
    page: 0,
    content: []
  },
  confirm: function () {
    this.setData({
      modalFlag: true
    });
  },
  onLoad: function (options) {
    var windowHeight;
    wx.getSystemInfo({
      success: function (res) {
        windowHeight=res.windowHeight
      }
    });
    var that = this;
    wx.request({
      url: 'https://chengxi.duapp.com/wechat/traffic/findByPage.do',
      data: {
        page: '0'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.statusCode == 200){
          that.setData({
            windowHeight: windowHeight,
            content: res.data.content
          });
          if (res.data.last) {
            that.setData({
              hasMore: true
            });
          }
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
  //下拉刷新
  onPullDownRefresh() {
    console.log('--------下拉刷新-------');
    this.setData({
      page: 0,
      hasMore: false
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    
    var that = this;
    wx.request({
      url: 'https://chengxi.duapp.com/wechat/traffic/findByPage.do',
      data: {
        page: '0'
      },
      method: "POST",
      header: {
      'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            content: res.data.content
          });
          if (res.data.last) {
            that.setData({
              hasMore: true
            });
          }
        } else {
          wx.showToast({
            title: '请求错误',
            icon: 'success',
            duration: 2000
          })
        }
      },
      complete: function () {
        wx.hideNavigationBarLoading(); //完成停止加载
        wx.stopPullDownRefresh(); //停止下拉刷新
      }
    })
  },
  //上拉加载更多
  onReachBottom: function () {
    console.log('--------加载更多-------');
    if (this.data.hasMore){
        return;
    }
    this.setData({
      page: this.data.page+1
    });
    console.log("page===" + this.data.page);
    var contentBefore = this.data.content;
    var that = this;
    wx.request({
      url: 'https://chengxi.duapp.com/wechat/traffic/findByPage.do',
      data: {
        page: that.data.page
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            content: contentBefore.concat(res.data.content)
          });
          if (res.data.last) {
            that.setData({
              hasMore: true
            });
          }
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
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    // return {
    //   title: 'title', // 分享标题
    //   desc: 'desc', // 分享描述
    //   path: 'path' // 分享路径
    // }
  },
  //事件处理函数
  bindItemTap: function (event) {
    var id = event.currentTarget.dataset.id; // 当前id
    console.log(id);
  }
})