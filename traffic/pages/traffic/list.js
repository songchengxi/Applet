//获取应用实例
var app = getApp()
Page({
  data: {
    windowHeight: 0,
    cityName: "",
    cityId: "",
    imgUrls_address: "../../images/down.png",
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
    console.log("---------onLoad---------");
    var windowHeight;
    wx.getSystemInfo({
      success: function (res) {
        windowHeight = res.windowHeight
      }
    });
    this.setData({
      windowHeight: windowHeight,
    });
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
        page: '0',
        cityId: that.data.cityId
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
    if (this.data.hasMore) {
      return;
    }
    this.setData({
      page: this.data.page + 1
    });
    console.log("page===" + this.data.page);
    var contentBefore = this.data.content;
    var that = this;
    wx.request({
      url: 'https://chengxi.duapp.com/wechat/traffic/findByPage.do',
      data: {
        page: that.data.page,
        cityId: that.data.cityId
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
  selCity: function (e) {
    var id= e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../switchcity/list?activeId='+id
    })
  },
  goSearch:function(){
    wx.navigateTo({
      url: '../search/list'
    })
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    console.log("-------onShow---------");
    this.setData({
      page: 0,
      hasMore: false
    });

    var that = this;
    try {
      var city = wx.getStorageSync('city');
      if (city) {
        console.log("取storage::success");
        that.setData({
          cityId: city.id,
          cityName: city.name
        })
      } else {
        that.setData({
          cityId: "14",
          cityName: "山西省"
        })
      }
    } catch (e) {
      console.log("取storage::error");
      that.setData({
        cityId: "14",
        cityName: "山西省"
      })
    }

    wx.request({
      url: 'https://chengxi.duapp.com/wechat/traffic/findByPage.do',
      data: {
        page: '0',
        cityId: that.data.cityId
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
      }
    })
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