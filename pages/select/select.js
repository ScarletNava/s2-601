// pages/select/select.js
var util = require('../../utils/util.js');
//var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather:{
      wendu:'',
      tianqi1:'',
      tianqi2:'',
      tianqi3:'',
      tip1:'',
      tip2:'',
      tip3:'',
      tip4:'',
      pic:'',
      cityName:'北京',
      appear:false,
    },
    city:'',
  },
click1:function(){
  wx.navigateTo({
    url: '../index/index',
  })
},
click2:function(){
  wx.navigateTo({
    url: '../choose/choose',
  })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that = this;
    var theBaiDuAPPkey = "fD5Uotf4DkBkFHRDmmIHrPNEwtI2VElF"     //百度的APPkey
   var cityName='北京';
    var self=this;
    wx.getLocation({
      type:'gcj02',
      success: function(res) {
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + res.latitude + ',' + res.longitude+
          '&key=4FJBZ-CUQEG-3DAQ2-I4UO3-HBIZK-23FDJ'+
          '&output=json&get_poi=0',
          data:{},
          header:{
            'Content-Type':'application/json'
          },
          success:function(res){
            
            var cityName=res.data.result.address_component.city.replace('市','');
            var city = res.data.result.address;
            //self.searchWeather(city);
            self.setData({
              city,
              cityName:cityName,
              })
            wx.request({
              url: 'https://api.map.baidu.com/telematics/v3/weather?location=' + cityName + '&output=json&ak=' + theBaiDuAPPkey, //百度天气API
              header: {
                'content-type': 'application/json',
              },
              success: function (res) {
                console.log(res)
                try {
                  var str = res.data.results[0].weather_data[0].date;
                  var tmp1 = str.match(/实时.+/);
                  var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
                  var tmp = +tmp2;
                } catch (e) {
                  throw new Error(e)
                }
                //console.log(tmp)
                that.setData({
                  today: res.data.date,
                  appear:true,
                  weather: {
                    wendu: tmp +"℃",

                    tianqi1: res.data.results[0].weather_data[0].weather,
                    tianqi2: res.data.results[0].weather_data[0].wind,
                    tianqi3: res.data.results[0].weather_data[0].temperature,
                    tip1: res.data.results[0].index[0].tipt + '：' + res.data.results[0].index[0].des,
                    tip2: res.data.results[0].index[2].tipt + '：' + res.data.results[0].index[2].des,
                    tip3: res.data.results[0].index[3].tipt + '：' + res.data.results[0].index[3].des,
                    tip4: res.data.results[0].index[4].tipt + '：' + res.data.results[0].index[4].des,
                    pic: res.data.results[0].weather_data[0].dayPictureUrl,
                  }
                })

              }
            })
            console.log(res)
          },
          fail:function(err){
            var city='err'
          }
            
        })
      },
    })


    
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
    wx.showNavigationBarLoading()
    this.onLoad()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 1000);
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
