var util=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [['学生食堂', '教工餐厅'], ['一层', '二层', '三层', '四层', '五层'], ['掉渣饼', '风味快餐', '羊肉泡馍', '黄焖鸡系列', '营养早餐', '蛋包饭', '精品套餐', '渔康渔粉', '水吧', '初客牛排盖饭']],
    multiIndex: [0, 0, 0],
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['一层', '二层', '三层', '四层', '五层'];
            data.multiArray[2] = ['掉渣饼', '风味快餐', '羊肉泡馍', '黄焖鸡系列', '营养早餐', '蛋包饭', '精品套餐', '渔康渔粉', '水吧', '初客牛排盖饭'];
            break;
          case 1:
            data.multiArray[1] = ['一层', '二层', '三层', '四层', '五层'];
            data.multiArray[2] = ['麻辣烫', '精品快餐   黄焖鸡米饭', '快餐   苗香瓦香鸡', '烤肉拌饭', '重庆小面', '主食'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['掉渣饼', '风味快餐', '羊肉泡馍', '黄焖鸡系列', '营养早餐', '蛋包饭', '精品套餐', '渔康渔粉', '水吧', '初客牛排盖饭'];
                break;
              case 1:
                data.multiArray[2] = ['水吧', '西北面食', '韩式烤肉拌饭', '基本伙', '大众早餐', '清真炒饭', '无名缘米粉 '];
                break;
              case 2:
                data.multiArray[2] = ['基本大伙'];
                break;
              case 3:
                data.multiArray[2] = ['台九号线', '特色水煮鱼', '土耳其烤肉饭', '黄焖鸡米饭', '锡纸花甲粉', '美味足量套餐', '麻辣烫 麻辣香锅', '米粉类', '汤面盖面', '意式铁板烧'];
                break;
              case 4:
                data.multiArray[2] = ['重庆小吃', '五谷杂粮鱼粉', '亦冰亦火焖锅', '手工虾滑', '麻辣抄手 老碗面', '云南过桥米线', '韩式石锅拌饭 寿司 海鲜炒饭', '田园铁板饭 香溢木桶饭'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['麻辣烫', '精品快餐   黄焖鸡米饭', '快餐   苗香瓦香鸡', '烤肉拌饭', '重庆小面', '主食'];
                break;
              case 1:
                data.multiArray[2] = ['重庆小面 麻辣香锅', '基本伙'];
                break;
              case 2:
                data.multiArray[2] = ['大碗拌面 水煮鱼', '套餐饭', '基本伙'];
                break;
              case 3:
                data.multiArray[2] = ['重庆小面', '韩式铁板饭', '老北京烤鸭', '淮南牛肉汤', '烤肉饭 手工水饺', '旋转火锅', '烤鱼饭', '水吧'];
                break;
              case 4:
                data.multiArray[2] = ['麻辣烫', '安徽正宗板面', '蛋包饭', '座位点餐'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  
  //添加
  res: function (e) {
    console.log(e)
    const db = wx.cloud.database()
    
    var that = this
    db.collection('user').add({
      data: {
        floor: this.data.multiArray[0][this.data.multiIndex[0]] + this.data.multiArray[1][this.data.multiIndex[1]],
        cast: this.data.multiArray[2][this.data.multiIndex[2]],
        foodname: e.detail.value.foodname,
        price: e.detail.value.price,
        evaluate:e.detail.value.evaluate,
        createTime: db.serverDate(),
        time: util.formatTime(new Date()),
        /*code: this.data.decode*/
      },
      success: res => {
        
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
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