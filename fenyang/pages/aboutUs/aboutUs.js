// pages/test/aboutUs.js
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

  },

  /**
   * 小程序跳转
   */
  jump: function (e) {
    var id = e.currentTarget.dataset.id;
    if (id == "1") {
      wx.navigateToMiniProgram({
        appId: 'wx34bad5ec9ca0e552',
        path: 'pages/traffic/list',
        extraData: {
          foo: 'bar'
        },
        envVersion: 'develop',
        success(res) {
          // 打开成功
        }
      })
    } else {
      wx.navigateToMiniProgram({
        appId: 'wxc626f32b3fbd3e18',
        path: 'pages/history/list',
        extraData: {
          foo: 'bar'
        },
        envVersion: 'develop',
        success(res) {
          // 打开成功
        }
      })
    }
  }
})