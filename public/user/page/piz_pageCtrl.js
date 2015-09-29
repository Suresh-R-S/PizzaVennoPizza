angular.module('user')
.controller('piz_pageCtrl',piz_pageCtrl);

function piz_pageCtrl($routeParams,$http,serv,piz_detailsServ){
        var vm = this;
        vm.name = $routeParams.pName;
        vm.details = piz_detailsServ.getDetails();
        vm.details.success(function(data) {
          vm.pizzadetail = data.filter(function(entry){
            return entry.p_name === vm.name;
          })[0];

          vm.test = function() {
          var obj = {};

           obj.p_name = vm.pizzadetail.p_name;
           obj.rate = vm.pizzadetail.rate;
           obj.qty = vm.obj.qty;
           obj.cost = obj.rate * obj.qty;
           //console.log("name: ",obj.p_name);
           //console.log("rate: ",obj.rate);
           //console.log("qty: ",vm.obj.qty);
            serv.p1(obj);
            console.log("P2:",serv.p2());
          };

        });
}