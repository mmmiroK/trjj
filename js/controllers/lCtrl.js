app.controller('lCtrl', ['$scope', 'moneyService', function (scope, moneyService) {

    $('#submit').click(function () {
        $.ajax({
            url: 'http://localhost/9-29/trjj/money.php',
            dataType: "json",
            type: 'post',
            data: {
                name: $('#uname').val(),
                password: $('#pwd').val()
            },
            success: function (data) {
                moneyService.data[0]= data[0];
                moneyService.data[1]=data[1];
                localStorage.setItem('iddd',data[0].id);
                localStorage.setItem('all', data[0].totalm);
                localStorage.setItem('ready', data[0].readym);
                localStorage.setItem('real', data[0].realm);
                localStorage.setItem('data', JSON.stringify(data));
                localStorage.setItem('name', data[0].name);
                window.history.go(-1);
            }
        })
    })
}]);