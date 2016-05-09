var examControllers = angular.module('examControllers', []);

examControllers.controller('ExamListController', ['$scope', '$http', function($scope, $http) {
  var exams = JSON.parse(localStorage.getItem('exams'));
  $scope.exams = exams || [];

  $scope.submit = function() {
    $scope.exams.push($scope.exam);

    localStorage.setItem('exams', JSON.stringify($scope.exams));

    $scope.exam = {};
    $scope.flash = {
      'state': 'success',
      'message': 'Exam successfully created.'
    };
  };
}]);

examControllers.controller('ExamDetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  var exams = JSON.parse(localStorage.getItem('exams'));
  $scope.exams = exams || [];
  $scope.index = $routeParams.itemId;
}]);
