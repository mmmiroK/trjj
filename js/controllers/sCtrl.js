app.controller('sCtrl',['$scope','$interval',function(scope,interval){
    $('.header-wrap ul li:eq(2) a').addClass('on');
    $('.header-wrap ul li:eq(1) a').removeClass('on');
    $('.header-wrap ul li:eq(0) a').removeClass('on');
    scope.identity='18763675301';
    scope.paracont = "获取验证码";
    scope.paraclass = "but_null";
    scope.paraevent = true;
    var second = 60,
        timePromise = undefined;
    scope.clicktime= function () {
        interval(function(){
            if(second<=0){
                interval.cancel(timePromise);
                timePromise = undefined;

                second = 60;
                scope.paracont = "重发验证码";
                scope.paraclass = "but_null";
                scope.paraevent = true;
            }else{
                scope.paracont = second + "秒后可重发";
                scope.paraclass = "not but_null";
                second--;

            }
        },1000);

    }
}]);