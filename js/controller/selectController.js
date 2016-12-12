myApp.controller("select", function ($scope, info) {
    $(".navStyle").eq(2).addClass("navColor").siblings().removeClass("navColor");
    info.datainfo("http://iwen.wiki/zhichenshop/purseData.php")
        .success(function (data) {
            $scope.hahah=data.mymoney;
            $scope.username = data.username;
            $scope.money = data.mymoney;
            $scope.symoney = data.symoney;
            $scope.djmoney = data.djmoney;
            $scope.jls = data.dd;
        })
        .error(function (errordata) {

        })
});