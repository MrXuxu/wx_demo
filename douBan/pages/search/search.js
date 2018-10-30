// pages/search/search.js
import utils from '../../utils/util';
const promise = utils.promise;
const handleData = utils.handleData;
const app = getApp();
const doubanUrl= app.globalData.doubanUrl;
Page({
  onConfirm(e){
    var search = e.detail.value;
    // console.log(search);
    var url = `${doubanUrl}search?q=${search}&count=3`;
    promise(url).then(res=>{
      var movies = handleData(res);
      // console.log(movies);
      this.setData({
        movies
      })
    })
  }
})