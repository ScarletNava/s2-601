//index.js
const app = getApp()

Page({
  data: {
    imgUrls: [
      {
        url: '/images/banner.jpg'
      }, {
        url: '/images/banner5.jpg'
      }, {
        url: '/images/data3.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    indicatorColor: '#fedb00',
    interval: 2000,
    duration: 400,
    activeCategoryId: 1,
  },
  goList1(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/list1/list1',
    })
  },
  goList2(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/list2/list2',
    })
  },
  goList3(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/list3/list3',
    })
  },
  goList4(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/list4/list4',
    })
  },
  goList5(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/list5/list5',
    })
  },
  goList6(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/list6/list6',
    })
  },
  goList7(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/list7/list7',
    })
  },
  goList8(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/list8/list8',
    })
  },
  goList9(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/list9/list9',
    })
  },
  goList10(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/list10/list10',
    })
  },
  goSearch(e) {
    wx.navigateTo({
      url: `/pages/search/search`,
    })
  },
  goChoose(e) {
    wx.navigateTo({
      url: `/pages/choose/choose`,
    })
  },
 

})