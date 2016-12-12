myApp.directive("loading",function(){
    return {
        restrict:"AE",
        template:"<div class='back-layer'><img src='images/code.png'/></div>",
        replace:true,
        link:function(scope,ele,attr){
            var top=$(window).height()/2;
            var left=$(window).width()/2;
            $(".back-layer").css({
                position:"absolute",
                top:top+"px",
                left:left+"px"
            });
        }
    }
});
