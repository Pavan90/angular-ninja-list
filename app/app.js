var ninja = angular.module('myApp',['ngRoute']);

ninja.config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/home', {
	templateUrl: 'views/home.html'
})
.when('/directory', {
	templateUrl: 'views/directory.html',
	controller: 'appCtrl'
}).otherwise({ redirectTo: '/home' })

}]);




ninja.controller('appCtrl', ['$scope', '$http',function ($scope,$http) {
	
$scope.removeNinja = function(n){

var removeninja = $scope.ninja.indexOf(n);
$scope.ninja.splice(removeninja,1)

};

$scope.addNinja = function(){

	$scope.ninja.push({
		name:$scope.newninja.name,
		belt:$scope.newninja.belt,
		rate:parseInt($scope.newninja.rate),
		available:true
	});
	$scope.newninja.name = '';
	$scope.newninja.belt = '';
	$scope.newninja.rate = '';
}

$http.get('data/data.json').success(function(data){

$scope.ninja = data;
});







console.log(angular.toJson($scope.ninja, true));
}]);

