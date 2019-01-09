// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:'caicai',
      userinfo: {}
  },
  handleParent(){
    console.log('父元素');
  },

  handleChild(){
    console.log('子元素');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化 发送请求 定时器
    //获取用户登陆信息 老方法
    wx.getUserInfo({
      success:(data)=>{
        console.log(data);
        this.setData({
          userinfo: data.userInfo
        })
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