angular.module('LogoutCtrl', []).controller('LogoutController', function($rootScope, $scope, $http, $location, $timeout,Logout) {

	successFunction = function(data){

			sessionStorage.removeItem("cred");
	    $rootScope.creds = undefined;
	    $location.path('/');
	}

	failureFunction = function(data){
			 console.log('Error' + data);
	}
	Logout.logout(successFunction,failureFunction);



});
