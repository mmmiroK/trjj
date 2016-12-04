/**
 * Created by miroK on 2016/9/29.
 */
app.controller('pCtrl', ['$scope', 'moneyService', function (scope, moneyService) {
    $('.header-wrap ul li:eq(0) a').addClass('on');
    $('.header-wrap ul li:eq(1) a').removeClass('on');
    $('.header-wrap ul li:eq(2) a').removeClass('on');

    if (localStorage.getItem('all') && localStorage.getItem('ready') && localStorage.getItem('real') && localStorage.getItem('name') && JSON.parse(localStorage.getItem('data'))) {
        scope.all = localStorage.getItem('all');
        scope.ready = localStorage.getItem('ready');
        scope.real = localStorage.getItem('real');
        scope.uname=localStorage.getItem('name');
        scope.datas = JSON.parse(localStorage.getItem('data'));
    }

    function adaptView(data) {
        $('.red').css('color', '#FF4431');
        $.each(data[1], function (i) {
            $('.tradeTrace ul').append('<li><span>' + this.tradeTime + '</span><span>' + this.tradeName + '</span><span>' + this.tradeNumber + '</span><span>' + this.tradeMoney + '</span><span>' + this.tradeStatus + '</span></li>')
        });

        $.each($(".tradeTrace ul li:not('.fst')"), function (i) {
            $(this).children('span').eq(3).html($(this).children('span').eq(3).html() > 0 ? ('+' + $(this).children('span').eq(3).html()) : $(this).children('span').eq(3).html());
            $(this).children('span').eq(3).css('color', $(this).children('span').eq(3).html() > 0 ? 'green' : 'orange');
            $(this).children('span').eq(4).css('color', $.trim($(this).children('span').eq(4).html()) == "失败" ? 'red' : '');
        });
    }

    adaptView(scope.datas);
}]);