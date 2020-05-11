// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['/images/home/01banner1.jpg', '/images/home/01banner2.jpg'],
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    // 默认选择
    num:0,
    background1: ['/images/home/03banner1.jpg', '/images/home/03banner2.jpg'],
    indicatorDots1: false,
    vertical1: false,
    autoplay1: true,
    interval1: 2000,
    duration1: 500,
    // 默认选择
    num1:0
  },
  swiperFn(e){
    this.setData({
      num:e.detail.current
    })
  },
  swiperFn1(e){
    this.setData({
      num1:e.detail.current
    })
  },
  // 返回顶部，e接收来自子组件的参数
  toTop(e){
    console.log(e);
   wx.pageScrollTo({
     scrollTop: 0
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