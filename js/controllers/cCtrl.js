/**
 * Created by miroK on 2016/9/29.
 */
app.controller('cCtrl',['$scope','moneyService',function(scope,moneyService){
    $('.header-wrap ul li:eq(1) a').addClass('on');
    $('.header-wrap ul li:eq(0) a').removeClass('on');
    $('.header-wrap ul li:eq(2) a').removeClass('on');

    $('#submittt').click(function(){
        $.ajax({
            type:'post',
            url:'http://localhost/9-29/trjj/tradeselece.php',
            dataType:'json',
            data:{
                tradeNumber:$('#ddnum').val(),
                tradeName:$('#jyname').val(),
                tradeStatus:$('#jystatus').val(),
                id: localStorage.getItem('iddd')
            },
            success:function(data){
                if(data.length>0){
                    $('.tradeTrace ul').empty();
                    $.each(data,function(){
                        $('.tradeTrace ul').append("<li><span>"+this.tradeTime+"</span><span>"+this.tradeName+"</span><span>"+this.tradeNumber+"</span><span>"+this.tradeMoney+"</span><span>"+this.tradeStatus+"</span></li>")
                    })
                }else{
                    alert('没有匹配的结果');
                }
            }
        })
    })

}]);