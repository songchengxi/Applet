var cityObj = [
  {
    "id": "35",
    "provincecode": "150000",
    "city": "安徽省",
    "code": "152900",
    "initial": "A"
  },
  {
    "id": "1",
    "provincecode": "110000",
    "city": "北京市",
    "code": "110100",
    "initial": "B"
  },
  {
    "id": "9",
    "provincecode": "130000",
    "city": "重庆市",
    "code": "130800",
    "initial": "C"
  },
  {
    "id": "39",
    "provincecode": "210000",
    "city": "福建省",
    "code": "210400",
    "initial": "F"
  },
  {
    "id": "130",
    "provincecode": "360000",
    "city": "甘肃省",
    "code": "360700",
    "initial": "G"
  },
  {
    "id": "197",
    "provincecode": "440000",
    "city": "广东省",
    "code": "440100",
    "initial": "G"
  },
  {
    "id": "220",
    "provincecode": "450000",
    "city": "广西壮族",
    "code": "450300",
    "initial": "G"
  },
  {
    "id": "225",
    "provincecode": "450000",
    "city": "贵州省",
    "code": "450800",
    "initial": "G"
  },
  {
    "id": "5",
    "provincecode": "130000",
    "city": "海南省",
    "code": "130400",
    "initial": "H"
  },
  {
    "id": "12",
    "provincecode": "130000",
    "city": "河北省",
    "code": "131100",
    "initial": "H"
  },
  {
    "id": "24",
    "provincecode": "150000",
    "city": "河南省",
    "code": "150100",
    "initial": "H"
  },
  {
    "id": "30",
    "provincecode": "150000",
    "city": "黑龙江省",
    "code": "150700",
    "initial": "H"
  },
  {
    "id": "49",
    "provincecode": "210000",
    "city": "湖北省",
    "code": "211400",
    "initial": "H"
  },
  {
    "id": "59",
    "provincecode": "230000",
    "city": "湖南省",
    "code": "230100",
    "initial": "H"
  },
  {
    "id": "17",
    "provincecode": "140000",
    "city": "吉林省",
    "code": "140500",
    "initial": "J"
  },
  {
    "id": "19",
    "provincecode": "140000",
    "city": "江苏省",
    "code": "140700",
    "initial": "J"
  },
  {
    "id": "42",
    "provincecode": "210000",
    "city": "江西省",
    "code": "210700",
    "initial": "J"
  },
  {
    "id": "11",
    "provincecode": "130000",
    "city": "辽宁省",
    "code": "131000",
    "initial": "L"
  },
  {
    "id": "74",
    "provincecode": "320000",
    "city": "内蒙古",
    "code": "320100",
    "initial": "N"
  },
  {
    "id": "79",
    "provincecode": "320000",
    "city": "宁夏回族",
    "code": "320600",
    "initial": "N"
  },
  {
    "id": "4",
    "provincecode": "130000",
    "city": "青海省",
    "code": "130300",
    "initial": "Q"
  },
  {
    "id": "2",
    "provincecode": "130000",
    "city": "山东省",
    "code": "130100",
    "initial": "S"
  },
  {
    "id": "18",
    "provincecode": "140000",
    "city": "山西省",
    "code": "140600",
    "initial": "S"
  },
  {
    "id": "36",
    "provincecode": "210000",
    "city": "陕西省",
    "code": "210100",
    "initial": "S"
  },
  {
    "id": "52",
    "provincecode": "220000",
    "city": "上海市",
    "code": "220300",
    "initial": "S"
  },
  {
    "id": "56",
    "provincecode": "220000",
    "city": "四川省",
    "code": "220700",
    "initial": "S"
  },
  {
    "id": "3",
    "provincecode": "130000",
    "city": "天津市",
    "code": "130200",
    "initial": "T"
  },
  {
    "id": "6",
    "provincecode": "130000",
    "city": "西藏",
    "code": "130500",
    "initial": "X"
  },
  {
    "id": "21",
    "provincecode": "140000",
    "city": "新疆维吾尔",
    "code": "140900",
    "initial": "X"
  },
  {
    "id": "20",
    "provincecode": "140000",
    "city": "云南省",
    "code": "140800",
    "initial": "Y"
  },
  {
    "id": "8",
    "provincecode": "130000",
    "city": "浙江省",
    "code": "130700",
    "initial": "Z"
  }
]

//城市检索的首字母
var searchLetter = ["↑","A", "B", "C", "F", "G", "H", "J", "L", "N", "Q", "S", "T", "X", "Y", "Z"]

function searchLetter() {
    return searchLetter;
}

//对城市信息进行分组
function cityList() {
    var tempObj=[];
    for (var i = 0; i < searchLetter.length; i++) {
        var initial = searchLetter[i];
        var cityInfo = [];
        var tempArr = {};
        tempArr.initial = initial;
        for (var j = 0; j < cityObj.length; j++) {
            if (initial == cityObj[j].initial) {
                cityInfo.push(cityObj[j]);
            }
        }
        if (cityInfo.length != 0){
          tempArr.cityInfo = cityInfo;
          tempObj.push(tempArr);
        }
    }
    return tempObj;
}

module.exports = {
    searchLetter: searchLetter,
    cityList: cityList
}