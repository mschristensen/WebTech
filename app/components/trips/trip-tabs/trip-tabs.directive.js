'use strict';

// A directive for the side panel menu component.
// This directive has the parent's scope!
// TODO: the "selecting" methods below feel quite jQuery-esque.
// Angularify by binding ng-class to value on scope?
var trips = angular.module('trips');
trips.directive('tripTabs', function() {
  return {
      restrict: 'E',
      replace: 'true',
      templateUrl: '/app/components/trips/trip-tabs/trip-tabs.view.html',
      link: function(scope, elem, attrs) {
        // called when ng-repeat has finished
        scope.rendered = function() {
          elem.children('.trip-item').bind('click', function() {
            elem.children('.trip-item').removeClass('selected');
            $(this).addClass('selected');
          });
        };
      }
  };
});
