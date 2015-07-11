'use strict';

/**
 * @ngdoc overview
 * @name titleSuggesterApp
 * @description
 * # titleSuggesterApp
 *
 * Main module of the application.
 */
angular
  .module('titleSuggesterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name titleSuggesterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the titleSuggesterApp
 */
angular.module('titleSuggesterApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
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


  }]);

'use strict';

/**
 * @ngdoc function
 * @name titleSuggesterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the titleSuggesterApp
 */
angular.module('titleSuggesterApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('titleSuggesterApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"row\"> <div class=\"col-md-12\"> <p>Headline:</p> <input ng-model=\"headline\" ng-change=\"changeHeadline()\" class=\"form-control\"> </div> </div> <div class=\"row\"> <div class=\"col-md-12\"> <p>Url:</p> <input ng-model=\"url\" class=\"form-control\"> </div> </div> <div class=\"row\"> <div class=\"col-md-12\"> <p>Keywords:</p> <ul> <li ng-repeat=\"h in keywordsList() track by $index\"> <input type=\"checkbox\" ng-model=\"keywords\">{{h}}</li> </ul> </div> </div> {{keywords}} <hr> <div class=\"row\"> <div class=\"col-md-12\"> <div class=\"jumbotron\"> <p class=\"small\">Preview Twitter</p> <textarea class=\"form-control\">{{twitter()}}</textarea> <hr> <p>Health:</p> <ul> <li>Length: <span class=\"label\" ng-class=\"{'label-danger':twitter().length > 140, 'label-success': twitter().length <= 140, }\">{{twitter().length}}</span></li> <li>Keywords: <span ng-show=\"hasKeywords('twitter')\" class=\"label label-success\">yes</span><span ng-hide=\"hasKeywords('twitter')\" class=\"label label-danger\">no</span></li> </ul> </div> </div> </div> <div class=\"row\"> <div class=\"col-md-12\"> <div class=\"jumbotron\"> <p class=\"small\">Preview Facebook</p> <textarea class=\"form-control\">{{facebook()}}</textarea> <hr> <p>Health:</p> <ul> <li>Length: <span class=\"label\" ng-class=\"{'label-danger':facebook().length > 140, 'label-success': facebook().length <= 140, }\">{{facebook().length}}</span></li> <li>Keywords: <span ng-show=\"hasKeywords('facebook')\" class=\"label label-success\">yes</span><span ng-hide=\"hasKeywords('facebook')\" class=\"label label-danger\">no</span></li> </ul> </div> </div> </div>"
  );

}]);
