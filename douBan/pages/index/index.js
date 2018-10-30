const app = getApp();
const doubanUrl = app.globalData.doubanUrl;
Page({
  onLoad(){
    var url = doubanUrl + 'in_theaters';
    wx.request({
      url: url,
      header: {'content-type':'json'},
      success: (res)=>{
        // console.log(res.data);
        var banner = res.data.subjects[0].images.small;
        // console.log(banner);
        this.setData({
          banner
        })
      }
    });
    // console.log(doubanUrl);
  },
  onClick(e){
    var type = e.currentTarget.dataset.type;
    // console.log(type); 
    wx.navigateTo({
      url: '/pages/movie/movie-list/movie-list?type='+type
    });
  }
})