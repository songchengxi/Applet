//获取应用实例
var app = getApp()
Page({
  data: {
    news: [
      {
        id: 1,
        title: '三皇五帝',
        child: 0
      },
      {
        id: 2,
        title: '夏朝',
        child: 0
      },
      {
        id: 3,
        title: '商朝',
        child: 0
      },
      {
        id: 3,
        title: '周朝',
        child: 1
      },
      {
        id: 4,
        title: '秦朝',
        child: 0
      },
      {
        id: 5,
        title: '汉',
        child: 1
      },
      {
        id: 6,
        title: '三国',
        child: 1
      },
    ]
  },
  //事件处理函数
  bindItemTap: function (event) {
    var id = event.currentTarget.dataset.id, // 当前id
      article = null;
    // 找出当时点击的那一项的详细信息
    for (var d of this.data.news) {
      if (d.id == id) {
        article = d;
        break;
      }
    }
    console.log(article);
    if (!article) {
      console.log('系统出错');
      return;
    }
    // 设置到全局变量中去，让下个页面可以访问
    app.globalData.curArticle = article;
    // 切换页面
    wx.navigateTo({
      url: '../article/content'
    });
  },
  onLoad: function () {
    // var that = this;
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   });
    // })
  }
})