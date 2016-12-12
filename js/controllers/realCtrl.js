app.controller('realCtrl',['$scope','moneyService',function(scope,moneyService){
    console.log(localStorage.getItem('iddd'));
    scope.all=localStorage.getItem('all');
    $('.red').css('color', '#FF4431');

    $('#realnum').blur(function(){
        $('#tipFee').val($(this).val() *.02);
        $('#realarrived').val($(this).val() *.98);
    });

    $('#txtx').click(function(){
        console.log(localStorage.getItem('iddd'));
        $.ajax({
            url:'http://localhost/9-29/trjj/real.php',
            type:'post',
            dataType:'json',
            data:{
                realNum:$('#realnum').val(),
                tipFee:$('#tipFee').val(),
                password:$('#realpassword').val(),
                incount:$('#realarrived').val(),
                id:localStorage.getItem('iddd')
            },
            success:function(data){
                if(data=="success"){
                    alert('提现成功');
                    localStorage.setItem('all',parseInt(localStorage.getItem('all'))-parseInt($('#realnum').val()));
                    localStorage.setItem('ready',parseInt(localStorage.getItem('ready'))-parseInt($('#realnum').val()));
                    window.history.go(-1);
                }
            },
            error:function(data){
                    console.log(data);
            }
        })
    })
}]);