// components/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick(e){
      var id = e.currentTarget.dataset.id; 
      wx.navigateTo({
        url: '/pages/movie/movie-detail/movie-detail?id='+id
      })
    }
  }
})
