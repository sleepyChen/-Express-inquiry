//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        if(res.code){
          console.log(res.code);
          wx.setStorage({
            key: 'userID',
            data: res.code,
          });
          // wx.request({
          //   url: '',
          //   data:res.code,
          //   success:res=>{
          //     wx.setStorage({
          //       key: 'token',
          //       data: res.token,
          //     });
          //   }
          // });
        }// 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
  }
});