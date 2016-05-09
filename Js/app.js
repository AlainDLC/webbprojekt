var app = angular.module('onlineExamAdmin', [
  'ngRoute',
  'examControllers'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/exams', {
    templateUrl: 'partials/exams/list.html',
    controller: 'ExamListController'
  }).
  when('/exams/:itemId', {
    templateUrl: 'partials/exams/details.html',
    controller: 'ExamDetailsController'
  }).
  otherwise({redirectTo: '/exams'});
}]);
