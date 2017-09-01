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
    channel: []
  },
  onShareAppMessage: function () {
    return {
      title: 'NideShop',
      desc: '企业模版1',
      path: '/pages/index/index'
    }
  },

  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl).then(function (res) {
      console.log('返回的数据：', res);
      if (res.errno === 0) {
        that.setData({
          newGoods: res.data.cases,
          hotGoods: res.data.hotGoodsList,
          topics: res.data.topicList,
          brand: res.data.cases,
          floorGoods: res.data.categoryList,
          slides: res.data.slides,
          channel: res.data.channel
        });
      }
    });
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
