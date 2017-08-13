// pages/his/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "id":"01","dynasty": "夏", "time": "约前2029-1559", "capital": "安邑", "nowCapital": "山西夏县", "founder": "夏王姒启" },
      { "id": "02","dynasty": "商", "time": "约前1675-1029", "capital": "亳", "nowCapital": "河南商丘", "founder": "汤" },
      { "id": "03","dynasty": "周（西周）", "time": "约前1029-771", "capital": "镐京", "nowCapital": "陕西西安", "founder": "周文王姬昌" },
      { "id": "04","dynasty": "周（东周-春秋）", "time": "前770-476", "capital": "洛邑", "nowCapital": "河南洛阳", "founder": "周平王姬宜臼" },
      { "id": "05","dynasty": "周（东周-战国）", "time": "前475-221", "capital": "", "nowCapital": "", "founder": "" },
      { "id": "06","dynasty": "秦朝", "time": "前221-207", "capital": "咸阳", "nowCapital": "陕西咸阳", "founder": "始皇帝嬴政" },
      { "id": "07","dynasty": "汉（西汉）", "time": "前206-公元8年", "capital": "长安", "nowCapital": "陕西西安", "founder": "高祖刘邦" },
      { "id": "08","dynasty": "新朝", "time": "9-23", "capital": "常安", "nowCapital": "陕西西安", "founder": "王莽" },
      { "id": "09","dynasty": "汉（玄汉）", "time": "23-25", "capital": "洛阳", "nowCapital": "河南洛阳", "founder": "汉更始帝刘玄" },
      { "id": "10","dynasty": "汉（东汉）", "time": "25-220", "capital": "洛阳", "nowCapital": "河南洛阳", "founder": "光武帝刘秀" },
      { "id": "11","dynasty": "曹魏", "time": "220-265", "capital": "洛阳", "nowCapital": "河南洛阳", "founder": "魏文帝曹丕" },
      { "id": "12","dynasty": "蜀汉", "time": "221-263", "capital": "成都", "nowCapital": "四川成都", "founder": "汉昭烈帝刘备" },
      { "id": "13","dynasty": "孙吴", "time": "222-280", "capital": "建业", "nowCapital": "江苏南京", "founder": "吴大帝孙权" },
      { "id": "14","dynasty": "西晋", "time": "265-316", "capital": "洛阳", "nowCapital": "河南洛阳", "founder": "晋武帝司马炎" },
      { "id": "15","dynasty": "东晋", "time": "317-420", "capital": "建康", "nowCapital": "江苏南京", "founder": "晋元帝司马睿" },
      { "id": "16","dynasty": "十六国（前赵-汉赵）", "time": "304-329", "capital": "平阳", "nowCapital": "山西临汾", "founder": "高祖光文皇帝刘渊" },
      { "id": "17","dynasty": "十六国（成汉）", "time": "306-347", "capital": "成都", "nowCapital": "四川成都", "founder": "太宗武皇帝李雄" },
      { "id": "18","dynasty": "十六国（前凉）", "time": "314-363", "capital": "姑臧", "nowCapital": "甘肃武威", "founder": "高祖明王张寔" },
      { "id": "19","dynasty": "十六国（后赵）", "time": "319-351", "capital": "襄国", "nowCapital": "河北邢台", "founder": "高祖明皇帝石勒" },
      { "id": "20","dynasty": "十六国（前燕）", "time": "337-370", "capital": "龙城", "nowCapital": "辽宁朝阳", "founder": "太祖文明皇帝慕容皝" },
      { "id": "21","dynasty": "十六国（前秦）", "time": "351-394", "capital": "长安", "nowCapital": "陕西西安", "founder": "世宗明皇帝符健" },
      { "id": "22","dynasty": "十六国（后秦）", "time": "384-417", "capital": "长安", "nowCapital": "陕西西安", "founder": "太祖武昭皇帝姚苌" },
      { "id": "23","dynasty": "十六国（后燕）", "time": "384-407", "capital": "中山", "nowCapital": "河北定州", "founder": "世祖成武皇帝慕容垂" },
      { "id": "24","dynasty": "十六国（西秦）", "time": "385-431", "capital": "苑川", "nowCapital": "甘肃榆中", "founder": "烈祖宣烈王乞伏国仁" },
      { "id": "25","dynasty": "十六国（后凉）", "time": "386-403", "capital": "略阳", "nowCapital": "甘肃平凉", "founder": "太祖懿武皇帝吕光" },
      { "id": "26","dynasty": "十六国（南凉）", "time": "397-414", "capital": "西平", "nowCapital": "青海西宁", "founder": "烈祖武王拓跋乌孤" },
      { "id": "27","dynasty": "十六国（南燕）", "time": "398-410", "capital": "广固", "nowCapital": "山东益都", "founder": "世宗献武皇帝慕容德" },
      { "id": "28","dynasty": "十六国（西凉）", "time": "407-421", "capital": "酒泉", "nowCapital": "甘肃酒泉", "founder": "太祖昭武王李暠" },
      { "id": "29","dynasty": "十六国（胡夏）", "time": "407-431", "capital": "统万城", "nowCapital": "陕西靖边", "founder": "世祖烈武皇帝赫连勃勃" },
      { "id": "30","dynasty": "十六国（北燕）", "time": "407-436", "capital": "和龙", "nowCapital": "辽宁朝阳", "founder": "燕惠懿帝高云" },
      { "id": "31","dynasty": "十六国（北凉）", "time": "397-439", "capital": "张掖", "nowCapital": "甘肃张掖", "founder": "太祖武宣王沮渠蒙逊" },
      { "id": "32","dynasty": "十六国（*冉魏）", "time": "350-352", "capital": "邺城", "nowCapital": "河北临漳", "founder": "武悼天王冉闵" },
      { "id": "33","dynasty": "十六国（*西燕）", "time": "384-394", "capital": "长子", "nowCapital": "山西长子", "founder": "济北王慕容泓" },
      { "id": "34","dynasty": "十六国（*西蜀-后蜀）", "time": "405-413", "capital": "益州", "nowCapital": "四川成都", "founder": "谯纵" },
      { "id": "35","dynasty": "南朝-宋", "time": "420-479", "capital": "建康", "nowCapital": "江苏南京", "founder": "宋武帝刘裕" },
      { "id": "36","dynasty": "南朝-齐", "time": "479-502", "capital": "建康", "nowCapital": "江苏南京", "founder": "齐高帝萧道成" },
      { "id": "37","dynasty": "南朝-梁", "time": "502-557", "capital": "建康", "nowCapital": "江苏南京", "founder": "梁武帝萧衍" },
      { "id": "38","dynasty": "南朝-陈", "time": "557-589", "capital": "建康", "nowCapital": "江苏南京", "founder": "陈武帝陈霸先" },
      { "id": "39", "dynasty": "北朝-北魏", "time": "386-534", "capital": "平城、洛阳", "nowCapital": "山西大同、河南洛阳", "founder": "魏道武帝拓跋珪" },
      { "id": "40", "dynasty": "北朝-东魏", "time": "534-550", "capital": "邺", "nowCapital": "河北临漳", "founder": "魏孝静帝元善见" },
      { "id": "41","dynasty": "北朝-西魏", "time": "535-556", "capital": "长安", "nowCapital": "陕西西安", "founder": "魏文帝元宝炬" },
      { "id": "42","dynasty": "北朝-北齐", "time": "550-577", "capital": "邺", "nowCapital": "河北临漳", "founder": "齐文宣帝高洋" },
      { "id": "43","dynasty": "北朝-北周", "time": "557-581", "capital": "长安", "nowCapital": "陕西西安", "founder": "周孝闵帝宇文觉" },
      { "id": "44", "dynasty": "隋朝", "time": "581-618", "capital": "大兴", "nowCapital": "陕西西安", "founder": "隋文帝杨坚" },
      { "id": "45","dynasty": "唐朝", "time": "618-907", "capital": "长安", "nowCapital": "陕西西安", "founder": "唐高祖李渊" },
      { "id": "46","dynasty": "五代十国（后梁）", "time": "907-923", "capital": "汴", "nowCapital": "河南开封", "founder": "梁太祖朱晃" },
      { "id": "47","dynasty": "五代十国（后唐）", "time": "923-936", "capital": "洛阳", "nowCapital": "河南洛阳", "founder": "唐庄宗李存勖" },
      { "id": "48","dynasty": "五代十国（后晋）", "time": "936-947", "capital": "汴", "nowCapital": "河南开封", "founder": "晋高祖石敬瑭" },
      { "id": "49","dynasty": "五代十国（后汉）", "time": "947-950", "capital": "汴", "nowCapital": "河南开封", "founder": "汉高祖刘暠" },
      { "id": "50", "dynasty": "五代十国（后周）", "time": "951-960", "capital": "汴", "nowCapital": "河南开封", "founder": "周太祖郭威" },
      { "id": "51","dynasty": "五代十国（前蜀）", "time": "891-925", "capital": "成都", "nowCapital": "四川成都", "founder": "高祖王建" },
      { "id": "52","dynasty": "五代十国（后蜀）", "time": "907-923", "capital": "成都", "nowCapital": "四川成都", "founder": "高祖孟知祥" },
      { "id": "53","dynasty": "五代十国（杨吴）", "time": "892-937", "capital": "扬州", "nowCapital": "江苏扬州", "founder": "太祖杨行密" },
      { "id": "54","dynasty": "五代十国（南唐）", "time": "937-975", "capital": "金陵", "nowCapital": "江苏南京", "founder": "烈祖李昪" },
      { "id": "55","dynasty": "五代十国（吴越）", "time": "893-978", "capital": "杭州", "nowCapital": "浙江杭州", "founder": "武肃王钱鏐" },
      { "id": "56","dynasty": "五代十国（闽国）", "time": "893-945", "capital": "长乐", "nowCapital": "福建福州", "founder": "太祖王审知" },
      { "id": "57","dynasty": "五代十国（马楚）", "time": "896-951", "capital": "长沙", "nowCapital": "湖南长沙", "founder": "武穆王马殷" },
      { "id": "58","dynasty": "五代十国（南汉）", "time": "905-971", "capital": "兴王府", "nowCapital": "广东广州", "founder": "高祖刘龑" },
      { "id": "59","dynasty": "五代十国（南平）", "time": "907-963", "capital": "荆州", "nowCapital": "湖北荆州", "founder": "武信王高季兴" },
      { "id": "60","dynasty": "五代十国（北汉）", "time": "951-979", "capital": "太原", "nowCapital": "山西太原", "founder": "世祖刘崇" },
      { "id": "61","dynasty": "宋（北宋）", "time": "960-1127", "capital": "开封", "nowCapital": "河南开封", "founder": "太祖赵匡胤" },
      { "id": "62","dynasty": "宋（南宋）", "time": "1127-1279", "capital": "临安", "nowCapital": "浙江临安", "founder": "高宗赵构" },
      { "id": "63","dynasty": "辽国", "time": "907-1125", "capital": "皇都", "nowCapital": "辽宁", "founder": "太祖耶律阿保机" },
      { "id": "64","dynasty": "大理", "time": "937-1254", "capital": "太和城", "nowCapital": "云南大理", "founder": "太祖段思平" },
      { "id": "65","dynasty": "西夏", "time": "1032-1227", "capital": "兴庆府", "nowCapital": "宁夏银川", "founder": "景帝李元昊" },
      { "id": "66","dynasty": "金", "time": "1115-1234", "capital": "开封", "nowCapital": "河南开封", "founder": "金太祖阿骨打" },
      { "id": "67","dynasty": "元朝", "time": "1206-1368", "capital": "大都", "nowCapital": "北京", "founder": "元世祖忽必烈" },
      { "id": "68","dynasty": "明朝", "time": "1368-1644", "capital": "北京", "nowCapital": "北京", "founder": "明太祖朱元璋" },
      { "id": "69","dynasty": "清朝", "time": "1616-1911", "capital": "北京", "nowCapital": "北京", "founder": "清太宗皇太极" }
    ]
  },

  //事件处理函数
  bindItemTap: function (event) {
    var id = event.currentTarget.dataset.id, // 当前id
    article = null;
    // 找出当时点击的那一项的详细信息
    for (var d of this.data.listData) {
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
  
  }
})