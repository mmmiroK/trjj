/**
 * Created by Administrator on 2016/7/21.
 */
myApp.directive("more",function(){
    return{
        restrict:"AEC",
        template:"<div class='dirdiv'><p>查看更多</p></div>",
        replace:true,
        link: function (scope, ele, attr) {
            console.log(scope);
            console.log(ele);
            console.log(attr);
            //ele.bind("click", function (e) {
            //    alert("哈哈逗你的");
            //})
        }
    }
});






