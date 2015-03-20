angular.module("app", [])
  .controller('UploadController', ['$scope', '$http', function ($scope, $http) {

    $scope.fileName = "";

    $scope.fileChanged = function(element) {
      $scope.fileName = element.files[0].name;
    };

    $scope.save = function(){
    console.log("save " + $scope.fileName + $scope.description);

    // Simple POST request example (passing data) :
    $http.post('/uploadFile', {name: $scope.fileName}).
      success(function(data, status, headers, config) {
        console.log(data);
        $scope.fileContent = data;
      }).
      error(function(data, status, headers, config) {
        console.log(status);
      });
    };

  }]);
