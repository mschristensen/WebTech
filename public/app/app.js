'use strict';

// The root application module for this app
var app = angular.module('app', ['ui.router', 'map', 'trips', 'modals', 'ngContextMenu']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("map", {
      url:"/",
      views: {
        '': { templateUrl:"/app/components/map/map.view.html" }
      }
    })
    .state("trips", {
      url:"/trips",
      views: {
        '': { templateUrl:"/app/components/trips/trips.view.html" }
      }
    })
    .state("friends", {
      url:"/friends",
      views: {
        '': { templateUrl:"/app/components/friends/friends.view.html" }
      }
    });
  $urlRouterProvider.otherwise("/");
});

app.controller('appController', ['$rootScope', '$scope', function($rootScope, $scope) {
  $scope.isSidePanelOpen = false;

  $scope.toggleSidePanelOpen = function() {
    $scope.isSidePanelOpen = !$scope.isSidePanelOpen;
  }

  $rootScope.defaultTripColours = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#1abc9c', '#34495e', '#e67e22', '#f1c40f'];
}]);

app.value('mapApiKey', 'AIzaSyCP5BKla9RY0aObtlovjVzIBV2XEsfYj48');
