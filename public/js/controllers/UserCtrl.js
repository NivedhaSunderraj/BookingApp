angular.module('UserCtrl', []).controller('UserController', function($scope, $http, $location,$timeout) {

	$scope.manSignin = function() {
		if($scope.credentials){
			$scope.credentials.type="user";
				$http.post('/manLogin', $scope.credentials).then(function(response) {
					// If successful we assign the response to the global user model
					//$scope.authentication.user = response;
					sessionStorage.setItem("cred",JSON.stringify(response.data));
					// And redirect to the index page
					//$timeout(function(){
							 $location.path('/');
					//}, 2000);
				},function(response) {
					$scope.error = response.data.message;
				});
			};
	}

	/*successFunction = function(data){
	    $scope.tagline =data;
	    console.log(data);
	}

	failureFunction = function(data){
	     console.log('Error' + data);
	}
	Nerd.getDatabase(successFunction,failureFunction);*/


	/*$http.get('/get').success(function(data) {
				 for (var i = 0; i < data.length; i++) {
					 data[i].index = i;
				 }
				 $scope.items = data;
			 });*/

});
