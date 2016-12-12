myApp.directive("more",function(){
    return{
        restrict:"AEC",
        template:"<div class='dirdiv'><p>查看更多</p></div>",
        replace:true,
        link: function (scope, ele, attr) {
            console.log(scope);
            console.log(ele);
            console.log(attr);
        }
    }
});






