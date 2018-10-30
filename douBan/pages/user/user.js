// pages/user/user.js
Page({
  data:{
    isEmpty: true,
    imgUrl: null,
    value: ""
  },
  onLoad(){
    if(wx.getStorageSync("logo")){
      var imgUrl = wx.getStorageSync("logo")[0];
      this.setData({
        isEmpty: false,
        imgUrl
      })
    }
    if(wx.getStorageSync("value")){
      var value = wx.getStorageSync("value")[0];
      this.setData({
        value
      });

    }
    
  },
  c_click(){
    wx.chooseImage({
      count: 9,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success: (result)=>{
        var tempFilePaths = result.tempFilePaths;
        this.setData({
          imgUrl: tempFilePaths,
          isEmpty: false
        });
        wx.setStorageSync("logo", tempFilePaths);
      }
    });
  },
  onBlur(e){
    var value = e.detail.value;
    wx.setStorageSync("value", value);
  }
})