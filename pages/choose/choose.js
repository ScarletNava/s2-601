// pages/choose/choose.js
Page({

  data: {
    animationData1:[],
    animationData2:[],
    animationData3:[],
    animationData4:[],
    appear:0,
    randomData:0,
    shuzhi:0,
    dis:false,
    dis01:"yes01" ,
    dis11:"yes10",
    dis12: "yes10",
    dis13: "yes10",
    dis14: "yes10",
    dis15: "yes10",
    dis02: "yes02",
    dis21: "yes10",
    dis22: "yes10",
    dis23: "yes10",
    dis24: "yes10",
    dis25: "yes10",
    expr:"历史记录",


},
//选楼层阶段

disabled01: function () {//bindtap
  this.setData({
    dis01:this.data.dis01==="yes01"?"no01":"yes01",
  })
  if(this.data.dis01=="no01")
    this.setData({
      dis11: "no10",
      dis12: "no10",
      dis13: "no10",
      dis14: "no10",
      dis15: "no10",
    })
  if (this.data.dis01 == "yes01")
    this.setData({
      dis11: "yes10",
      dis12: "yes10",
      dis13: "yes10",
      dis14: "yes10",
      dis15: "yes10",
    })
  
  },
  disabled11: function () {//bindtap
    this.setData({
     dis11: this.data.dis11 === "yes10" ? "no10" : "yes10"
    })
  },
  disabled12: function () {//bindtap
    this.setData({
      dis12: this.data.dis12 === "yes10" ? "no10" : "yes10"
    })
  },
  disabled13: function () {//bindtap
    this.setData({
      dis13: this.data.dis13 === "yes10" ? "no10" : "yes10"
    })
  },
  disabled14: function () {//bindtap
    this.setData({
      dis14: this.data.dis14 === "yes10" ? "no10" : "yes10"
    })
  }, 
  disabled15: function () {//bindtap
    this.setData({
      dis15: this.data.dis15 === "yes10" ? "no10" : "yes10"
    })
  }, 
  disabled02: function () {//bindtap
 this.setData({
   dis02: this.data.dis02 === "yes02" ? "no02" : "yes02"
  })
  if (this.data.dis02 == "no02")
    this.setData({
      dis21: "no10",
      dis22: "no10",
      dis23: "no10",
      dis24: "no10",
      dis25: "no10",
    })
  if (this.data.dis02 == "yes02")
    this.setData({
      dis21: "yes10",
      dis22: "yes10",
      dis23: "yes10",
      dis24: "yes10",
      dis25: "yes10",
    })
  },
  disabled21: function () {//bindtap
    this.setData({
      dis21: this.data.dis21 === "yes10" ? "no10" : "yes10"
    })
  },
  disabled22: function () {//bindtap
    this.setData({
      dis22: this.data.dis22 === "yes10" ? "no10" : "yes10"
    })
  },
  disabled23: function () {//bindtap
    this.setData({
      dis23: this.data.dis23 === "yes10" ? "no10" : "yes10"
    })
  },
  disabled24: function () {//bindtap
    this.setData({
      dis24: this.data.dis24 === "yes10" ? "no10" : "yes10"
    })
  },
  disabled25: function () {//bindtap
    this.setData({
      dis25: this.data.dis25 === "yes10" ? "no10" : "yes10"
    })
}, 
//动画
divine:function(){
  this.setData({
    dis: !this.data.dis
  }) 
  var expr1=this.data.expr;
  var shuzi=this.data.shuzhi;
  var that=this;
  setTimeout(function () {
   var animation_btn=wx.createAnimation({
     duration: 1200,
     timingFunction: 'ease',
     delay: 0,
     transformOrigin: '50% 50% 0'
   })
    animation_btn.opacity(1).step
    that.setData({
     appear:1,
     animationData4: animation_btn.export(),
   })
     
}, 3600)
var a1=0,a2=0,a3=0,a4=0,a5=0,a6=0,a7=0,a8=0,a9=0,a10=0;
if(this.data.dis11=="yes10")
  a1=1;
if (this.data.dis12 == "yes10")
  a2=1;
if (this.data.dis13 == "yes10")
  a3 = 1;
if (this.data.dis14 == "yes10")
  a4 = 1;
if (this.data.dis15 == "yes10")
  a5 = 1;
if (this.data.dis21 == "yes10")
  a6 = 1;
if (this.data.dis22 == "yes10")
  a7 = 1;
if (this.data.dis23 == "yes10")
  a8 = 1;
if (this.data.dis24 == "yes10")
  a9 = 1;
if (this.data.dis25 == "yes10")
  a10 =1;
//抽楼层
  expr1 = a1.toString() + a2.toString() + a3.toString() + a4.toString() + a5.toString() + a6.toString() + a7.toString() + a8.toString() + a9.toString() + a10.toString();
  wx.setStorageSync("expr", expr1)
  console.log(expr1);
  var random = Math.ceil(Math.random() * 10);
  var det;
  var ans=a1+a2+a3+a4+a5+a6+a7+a8+a9+a10;
  var ran=random%ans+1;
  console.log(random)
  console.log(ran)
  
  if((a1==ran))
    det=1;
  else if((a1+a2)==ran)
  det=2;
  else if((a1+a2+a3)==ran)
  det=3;
  else if((a1+a2+a3+a4)==ran)
  det=4;
  else if ((a1 + a2 + a3 + a4+a5) == ran)
    det = 5;
  else if ((a1 + a2 + a3 + a4 + a5+a6) == ran)
    det = 6;
  else if ((a1 + a2 + a3 + a4 + a5 + a6+a7) == ran)
    det = 7;
  else if ((a1 + a2 + a3 + a4 + a5 + a6 + a7+a8) == ran)
    det = 8;
  else if ((a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8+a9) == ran)
    det = 9;
  else if ((a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9+a10) == ran)
    det = 10;



  //动画
   var animationr=wx.createAnimation({
    duration:1200,
    timingFunction:'ease',
    delay:0,
    transformOrigin:'50% 50% 0'
    })

   var animationa=wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 1200,
    transformOrigin: '50% 50% 0'
   })
  

   var animationb=wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 1200,
    transformOrigin: '50% 50% 0'
   })

   var animation1st1 = wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 3600,
    transformOrigin: '50% 50% 0'
   })
   var animation2nd1 = wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 3600,
    transformOrigin: '50% 50% 0'
   })
   var animation3rd1 = wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 3600,
    transformOrigin: '50% 50% 0'
   })
   var animation4th1 = wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 3600,
    transformOrigin: '50% 50% 0'
   })
   var animation5th1 = wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 3600,
    transformOrigin: '50% 50% 0'
   })
   var animation1st2 = wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 3600,
    transformOrigin: '50% 50% 0'
   })
   var animation2nd2 = wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 3600,
    transformOrigin: '50% 50% 0'
   })
   var animation3rd2 = wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 3600,
    transformOrigin: '50% 50% 0'
   })
   var animation4th2 = wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 3600,
    transformOrigin: '50% 50% 0'
   })
   var animation5th2 = wx.createAnimation({
    duration: 1200,
    timingFunction: 'ease',
    delay: 3600,
    transformOrigin: '50% 50% 0'
   })

