// pages/tracking/index.js

let _this;

Page({
  data: {
    note: '',
    border: '1px solid #000',
    arr: [],
    picWidth: '37rpx',
    picHeight: '41rpx',
    threadHeight: '600rpx',
    subleft: '8rpx',
    remarkTop: '0rpx',
    tabBgTop: '-21rpx',
    layerDisplay: "none",
    mainLayer: "none",
    tabBar_overflow: "hidden",
    subscribeImg: "../../images/Subscribe.png",
    threadHeight: '',
    tips: '',
    tipsBlock: 'none',
    over_hid: "",
    show: "none",
    noteValue: "",
    bool: true
  },

  back: function() {
    wx.navigateBack({
      delta: 2,
    })
  },
/*
  interval: function(ev) {
    _this.subs_wait();
    _this.setData({
      tips: 'chengg',
      tipsBlock: 'block',
    });
    setTimeout(function() {
      _this.setData({
        tipsBlock: 'none',
      });
    }, 2000);
  },
*/
  subs_sure: function() {
    wx.getStorage({
      key: 'userID',
      success: function(res) {
        let userID = res;
        wx.request({
          url: '',
          data: {
            userID: userID
          },
          success: res => {
            if (res.code == 10000) {
              _this.subs_wait();
              _this.setData({
                picWidth: '68rpx',
                picHeight: '75rpx',
                subleft: '-9rpx',
                remarkTop: '30rpx',
                tabBgTop: '10rpx',
                subscribeImg: '../../images/Subscribed.png',
                tabBar_overflow: 'default'
              });
              console.log(res.info);
            } else if (res.code == 1001) {
              cosole.log(res.info);
            }
          },
          fail: res => {
            console.log(res);
          }
        })
      },
    })

  },

  subs_wait: function() {
    _this.setData({
      layerDisplay: 'none',
      mainLayer: 'none',
      over_hid: "",
      show: "none"
    });
  },

  subscription: function() {
    let img = '../../images/Subscribed.png';

    if (_this.data.subscribeImg == img) {
      return false;
    }

    _this.setData({
      layerDisplay: 'block',
      over_hid: "over_hid",
      mainLayer: 'block'
    });

  },

  note: function() {
    _this.setData({
      over_hid: "over_hid",
      layerDisplay: "block",
      show: "block"
    });

  },

  /*
    note 备注内容，保存到数据库中，当返回到首页时可以看到备注的变化内容
    详细物流页面的备注重新清空
  */
  note_sure: function(ev) {
    console.log(ev.detail.value);
    var ev = ev.detail.value;
    if (ev) {
      wx.getStorage({
        key: 'userID',
        success: function(res) {
          console.log(res);
          let userID = res;
          wx.request({
            url: '',
            method: 'post',
            data: {
              note: ev,
              userID: userID,
            },
            success: res => {
              _this.note_wait();
              _this.setData({
                note: ev,
              });
            },
            fail: res => {
              console.log(res);
            },
          });
        },
      });
    }
  },

  note_wait: function() {
    _this.setData({
      over_hid: "",
      layerDisplay: "none",
      show: "none"
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    _this = this;

    /* 页面每次加载成功后将之前备注的内容清空 */
    _this.setData({
      note: '',
    });

    /* 创建节点选择器 */
    var query = wx.createSelectorQuery();
    query.select('.msg').boundingClientRect(function(rect) {
      console.log(rect.height);
      _this.setData({
        threadHeight: rect.height * 2 - 65 + 'rpx'
      })
    }).exec();
  },

})