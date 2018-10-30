// function http(url, callback){
//   wx.request({
//     url: url,
//     header: {'content-type':'json'},
//     success: res=>{
//       callback(res);
//     }
//   });
// }

function promise(url){
  return new Promise((resolve, reject)=>{
    wx.request({
      url: url,
      header: {'content-type':'json'},
      success: res=>{
        resolve(res);
      },
      fail: (err)=>{
        reject(err);
      }
    });
  });
}


function handleData(res){
  // var g_title = res.data.title;
  var subjects = res.data.subjects;
  var movies = [];
  subjects.forEach(element => {
    var id = element.id;
    var title = element.title;
    var image = element.images.small;
    var year = element.year;
    var director = element.directors[0].name;
    var average = rating(element.rating.average);
    var temp = { id, title, image, year, director, average, average };
    movies.push(temp);
  });

  return movies;
  // console.log(movies);
}
function rating(average){
  if(average==0){
    return "暂无";
  }else{
    return average;
  }
}

function handleDetail(res){
  var title = res.data.title;
  var image = res.data.images.small;
  var year = res.data.year;
  var average = rating(res.data.rating.average);
  var director = res.data.directors[0].name;
  var casts = res.data.casts;
  var casts_name = [];
  casts.forEach(element=>{
    casts_name.push(element.name);
  });
  var summary = res.data.summary;
  var movie = { title, image, year, average, director, casts_name, summary };
  return movie;
  // return title;
}
export default {
  // http,
  promise,
  handleData,
  handleDetail
}