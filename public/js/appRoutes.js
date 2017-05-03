angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/users', {
			templateUrl: 'views/userLogin.html',
			controller: 'UserController'
		})

		.when('/userRegisteration', {
			templateUrl: 'views/userRegisteration.html',
			controller: 'UserRegisterController'
		})

		.when('/book', {
			templateUrl: 'views/book.html',
			controller: 'BookController'
		})


		.when('/manager', {
			templateUrl: 'views/managerLogin.html',
			controller: 'ManagerController'
		})

		.when('/managerRegister',{
			templateUrl: 'views/managerRegister.html',
			controller: 'ManagerRegisterController'
		})

		.when('/manage',{
			templateUrl: 'views/manage.html',
			controller: 'ManageController'
		})

		.when('/logout', {
			templateUrl: 'views/home.html',
			controller: 'LogoutController'
		});



	$locationProvider.html5Mode(true);

}]);
