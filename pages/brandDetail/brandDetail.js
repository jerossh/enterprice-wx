  var util = require('../../utils/util.js');
var api = require('../../config/api.js');


var app = getApp();

Page({
  data: {
    id: 0,
    brand: {},
    goodsList: [],
    page: 1,
    size: 1000
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    that.setData({
      id: parseInt(options.id)
    });
    this.getBrand(options);
  },
  getBrand: function (opt) {
    let that = this;
    const item = wx.getStorageSync('infoData').cases.filter((el) => {
      if (el._id == opt.id) {
        return true;
      } else {
        return false;
      }
    })[0];
    this.setData({
      brand: item
    })
    console.warn(item);
    // util.request(api.BrandDetail, { id: that.data.id }).then(function (res) {
    //   if (res.errno === 0) {
    //     that.setData({
    //       brand: res.data.brand
    //     });

    //     that.getGoodsList();
    //   }
    // });
  },
  getGoodsList() {
    var that = this;

    util.request(api.GoodsList, { brandId: that.data.id, page: that.data.page, size: that.data.size})
      .then(function (res) {
        if (res.errno === 0) {
          that.setData({
            goodsList: res.data.goodsList
          });
        }
      });
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

  }
})