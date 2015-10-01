angular.module('user')
.controller('PizCartCtrl',PizCartCtrl);


function PizCartCtrl(serv){
  var vm = this;
  vm.details = serv.p2();
    console.log("Cart Details: ",vm.details);
      vm.total = serv.p3();
      console.log("Total: ",vm.total);
  
}