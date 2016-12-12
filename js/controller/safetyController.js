/**
 * Created by Administrator on 2016/7/21.
 */
myApp.controller("safety", function ($scope,$interval) {
    $(".navStyle").eq(1).addClass("navColor").siblings().removeClass("navColor");
    $scope.paracont = "获取验证码";
    $scope.paraclass = "but_null";
    $scope.paraevent = true;
    var second = 60,
        timePromise = undefined;
    $scope.clicktime= function () {
        $interval(function(){
            if(second<=0){
                $interval.cancel(timePromise);
                timePromise = undefined;

                second = 60;
                $scope.paracont = "重发验证码";
                $scope.paraclass = "but_null";
                $scope.paraevent = true;
            }else{
                $scope.paracont = second + "秒后可重发";
                $scope.paraclass = "not but_null";
                second--;

            }
        },1000);

    }


});