angular.module('ManagerRegisterCtrl', []).controller('ManagerRegisterController', function($scope, $http, $location,$timeout,ManagerRegister) {

	/*successFunction = function(data){
	    console.log(data);
	}

	failureFunction = function(data){
	     console.log('Error' + data);
	}
	ManagerRegister.registerManager(successFunction,failureFunction);*/
  $scope.manSignup = function() {
    if($scope.credentials){
        $scope.credentials.type = "manager";
  			$http.post('/manRegister', $scope.credentials).then(function(response) {
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

});
