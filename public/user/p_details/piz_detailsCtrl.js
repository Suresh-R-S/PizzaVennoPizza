 /*function pCtrl(piz_detailsServ){

    console.log("Inside pCtrl");
 	var details = piz_detailsServ.piz_detailsServ();
 }*/
/*angular
    .module('user')
	.controller('piz_detailsCtrl',['$http',function ($http){
		var vm = this;
         $http.get('/pizza').success(function (data) {
           vm.details = data;
           console.log("inside");
           console.log("details: ",vm.details);
         });
 }]);*/

function piz_detailsCtrl(piz_detailsServ){
	var vm = this;
	vm.details = piz_detailsServ.getDetails();
	vm.details.success(function (data) {
           vm.details = data;
           console.log("inside success");
           console.log("details: ",vm.details);
         });
	//console.log("Details controller: ",vm.details);
}
angular
    .module('user')
	.controller('piz_detailsCtrl',piz_detailsCtrl);