animationr.rotate(360).step()


if((det==1)||(det==2)||(det==3)||(det==4)||(det==5)){
  animationa.rotate(360).step({});
  animationa.translate(-60*shuzi,220).step();
  if (det == 1){
    animation1st1.translate(510 * shuzi, 185).step();//学1
  } else if (det == 2){
    animation2nd1.translate(360 * shuzi, 185).step();//学2
  } else if (det == 3) {
    animation3rd1.translate(210 * shuzi, 185).step();//学3
  } else if (det == 4) {
    animation4th1.translate(60 * shuzi, 185).step();//学4
  } else if (det == 5) {
    animation5th1.translate(-90 * shuzi, 185).step();//学5
  }
} else if ((det == 6) || (det == 7) || (det == 8) || (det == 9) || (det == 10)) {
  animationb.rotate(360).step();
  animationb.translate(-60*shuzi,140).step();//
  if (det == 6){
    animation1st2.translate(510 * shuzi, 105).step();//教1
  } else if (det == 7){
    animation2nd2.translate(360 * shuzi, 105).step();//教2
  } else if (det == 8) {
    animation3rd2.translate(210 * shuzi, 105).step();//教3
  } else if (det == 9) {
    animation4th2.translate(60 * shuzi, 105).step();//教4
  } else if (det == 10) {
    animation5th2.translate(-90 * shuzi, 105).step();//教5
  }
}


