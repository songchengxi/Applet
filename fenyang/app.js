//app.js
App({
  onLaunch: function () {
    var that = this
    console.log('------App Launch--------')
    //调用API从本地缓存中获取数据

    // wx.getLocation({
    //   type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    //   success: function(res){
    //     that.globalData.latitude = res.latitude
    //     that.globalData.longitude = res.longitude
    //   },
    //   fail: function() {

    //   },
    //   complete: function() {

    //   }
    // })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  onShow: function () {
    console.log('------App Show---------')
  },
  onHide: function () {
    console.log('------App Hide---------')
  },
  globalData:{
    userInfo:null,
    // latitude:null,
    // longitude:null
  },
})