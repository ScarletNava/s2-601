// miniprogram/pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    index: 0,
    loading: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.tags) {
      this.data.searchContent = options.content
      this.data.searchIsTags = true
      this.loadList(options.content)
    } else {
      this.data.searchContent = options.content
      this.loadList(options.content)
    }
  },
  loadList(content) {
    let that = this
    const db = wx.cloud.database()
    const _ = db.command
    if (!this.data.isOver) {
      let { list, index, num } = this.data;
      wx.showLoading({
        title: '正在加载...',
        mask: true
      });
      this.setData({
        loading: true
      });
      const db = wx.cloud.database();
      const MAX_LIMIT = 20
      db.collection('user').orderBy('createTime', 'desc').skip(index).limit(MAX_LIMIT).where({
        floor: "学生食堂五层"
      }).get().then(res => {
        console.log(res);
        if (res.data.length) {
          list.push(...res.data)
          this.setData({
            list,
            loading: false
          })
          console.log(list)
        } else {
          this.setData({
            loading: false,
            isOver: true
          })
        }
        wx.hideLoading()

      })

    }
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