this.setData({
 randomData:random,
 animationData1:animationr.export(),
 animationData2: animationa.export(),
 animationData3: animationb.export(),//楼

 animationData11:animation1st1.export(),
 animationData21:animation2nd1.export(),
 animationData31:animation3rd1.export(),
 animationData41:animation4th1.export(),
 animationData51:animation5th1.export(),//学生食堂

 animationData12: animation1st2.export(),
 animationData22: animation2nd2.export(),
 animationData32: animation3rd2.export(),
 animationData42: animation4th2.export(),
 animationData52: animation5th2.export(),//教工餐厅
})
},
redivine:function(){
  var random=this.randomData;
  wx.showModal({
    title: '(￢︿̫̿￢☆)',
    content: '哼！臭 男/女 人，既然心里有了那个它，干嘛还要来占卜',
    cancelText: '要你寡',
    cancelColor: '#DC143C',
    confirmText: '我错了',
    confirmColor: '#3CB371',
    complete: function (res) {
      if (res.cancel == true) {
        wx.showModal({
          title: ' <(｀^′)>',
          content: '不寡就不寡，爱咋滴咋滴，口亨',
          cancelText: 'GKD!',
          cancelColor: '#DC143C',
          confirmText: 'GKD!',
          confirmColor: '#3CB371',
          complete:function(res){
            if((res.cancel==true)|(res.cancel==false)){
             wx.redirectTo({
               url: '/pages/choose/choose',
             })
             
             
            }
          }
        })

      }
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var shuzhi=wx.getSystemInfoSync().windowWidth/750;
   console.log(shuzhi)
   this.setData({
     shuzhi:shuzhi,
   })
   


  },
  history:function(){
    this.setData({
      expr: wx.getStorageSync("expr")
    })
    var expr2 = parseInt( wx.getStorageSync("expr"));
    if ((expr2 % 10000000000 - expr2 % 1000000000) / 1000000000==0)
      this.setData({
        dis11:"no10"
     })
    if((expr2 % 1000000000 - expr2 % 100000000) / 100000000 == 0)
    this.setData({
      dis12: "no10"
    })
    if ((expr2 % 100000000 - expr2 % 10000000) / 10000000 == 0)
      this.setData({
        dis13: "no10"
      })
    if ((expr2 % 10000000 - expr2 % 1000000) / 1000000 == 0)
      this.setData({
        dis14: "no10"
      })
    if ((expr2 % 1000000 - expr2 % 100000) / 100000 == 0)
      this.setData({
        dis15: "no10"
      })
    if ((expr2 % 100000 - expr2 % 10000) / 10000 == 0)
      this.setData({
        dis21: "no10"
      })
    if ((expr2 % 10000 - expr2 % 1000) / 1000 == 0)
      this.setData({
        dis22: "no10"
      })
    if ((expr2 % 1000 - expr2 % 100) / 100 == 0)
      this.setData({
        dis23: "no10"
      })
    if ((expr2 % 100 - expr2 % 10) / 10 == 0)
      this.setData({
        dis24: "no10"
      })
    if ((expr2 % 10 - expr2 % 1) / 1 == 0)
      this.setData({
        dis25: "no10"
      })

    
      
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

})