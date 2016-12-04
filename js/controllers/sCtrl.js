/**
 * Created by miroK on 2016/9/29.
 */
app.controller('sCtrl',['$scope',function(scope){
    $('.header-wrap ul li:eq(2) a').addClass('on');
    $('.header-wrap ul li:eq(1) a').removeClass('on');
    $('.header-wrap ul li:eq(0) a').removeClass('on');
    scope.identity='18763675301';
}]);