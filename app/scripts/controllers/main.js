'use strict';

/**
 * @ngdoc function
 * @name titleSuggesterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the titleSuggesterApp
 */
angular.module('titleSuggesterApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.headline = '';


    $scope.twitter = 
    function(){
    	return $scope.headline;
    };

    $scope.facebook = 
    function(){
    	return $scope.headline;
    };

    $scope.keywordsList = function(){
    	var keys = $scope.headline.split(' ');
    	keys = keys.filter(function(e){
    		return e.length > 2;
    	});
    	return keys;
    };

    $scope.hasKeywords = function(varName){
    	console.log($scope.keywords);
    	return true;
    };

    $scope.changeHeadline = function(){

    	$scope.url = $scope.headline.split(' ').join('-');

    };


  });
