//index.js
//获取应用实例
var myCharts = require("../../wxcharts/wxcharts.js")
const app = getApp()
const devicesId = "561894108" // 填写在OneNet上获得的devicesId 形式就是一串数字 例子:9939133
const api_key = "OlpPlKFXecBDgDuQWzYxVi18ZHg="
Page({
  data: {
color1:'redz',
color2: 'redz',
color3: 'redz',
color4: 'redz',
setInter:'',
timer:'',
num1:1,
  },
  onPullDownRefresh: function () {
    wx.showLoading({
      title: "正在获取"
    })
    this.getDatapoints().then(datapoints => {
      this.update(datapoints)
      wx.hideLoading()
    }).catch((err) => {
      wx.hideLoading()
      console.error(error)
    })
  },
onLoad: function(){
  wx.showModal({
    title: 'tips',
    content: '本产品目前以寝室为模型进行开发，目前仍处于开发阶段',
    cancelText: '不了解',
    cancelColor: '#DC143C',
    confirmText: '了解',
    confirmColor: '#3CB371',


    complete: function (res) {
      if (res.cancel == true) {
        wx.showModal({
          title: 'WARNING',
          content: '不了解也得了解',
          cancelText: '明白',
          cancelColor: '#DC143C',
          confirmText: '明白',
          confirmColor: '#3CB371',
        })
      }
    }
  })

},

//charts
  getDatapoints: function () {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `https://api.heclouds.com/devices/${devicesId}/datapoints?datastream_id=Result01&limit=20`,
        /**
         * 此处header与前面实验一致, 发送的请求体格式为json, 故将content-type设置为application/json
         */
        header: {
          'content-type': 'application/json',
          'api-key': api_key
        },
        success: (res) => {
          console.log(res);
          const status = res.statusCode
          const response = res.data
          if (status !== 200) {
            reject(res.data)
          }
          if (response.errno !== 0) {
            reject(response.error)
          }

          resolve({
            sum: response.data.datastreams[0].datapoints.reverse(),
          })
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },
  update: function (datapoints) {
    const wheatherData = this.convert(datapoints);
    this.lineChart_sum.updateData({
      categories: wheatherData.categories,
      series: [{
        name: 'sum',
        data: wheatherData.sum,
        format: (val, name) => val.toFixed(1)
      }],
    })


  },
  convert: function (datapoints) {
    var categories = [];
    var sum = [];

console.log(datapoints)
    var length = datapoints.sum.length;
    console.log(length);
    for (var i = 0; i < length; i++) {
      categories.push(datapoints.sum[i].at.slice(5, 19));//截取时间
      sum.push(datapoints.sum[i].value);

    }
    return {
      categories: categories,
      sum: sum,

    }
  },
  firstDraw: function (datapoints) {

    //得到屏幕宽度
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var wheatherData = this.convert(datapoints);
    //新建图表
    this.lineChart_sum = new myCharts({
      canvasId: 'sum',
      type: 'line',
      categories: wheatherData.categories,
      animation: false,
      background: '#f5f5f5',
      series: [{
        name: '总数',
        data: wheatherData.sum,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        min:0,
        title: '总数 (人)',
        format: function (val) {
          return val.toFixed(1);
        }
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });

   
  },



onHide:function(){
clearInterval(this.data.setInter)
clearInterval(this.data.timer)
},
/*click1:function(){
  var current = this.data.color1
  if (current != 'redz') {
    this.setData({
      color1: 'redz'
    })
  }
  else {
    this.setData({
      color1: 'greenz'
    })
   }
},*/

  /*click4: function () {
    var current = this.data.color4
    if (current != 'redz') {
      this.setData({
        color4: 'redz'
      })
    }
    else {
      this.setData({
        color4: 'greenz'
      })
    }
  },*/

  /*click2: function () {
    var current = this.data.color2
    if (current != 'redz') {
      this.setData({
        color2: 'redz'
      })
    }
    else {
      this.setData({
        color2: 'greenz'
      })
    }
  },*/

  /*click3: function () {
    var current = this.data.color3
    if (current != 'redz') {
      this.setData({
        color3: 'redz'
      })
    }
    else {
      this.setData({
        color3: 'greenz'
      })
    }
  },*/
onShow:function(){

  //每隔1s自动获取一次数据进行更新
  this.data.timer = setInterval(() => {
    this.getDatapoints().then(datapoints => {
      this.update(datapoints)

    })
  }, 1000)

  wx.showLoading({
    title: '加载中'
  })

  this.getDatapoints().then((datapoints) => {
    wx.hideLoading()
    this.firstDraw(datapoints)
  }).catch((err) => {
    wx.hideLoading()
    console.error(err)
    clearInterval(this.data.timer) //首次渲染发生错误时禁止自动刷新
  })

  var that = this;
  that.data.setInter = setInterval(
    function () {
      wx.request({
        url: `https://api.heclouds.com/devices/${devicesId}/datapoints?datastream_id=Result&limit=20`,
        header: {
          'content-type': 'application/json',
          'api-key': api_key
        },
        success: function (res) {
          //console.log(res)
          var str = res.data.data.datastreams[0].datapoints[0].value;
          var str1 = str.split("");
          for (var i = 0; i < str1.length; i++) {
            if (str1[i] == 0 || str1[i] == ' ') {
              str1[i] = 'greenz';
            }
            else str1[i] = 'redz';
          }
          that.setData({
            color1: str1[0],
            color2: str1[1],
            color3: str1[2],
            color4: str1[3]
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
    },
    1000
  )
},
  read:function(){
    var that=this;
wx.request({
  url: `https://api.heclouds.com/devices/${devicesId}/datapoints?datastream_id=Result&limit=20`,
  header: {
    'content-type': 'application/json',
    'api-key': api_key
  },
  success:function(res){
    console.log(res)
    var str=res.data.data.datastreams[0].datapoints[0].value; 
    var str1 = str.split("");
    for(var i=0;i<str1.length;i++){
      if(str1[i]==0||str1[i]==' '){
        str1[i]='greenz';
      }
      else str1[i]='redz';
    }
    that.setData({
      color1:str1[0],
      color2:str1[1],
      color3:str1[2],
      color4:str1[3]
    })
  },
  fail:function(err){
    console.log(err)
  }
})
  }
})
