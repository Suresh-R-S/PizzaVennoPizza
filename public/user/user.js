angular.module('user',['ngRoute','admin']);

angular.module('user')
	   .config(['$routeProvider',function ($routeProvider){
	   		$routeProvider.
          when('/', {
            templateUrl: 'user/p_details/piz_details.html',
            controller: 'piz_detailsCtrl',
            controllerAs: 'pCtrl'
       
          }).
          when('/cart', {
            templateUrl: 'user/cart/piz_cart.html',
            controller: 'piz_cartCtrl',
            controllerAs: 'cCtrl'
          }).
          when('/userdetails', {
            templateUrl: 'user/u_details/userdetails.html',
            controller:'userCtrl',
            controllerAs:'uCtrl'
          }).

          when('/:pName', {
            templateUrl: 'user/page/piz_page.html',
            controller: 'piz_pageCtrl',
            controllerAs: 'ppCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
	   }]);

