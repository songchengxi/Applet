var cityObj = [
  {
    "id": "34",
    "city": "安徽省",
    "initial": "A"
  },
  {
    "id": "11",
    "city": "北京市",
    "initial": "B"
  },
  {
    "id": "50",
    "city": "重庆市",
    "initial": "C"
  },
  {
    "id": "35",
    "city": "福建省",
    "initial": "F"
  },
  {
    "id": "62",
    "city": "甘肃省",
    "initial": "G"
  },
  {
    "id": "44",
    "city": "广东省",
    "initial": "G"
  },
  {
    "id": "45",
    "city": "广西省",
    "initial": "G"
  },
  {
    "id": "52",
    "city": "贵州省",
    "initial": "G"
  },
  {
    "id": "5",
    "city": "海南省",
    "initial": "H"
  },
  {
    "id": "13",
    "city": "河北省",
    "initial": "H"
  },
  {
    "id": "46",
    "city": "河南省",
    "initial": "H"
  },
  {
    "id": "23",
    "city": "黑龙江省",
    "initial": "H"
  },
  {
    "id": "42",
    "city": "湖北省",
    "initial": "H"
  },
  {
    "id": "43",
    "city": "湖南省",
    "initial": "H"
  },
  {
    "id": "22",
    "city": "吉林省",
    "initial": "J"
  },
  {
    "id": "32",
    "city": "江苏省",
    "initial": "J"
  },
  {
    "id": "36",
    "city": "江西省",
    "initial": "J"
  },
  {
    "id": "21",
    "city": "辽宁省",
    "initial": "L"
  },
  {
    "id": "15",
    "city": "内蒙古",
    "initial": "N"
  },
  {
    "id": "64",
    "city": "宁夏",
    "initial": "N"
  },
  {
    "id": "63",
    "city": "青海省",
    "initial": "Q"
  },
  {
    "id": "37",
    "city": "山东省",
    "initial": "S"
  },
  {
    "id": "14",
    "city": "山西省",
    "initial": "S"
  },
  {
    "id": "61",
    "city": "陕西省",
    "initial": "S"
  },
  {
    "id": "31",
    "city": "上海市",
    "initial": "S"
  },
  {
    "id": "51",
    "city": "四川省",
    "initial": "S"
  },
  {
    "id": "12",
    "city": "天津市",
    "initial": "T"
  },
  {
    "id": "71",
    "city": "台湾省",
    "initial": "T"
  },
  {
    "id": "54",
    "city": "西藏",
    "initial": "X"
  },
  {
    "id": "65",
    "city": "新疆",
    "initial": "X"
  },
  {
    "id": "53",
    "city": "云南省",
    "initial": "Y"
  },
  {
    "id": "33",
    "city": "浙江省",
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