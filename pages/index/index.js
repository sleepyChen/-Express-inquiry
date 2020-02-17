//index.js
//获取应用实例
const app = getApp()
let page;

Page({
  data: {
      ticket_id:'',
      array:[
        {
          LogistcCode: "12345678911",
          ShipperCode:"京东物流",
          AcceptStation: "订单已由本人签收，感谢京东快递物流公司",
          AcceptTime: "2018/11/02 10:45",
          state:"已签收",
          note:''
        },
        {
          LogistcCode: "12345678911",
          ShipperCode: "京东物流",
          AcceptStation: "订单已由本人签收，感谢京东快递物流公司",
          AcceptTime: "2018/11/02  10:45",
          state: "已签收",
          note: ''
        },
        {
          LogistcCode: "12345678911",
          ShipperCode: "京东物流",
          AcceptStation: "订单已由本人签收，感谢京东快递物流公司",
          AcceptTime: "2018/11/02  10:45",
          state: "已签收",
          note: '帽子'
        }
      ],
      flag:false
  },

/* 回车搜索触发事件 */ 
  enter:function(ev){
    console.log(ev.detail.value);
    var ev = ev || ev.detail.value;
    // wx.getStorage({
    //   key: 'userID',
    //   success: function(res) {
    //     if(res.data){
    //       let userID = res.data;
    //       wx.request({
    //         url: '',
    //         data: { userID,ev },
    //         success: res => {
    //           page.tracking();
    //         },
    //         fail: res => {
    //           console.log(res);
    //         }
    //       });
    //     }
    //   },
    // });
    
  },

  scan: function () {
    wx.scanCode({
      success:res=>{
        page.setData({
          ticket_id:res.result
        });
        page.enter(res.result);
      },
      fail(res) {
        console.log(res);
      }
    })
  },

  tracking: function () {
    wx.navigateTo({
      url: '../tracking/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    page=this;
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
