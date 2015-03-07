'use strict';

angular.module('cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])

.controller('CartCtrl', ['$scope',function($scope) {
    $scope.shopData = [
		{'item':'Hard Disk','id':'HD','selected':0,'prices':[{'size':'200GB','price':'2000'},{'size':'400GB','price':'4000'}]},
		{'item':'CPU','id':'CPU','selected':0,'prices':[{'size':'i3','price':'20000'},{'size':'i5','price':'25000'}]},
		{'item':'Monitor','id':'MON','selected':0,'prices':[{'size':'16\'','price':'3000'},{'size':'19\'','price':'5000'}]},
		{'item':'Optical Mouse','id':'MOU','selected':0,'prices':[{'size':'Optical','price':'350'},{'size':'Advanced','price':'550'}]},
		{'item':'RAM','id':'RM','selected':0,'prices':[{'size':'4GB','price':'4000'},{'size':'8GB','price':'8000'}]},
		{'item':'USB Keyboard','id':'KEY','selected':0,'prices':[{'size':'Standard','price':'2500'},{'size':'Advanced','price':'4500'}]}
	];

$scope.total = function(){
      var t = 0;

      for(var k in $scope.shopData){
        t += parseInt($scope.shopData[k].selected);
      }
      
      return t;

    }
}])
.directive('checkList', function() {
    return {
        restrict: 'E',
	scope: {
            option: '=',
	    name: '=',
	    selected: '=selected'
        },
        template: function(elem, attrs) {
            return '<div class="panel-body">\
                    <div class="radio" ng-repeat="i in option">\
                        <label><input type="radio" ng-model="$parent.selected" ng-value="{{i.price}}"  name="{{name}}">{{i.size}} Rs.{{i.price}}</label>\
                    </div>\
                </div>'
        }
    };
})
