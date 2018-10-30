import utils from '../../../utils/util';
const promise = utils.promise;
// const handleData = utils.handleData;
const handleDetail = utils.handleDetail;
const app = getApp();
const doubanUrl = app.globalData.doubanUrl;

Page({
  onLoad(options){
    var id = options.id;
    var url = doubanUrl + 'subject/' + id;
    console.log(url);
    promise(url).then(res=>{
      var movie = handleDetail(res);
      this.setData(movie);
      var casts_name = this.data.casts_name;
      casts_name = (casts_name.join(" "));
      this.setData({
        casts_name
      })
    });
  }
})