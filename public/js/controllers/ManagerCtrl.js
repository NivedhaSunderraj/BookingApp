angular.module('ManagerCtrl', []).controller('ManagerController', function($scope, $http, $location, $timeout) {

	$scope.manSignin = function() {
		if($scope.credentials){
			$scope.credentials.type="manager";
				$http.post('/manLogin', $scope.credentials).then(function(response) {
					// If successful we assign the response to the global user model
					//$scope.authentication.user = response;

					// And redirect to the index page
					sessionStorage.setItem("cred",JSON.stringify(response.data));



					//$timeout(function(){
	                $location.path('/');
	            //}, 2000);

				},function(response) {
					$scope.error = response.data.message;
				});
			};
}

});
