var util = require('./utils/util.js');
var api = require('./config/api.js');
var user = require('./services/user.js');

App({
  onLaunch: function () { // 小程序登录事件
    //获取用户的登录信息
    user.checkLogin().then(res => {
      console.log('app login')
      this.globalData.userInfo = wx.getStorageSync('userInfo');
      this.globalData.token = wx.getStorageSync('token');
    }).catch(() => {
      // 【失败】的处理事件
    });
    const infoData = wx.getStorageSync('infoData');
    console.warn('是否初始化？', infoData);
    if (!infoData.title) {
      console.warn('需要初始化');
      util.request(api.IndexUrl).then(function (res) {
        console.log('返回的数据：', res);
        if (res.errno === 0) {
          // 全部数据
          wx.setStorage({
            key: "infoData",
            data: res.data,
          });
        }
      });
    }
  },
  
  globalData: {
    userInfo: {
      nickname: 'Hi,游客',
      username: '点击去登录',
      avatar: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    token: '',
  }
})