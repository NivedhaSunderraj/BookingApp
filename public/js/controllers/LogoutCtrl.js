angular.module('LogoutCtrl', []).controller('LogoutController', function($rootScope, $scope, $http, $location, $timeout) {


  $http.get('/logoutUser').then(function(response) {
    //if(request.session){console.log(request.session.cred);}
    sessionStorage.removeItem("cred");
    $rootScope = $rootScope.$new(true);

    //$timeout(function(){
    $location.path('/');
    //}, 2000);


  });


});
