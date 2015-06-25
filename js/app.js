var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.controller('NavCtrl', ['$scope', function ($scope) {
	
    $scope.rubriques = [
    	{
			"label": "home",
			"url": "#home"
    	},
    	{
    		"label": "about",
    		"url": "#about"
    	}
    ];

}]);

angularApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'pages/home.html'
      }).
      when('/about', {
        templateUrl: 'pages/about.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);