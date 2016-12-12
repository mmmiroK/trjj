app.controller('myCtrl', ['$scope', function (scope) {
    scope.identity = '372924199111060636';
    scope.city = {
        province: ['山东', '广东', '河南'],
        city: [['济南', '青岛', '菏泽'], ['广州', '肇庆', '珠江'], ['郑州', '驻马店', '安阳']]
    };
    $.each(scope.city.province, function (i) {
        $('.link1').append('<option value=' + (i + 1) + '>' + this + '</option>');
        $('.link1').change(function () {
            $('.link2').empty().append('<option value="0">' + "请选择城市" + '</option>');
            $.each(scope.city.city[($(this).val() - 1)], function (j) {
                $('.link2').append('<option value=' + (i + 1) + '>' + this + '</option>')
            })
        });
    });

}]);
