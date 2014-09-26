'use strict';

/**
 * @ngdoc function
 * @name yeoman0App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeoman0App
 */
angular.module('yeoman0App')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Go through the tutorial.',
      'Make conclusions.',
      'Use the workflow in future projects.',
      'Profit'
    ];
  });
