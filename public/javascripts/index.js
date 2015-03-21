angular.module("app", [])
  .controller('UploadController', ['$scope', '$http', function ($scope, $http) {

    $scope.fileName = "";

    $scope.fileChanged = function(element) {
      $scope.fileName = element.files[0].name;
    };

    $scope.save = function(){
      console.log("save " + $scope.newFileName);

      $http.post('/manageFile', {name: $scope.newFileName, content: $scope.fileContent }).
        success(function(data, status, headers, config) {
          console.log(data);
        }).
        error(function(data, status, headers, config) {
          console.log(status);
        });
    };

    $scope.download = function(){
      console.log("downloading " + $scope.fileName);
      $http.get('/manageFile/' + $scope.fileName).
        success(function(data, status, headers, config) {
          console.log(data);
          $scope.fileContent = data;
        }).
        error(function(data, status, headers, config) {
          console.log(status);
        });
    };

  }]);
