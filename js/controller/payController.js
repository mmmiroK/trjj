/*
* 注入moneydata
* */
myApp.controller("payindex", function ($scope,moneydata,$interval,$log) {
    console.log(moneydata.moneyarr);
    /*
    * 获取值
    * */
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

    };


    $scope.mobile = "";
    $scope.VerifyCode = "";
    $scope.getVerifyCode = function () {
        $log.info($scope.mobile);
        if($scope.mobile==""){
            $(".payindex_sc .payindex_alert").show();
            $scope.paraevent = true;
        }else if($scope.mobile!=="" ){
            $(".payindex_sc .payindex_alert").hide();
        }
    };

    $scope.imgclick= function () {
        $(".payindex_sc .payindex_alert").hide();
    }
});
