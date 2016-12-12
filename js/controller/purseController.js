myApp.controller("purse", function ($scope,info,moneydata) {
    $(".navStyle").eq(0).addClass("navColor").siblings().removeClass("navColor");
    var isShowMoney=true;
    info.datainfo("http://iwen.wiki/zhichenshop/purseData.php")
        .success(function (data) {
            viewAdapter(data);
             $scope.clickeye= function () {
                 if(isShowMoney){
                     viewAdapter(data);
                 }else{
                    viewAdapterHide();
                 }
             }

        })
        .error(function (errordata) {

        });
    function viewAdapterHide(){
        $scope.money = "****";
        $scope.symoney = "****";
        $scope.djmoney = "****";
        isShowMoney = true;
    }

    function viewAdapter(data){
        moneydata.moneyarr.push(data.mymoney);
        $scope.username=data.username;
        $scope.money=data.mymoney;
        $scope.symoney=data.symoney;
        $scope.djmoney=data.djmoney;
        $scope.jls=data.dd;
        isShowMoney=false;
    }
    $scope.s1=true;
    $scope.s2=true;
    $scope.s3=true;
    $scope.s4=true;
    $scope.s5=true;
    $scope.s6=true;


    $scope.table=[
        {
            name:"miroK",
            age:25,
            hobby:["音乐","泡妞","自驾游"]
        },
        {
            name:"miro",
            age:120,
            hobby:["篮球","羽毛球","乒乓球"]
        }
    ]
});