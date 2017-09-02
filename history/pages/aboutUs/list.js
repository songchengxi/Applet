Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  jump: function () {
    wx.navigateToMiniProgram({
      appId: 'wx34bad5ec9ca0e552',
      path: 'pages/traffic/list',
      success(res) {
        // 打开成功
      }
    })
  }
})