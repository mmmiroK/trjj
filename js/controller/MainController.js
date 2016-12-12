/**
 * Created by Administrator on 2016/7/21.
 */
myApp.controller("MainCtrl", function ($scope) {
    $scope.purse="我的钱包";
    $scope.safety="安全中心";
    $scope.select="交易查询";
});

myApp.controller("s1",function($scope,aaaa,bbbb){
    console.log(aaaa.aaa);
    console.log(bbbb.name)
});
myApp.controller("s2",function($scope,aaaa,bbbb){
    console.log(aaaa.aaa);
    console.log(bbbb[2])
});