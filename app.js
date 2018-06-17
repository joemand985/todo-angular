// ---MODEL
var app = angular.module("list", ["ngRoute"])

// ---CONTROLLER
app.controller("myCtrl", function($scope, $http){
	//$scope.ar = list;

	$http.get("https://jsonplaceholder.typicode.com/todos")
    .then(function(response) {
        $scope.ar = response.data;
    });

	$scope.details = function(task){
		$scope.selected = task;
		console.log(task)
	}
	// $scope.update = function(task){
	// 	$scope.ar[$scope.selected.id] = $scope.selected;
	// 	console.log($scope.selected)
	// }
	// $scope.user = function(user){
	// 	console.log(user.userId)
	// }
	$scope.done = function(user){
		$scope.ar[$scope.selected.id-1].completed = true;
		console.log($scope.ar[$scope.selected.id].completed)
	}
}) 




// ---ROUTING
// app.config(function($routeProvider) {
//   $routeProvider
//   .when("/", {
//     templateUrl : "main.htm"
//   })
//   .when("/login", {
//     template : "login.htm",
//     controller: "loginCtrl"
//   })
//   .when("/user", {
//   	template : "myprofile.htm"
//   })
// });





// MOCK


// var list = [
// {
// userId: 1,
// id: 1,
// title: "delectus aut autem",
// completed: false
// },
// {
// userId: 1,
// id: 2,
// title: "quis ut nam facilis et officia qui",
// completed: false
// },
// {
// userId: 1,
// id: 3,
// title: "fugiat veniam minus",
// completed: false
// },
// {
// userId: 1,
// id: 4,
// title: "et porro tempora",
// completed: true
// },
// {
// userId: 2,
// id: 5,
// title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
// completed: false
// }
// ];

