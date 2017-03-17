'use strict';

/**
 * @ngdoc function
 * @name myOrganicerTotalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myOrganicerTotalApp
 */
angular.module('myOrganicerTotalApp')
  .controller('MainCtrl', function () {
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
  }
  });
(function() {
  'use strict';

  angular.module('myOrganicerTotalApp')
      .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope) {
    $scope.currentNavItem = 'page1';
  }
})();