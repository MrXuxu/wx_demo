// pages/movie/movie-list/movie-list.js
import utils from '../../../utils/util';
const app = getApp();
const doubanUrl = app.globalData.doubanUrl;
const promise = utils.promise;
const handleData = utils.handleData;
Page({
  data: {
    movies: [],
    g_title: '',
    count: 20,
    url: ''
  },
  onLoad(options){
    var type = options.type;
    var url = doubanUrl + type;
    this.setData({
      url
    })
    wx.showLoading({
      title: '加载中'
    });
    promise(url).then(res=>{
      var movies = handleData(res);
      var g_title = res.data.title;
      this.setData({
        movies,
        g_title
      })
      wx.hideLoading();
    });
  },
  onReachBottom(){
    var url = this.data.url;
    var count = this.data.count;
    count += 20;
    this.setData({
      count
    })
    var new_url = `${url}?start=0&count=${count}`;
    wx.showLoading({
      title: '加载中'
    });
    // console.log(new_url);
    promise(new_url).then(res=>{
      var movies = handleData(res);
      this.setData({
        movies
      });
      wx.hideLoading();
    })
  }
});