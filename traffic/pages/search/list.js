Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    showClearBtn: false,
    hasMore: true,
    page: 0,
    content: []
  },
  //输入内容时
  searchActiveChangeinput: function (e) {
    var val = e.detail.value;
    this.setData({
      showClearBtn: val != '' ? true : false,
      searchValue: val
    })
  },
  //点击清除搜索内容
  searchActiveChangeclear: function (e) {
    console.log("---------清除--------");
    this.setData({
      showClearBtn: false,
      searchValue: ''
    })
  },
  //点击聚集时
  focusSearch: function () {
    console.log("---------聚集--------");
    if (this.data.searchValue) {
      this.setData({
        showClearBtn: true
      })
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('--------下拉刷新-------');
    this.setData({
      page: 0,
      hasMore: false
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载

    var that = this;
    wx.request({
      url: 'https://chengxi.duapp.com/wechat/traffic/findByName.do',
      data: {
        page: that.data.page,
        name: that.data.searchValue
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

  /**
   * 页面上拉触底事件的处理函数
   */
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
      url: 'https://chengxi.duapp.com/wechat/traffic/findByName.do',
      data: {
        page: that.data.page,
        name: that.data.searchValue
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})