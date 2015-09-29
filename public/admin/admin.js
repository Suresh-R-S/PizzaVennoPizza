angular.module('admin',['ngRoute']);

angular.module('admin')
	   .config(function ($routeProvider) {
        $routeProvider.
        when('/adminlogin', {
            templateUrl: 'admin/adminlogin/adminlogin.html', 
            controller: 'adminloginCtrl',
            controllerAs: 'aCtrl'
          }).
       	when('/login', {
            templateUrl: 'admin/adminhome/adminhome.html', //aCtrl
            controller: 'adminhomeCtrl',
            controllerAs:'ahCtrl'
          }).
           /*when('/login/:Id', {
            templateUrl: 'admin/adminhome/adminhome.html', //dCtrl
            controller: 'adminhome_dCtrl',
            controllerAs: 'ah_dCtrl'
          }).*/
            when('/delivered', {
            templateUrl: 'admin/deliveredlist/delivered.html', //dlCtrl
            controller: 'deliveredCtrl',
            controllerAs:'dlCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      });

