// Code goes here

(function(){
	var app = angular.module('app', ['ngRoute']).config(config);
	
	//app.config(config);
	console.log("inside routes1")

	function config($routeProvider)
	{
		console.log("inside routes2")
		$routeProvider.when('/', {
			controller: 'controller1',
			templateUrl: 'index.html'
		})
		.otherwise({
			redirectTo: '/'
		})

	}
})();