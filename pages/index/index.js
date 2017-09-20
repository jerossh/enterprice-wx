const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
  data: {
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    floorGoods: [],
    slides: [],
    channel: [],
    caseTile: ''
  },
  onShareAppMessage: function () {
    return {
      title: '神谷企业模版',
      desc: '企业模版1',
      path: '/pages/index/index'
    }
  },

  getIndexData: function () {
    let that = this;
    // if (wx.getStorageSync('infoData')) {
      
    // }
    const infoData = wx.getStorageSync('infoData');
    // infoData.channel[0].url = ''

    console.warn('首页载入');
    this.setData({
      topics: infoData.blogs,
      brand: infoData.cases.slice(0, 6),
      slides: infoData.slides,
      channel: infoData.channel,
      caseTile: infoData.siteInfo.caseTitle
    });
    // util.request(api.IndexUrl).then(function (res) {
    //   console.log('返回的数据：', res);
    //   if (res.errno === 0) {
    //     that.setData({
    //       topics: res.data.blogs,
    //       // hotGoods: res.data.hotGoodsList,
    //       // topics: res.data.topicList,
    //       brand: res.data.cases.slice(0, 6),
    //       // floorGoods: res.data.categoryList,
    //       slides: res.data.slides,
    //       channel: res.data.channel,
    //       caseTile: res.data.siteInfo.caseTitle
    //     });
    //   }
    // });
  },
  onLoad: function (options) {
    this.getIndexData();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
})
