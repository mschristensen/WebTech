'use strict';

var modals = angular.module('modals');
modals.controller('addPhotosController', ['$scope', 'tripsFactory', 'Upload', '$state', function($scope, tripsFactory, Upload, $state) {
  $scope.files = [];
  $scope.progress = 0;
  $scope.uploading = false;
  $scope.uploadObj = {};

  $scope.setSelectedFiles = function (files) {
    $scope.files = files;
  }

  // Upload the selected files tagged by trip and place ids
  $scope.uploadFiles = function () {
    if ($scope.files && $scope.files.length) {
      $scope.uploading = true;
      $scope.uploadObj = Upload.upload({
        url: '/api/photos',
        data: {
          trip_id: tripsFactory.getSelectedTrip()._id,
          place_id: tripsFactory.getSelectedPlace()._id,
          photos: $scope.files
        }
      });
      $scope.uploadObj.then(success, error, progress);
    }
  }

  $scope.cancel = function() {
    if($scope.uploading) $scope.uploadObj.abort();
  }

  function success(response) {
    $scope.uploading = false;
    $scope.files = [];
    $state.go('trips');
    alert("Successfully uploaded photos!");
  }

  function error(response) {
    $scope.uploading = false;
    $scope.files = [];
    // TODO this is called when cancelled too.
    // TODO pretty error
    alert("Error uploading photos!");
  }

  function progress(evt) {
    $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
  }
}]);
