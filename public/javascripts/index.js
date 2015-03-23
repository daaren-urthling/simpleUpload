angular.module("app", [])
  .controller('UploadController', ['$scope', '$http', function ($scope, $http) {

    $scope.fileName = "";

    $scope.fileChanged = function(element) {
      $scope.fileName = element.files[0].name;
    };

    $scope.query = function(){
      $http.get('/manageFile/').
        success(function(data, status, headers, config) {
          $scope.fileNames = data;
          console.log(data);
        }).
        error(function(data, status, headers, config) {
          console.log(status);
        });
    };
    $scope.fileNames =   $scope.query();

    $scope.save = function(){
      if (!$scope.newFileName || $scope.newFileName.lenght < 1) return;
      console.log("save " + $scope.newFileName);

      $http.post('/manageFile', {name: $scope.newFileName, content: $scope.fileContent }).
        success(function(data, status, headers, config) {
          console.log(data);
        }).
        error(function(data, status, headers, config) {
          console.log("something wrong there");
          console.log(data, status);
        });
    };

    $scope.download = function(){
      if (!$scope.fileName || $scope.fileName.lenght < 1) return;

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
