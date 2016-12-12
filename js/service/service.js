/**
 * Created by Administrator on 2016/7/21.
 */
myApp.factory("info", function ($http) {
    //bac=function(url){
    //    return $http({
    //            method:"get",
    //            url:url
    //        })
    //};
    return{
        datainfo: function (url) {
               return $http({
                   method:"get",
                   url:url
               })
        }
    }
});
/*
* 定义变量moneydata
* */
myApp.factory("moneydata",function(){
    return { moneyarr:[]}
});

//
myApp.service("aaaa",function(){
//    this.aaa="你好";
//});
//myApp.factory("bbbb",function(){
//    return [1,2,3];
//
});

