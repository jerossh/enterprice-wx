var util = require('./utils/util.js');
var api = require('./config/api.js');
var user = require('./services/user.js');
// const regeneratorRuntime = require('./runtime.js')

App({
  onLaunch: function (options) { // 小程序登录事件
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
        console.warn('返回的数据：', res);
        if (res.errno === 0) {
          // 全部数据
          wx.setStorage({
            key: "infoData",
            data: res.data,
          });
          console.warn('写入缓存');

          // 如果在此之前页面已经生成，则重新执行该页面的 onLoad 事件
          if (getCurrentPages().length != 0) {
            getCurrentPages()[getCurrentPages().length - 1].onLoad();
          }
          console.warn('写入完成');
        }
      });
      wx.request({
        url: 'https://kapuw.net/api/index?id=599154358d84777f3102dff3',
        success: function (res) {
          console.warn('返回的数据',res.data)
        }
      })
    } else {
      console.warn('不需要初始化');
    }
  },

  onShow: function (options) {
    
  },
  onError: function (msg) {
    console.warn('发生错误了', msg);
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