angular.module('LogoutService', []).factory('Logout', ['$http', function($http, $routeParams) {

  return {

    /*registerManager: function( onSuccess,  onFailure){

      var database = {};
      //$http.post('/someUrl', data, config).then(successCallback, errorCallback);


    }*/
		logout : function(onSuccess,onFailure){
			  $http.get('/logoutUser').then(onSuccess,onFailure);
		}
  };

}]);
