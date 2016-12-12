var myApp=angular.module("myApp",["ngRoute"]);
myApp.constant("Routes",{
    purse:"/purse",
    select:"/select",
    safety:"/safety",
    payindex:"/payindex",
    outindex:"/outindex",
    paysuccess:"/paysuccess",
    bankindex:"/bankindex",
    orderindex:"/orderindex",
    qibangbi:"/qibangbi",
    tianrongbi:"/tianrongbi"
});
myApp.config(["$routeProvider","Routes", function ($routeProvider,Routes) {
    $routeProvider
        .when( Routes.purse,{
            templateUrl:"views/purse.html",
            controller:"purse"
        })
        .when( Routes.safety,{
            templateUrl:"views/safety.html",
            controller:"safety"
        })
        .when( Routes.select,{
            templateUrl:"views/select.html",
            controller:"select"
        })
        .when( Routes.payindex,{
            templateUrl:"views/payindex.html",
            controller:'payindex'
        })
        .when( Routes.outindex,{
            templateUrl:"views/outindex.html",
            controller:'outindex'
        })
        .when( Routes.paysuccess,{
            templateUrl:"views/paysuccess.html",
            controller:'paysuccess'
        })
        .when(Routes.bankindex,{
            templateUrl:"views/bankindex.html",
            controller:"bankindex"
        })
        .when(Routes.orderindex,{
            templateUrl:"views/orderindex.html",
            controller:"orderindex"
        })
        .when(Routes.qibangbi,{
            templateUrl:"views/qibangbi.html",
            controller:"qibangbi"
        })
        .when(Routes.tianrongbi,{
            templateUrl:"views/tianrongbi.html",
            controller:"tianrongbi"
        })
        .otherwise({
            redirectTo:Routes.purse
        })

}]);