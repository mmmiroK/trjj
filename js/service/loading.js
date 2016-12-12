myApp.config(function($httpProvider) {
    $httpProvider.interceptors.push('loadingInterceptor');
});

myApp.factory('loadingInterceptor', function($q) {

    return {
        request: function(config) {
            $(".back-layer").show();
            return config || $q.when(config);
        },
        response: function(response) {
            $(".back-layer").hide();
            return response || $q.when(response);
        },
        responseError: function(rejection) {
            $(".back-layer").hide();
            return $q.reject(rejection);
        }
    };
});


//备用加载指令相关
//angular.module('ajaxLoading', [])
//    .config(function($httpProvider) {
//        $httpProvider.interceptors.push('loadingInterceptor');
//    })
//
//    .directive('loading', function() {
//        return {
//            replace: true,
//            restrict: 'AE',
//            template:'<div class="back-layer"><div class="loading">'
//            +'<img src="images/729.GIF">'
//            +'</div></div>',
//            link: function($scope, $element, attrs) {
//                var top = $(window).height()/2 - 25;
//                var left = $(window).width()/2 - 25;
//                $('.loading').css({
//                    top: top,
//                    left: left
//                });
//                //$(tpl).appendTo('body');
//            }
//        };
//    })
//
//    .factory('loadingInterceptor', function($q, $rootScope) {
//
//        return {
//            request: function(config) {
//                $(".back-layer").show();
//                return config || $q.when(config);
//            },
//            response: function(response) {
//                $(".back-layer").hide();
//                return response || $q.when(response);
//            },
//            responseError: function(rejection) {
//                $(".back-layer").hide();
//                return $q.reject(rejection);
//            }
//        };
//    });
//
//});