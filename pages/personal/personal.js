var app = getApp()
Page({
    data: {
        userInfo:{}
    },
    clear_storage:function(){
    	   wx.clearStorage()
    	   wx.reLaunch({
  		        url: '/pages/index/index'
	       })
    },
    onLoad: function() {
        var that = this
        app.getUserInfo(function(userInfo){
            that.setData({
                userInfo:userInfo
            }) 
        })
    }
})
