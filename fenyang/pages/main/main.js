//获取应用实例
var app = getApp()

var code = "1";//类型
var page = 0;//页数

Page({
  data: {
    title: "当前分类",
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false,  // loading
    array: [{
      code: '1',
      id: 'icon_1',
      src: '../../images/job.png',
      text: '求职'
    }, {
      code: '2',
      id: 'icon_2',
      src: '../../images/recruit.png',
      text: '招聘'
    }, {
      code: '3',
      id: 'icon_3',
      src: '../../images/weather.png',
      text: '天气'
    }, {
      code: '4',
      id: 'icon_4',
      src: '../../images/bus.png',
      text: '公交'
    }, {
      code: '5',
      id: 'icon_5',
      src: '../../images/tenants.png',
      text: '租房'
    }, {
      code: '6',
      id: 'icon_6',
      src: '../../images/rent.png',
      text: '出租'
    }, {
      code: '7',
      id: 'icon_7',
      src: '../../images/used.png',
      text: '二手'
    }, {
      code: '8',
      id: 'icon_8',
      src: '../../images/pet.png',
      text: '宠物'
    }, {
      code: '9',
      id: 'icon_9',
      src: '../../images/life.png',
      text: '生活服务'
    }, {
      code: '10',
      id: 'icon_10',
      src: '../../images/delicacy.png',
      text: '美食'
    }],
    images: [{
      id: '1',
      img: '../../images/1.jpg',
    }, {
      id: '2',
      img: '../../images/2.jpg',
    }, {
      id: '3',
      img: '../../images/3.jpg',
    }],
    dataArray: []
  },

  // 轮播改变时会触发的change事件
  swiperchange: function (e) {
    console.log("------swiperchange----");
  },

  // 轮播item点击事件
  itemclick: function (e) {
    console.log("------itemclick------");
  },

  // 分类item单击事件
  typeclick: function (e) {
    code = e.currentTarget.dataset.code;
    var name = e.currentTarget.dataset.text;
    this.data.dataArray = [];

    this.setData({
      title: "当前分类: " + name
    })

    // this.periphery();
  },

  onLoad: function () {
    console.log('-------onLoad--------')
    // this.periphery();
  },

  // 网络请求
  periphery: function () {
    console.log("page========" + page);
    var that = this
    wx.request({
      url: 'https://chengxi.duapp.com/wechat/history/findByPage.do',
      method: 'POST',
      data: {
        page: page,
        code: code
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);

        // that.setData({
        //   dataArray: []
        // })

        setTimeout(function () {
          that.setData({
            loadingHidden: true
          })
        }, 1000)
      }
    })
  },

  // 下拉刷新
  onPullDownRefresh: function () {
    console.log("-------下拉刷新---------");
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    page = 0;
    this.data.dataArray = [];
    // this.periphery();
    wx.hideNavigationBarLoading(); //完成停止加载
    wx.stopPullDownRefresh(); //停止下拉刷新
  },

  // 上拉加载
  onReachBottom: function () {
    console.log("-------上拉加载---------")
    page++;
    // this.periphery();
  },

  //打开地图
  openmap: function (e) {
    wx.openLocation({
      latitude: e.currentTarget.dataset.lat, // 纬度，范围为-90~90，负数表示南纬
      longitude: e.currentTarget.dataset.lng, // 经度，范围为-180~180，负数表示西经
      scale: 28, // 缩放比例
      name: e.currentTarget.dataset.name, // 位置名
      address: e.currentTarget.dataset.address, // 地址的详细说明
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
})