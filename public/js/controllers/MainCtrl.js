angular.module('MainCtrl', []).controller('MainController', function($rootScope, $scope, $http) {

  $http.get('/list')
    .then(function(response) {
      var creds;
      if (sessionStorage.getItem("cred")) {
        creds = angular.fromJson(sessionStorage.getItem("cred"));
      }
      //if(request.session){console.log(request.session.cred);}

      if (creds) {

        $rootScope.creds = creds;
      }
      $scope.tagline = response.data;
    });



});
