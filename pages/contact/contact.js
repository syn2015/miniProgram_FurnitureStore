// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    postal: '',
    hotline: '',
    workday: '',
    email: ''
  },


  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    let _this = this;
    wx.request({
      url: 'http://localhost:3000/contact',
      method: 'get',
      success(res) {
        console.log(res);
        _this.setData({
          address: res.data.address,
          hotline: res.data.hotline,
          postal: res.data.postal,
          email: res.data.email,
          workday: res.data.workday

        })
      },
      fail(err) {
        console.log(err);
      }
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