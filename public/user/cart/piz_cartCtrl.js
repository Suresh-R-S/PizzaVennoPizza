angular.module('user')
.controller('piz_cartCtrl',piz_cartCtrl);


function piz_cartCtrl(serv){
	var vm = this;
	vm.details = serv.p2();
	console.log("Cart Details: ",vm.details);
    vm.total = serv.p3();
    console.log("Total: ",vm.total);
}