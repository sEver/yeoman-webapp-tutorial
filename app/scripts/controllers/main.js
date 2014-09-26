'use strict';

/**
 * @ngdoc function
 * @name yeoman0App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeoman0App
 */
angular.module('yeoman0App')
  .controller('MainCtrl', function ($scope, localStorageService) {

    $scope.todos = [
      //'Go through the tutorial.',
      //'Make conclusions.',
      //'Use the workflow in future projects.',
      //'Profit'
    ];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index,1);
    };

  });
