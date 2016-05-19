'use strict';

var api = angular.module('api');
api.factory('apiFactory', ['$http', function apiFactory($http) {
  var urlBase = '/api';
  var apiFactory = {};

  apiFactory.getUser = function(user_id) {
    if(user_id) {
      return $http.get(urlBase + '/users?user_id=' + user_id);
    }
    return $http.get(urlBase + '/users');
  }

  apiFactory.getTrips = function () {
    return $http.get(urlBase + '/trips');
  };

  apiFactory.addTrip = function(trip) {
    return $http.post(urlBase + '/trips', trip);
  };

  apiFactory.deleteTrip = function(trip) {
    return $http.delete(urlBase + '/trips?trip_id=' + trip._id);
  };

  apiFactory.updateTrip = function(trip) {
    return $http.put(urlBase + '/trips', trip);
  };

  apiFactory.getPlaces = function() {
    return $http.get(urlBase + '/trips/places');
  }

  apiFactory.addPlace = function(place) {
    return $http.post(urlBase + '/trips/places', place);
  }

  apiFactory.updatePlace = function(place) {
    return $http.put(urlBase + '/trips/places', place);
  }

  apiFactory.deletePlace = function(place) {
    return $http.delete(urlBase + '/trips/places?place_id=' + place._id);
  }

  apiFactory.getPhotos = function(params) {
    var qstring = '/photos?place_id=' + params.place_id;
    if(params.timebefore) qstring += ('&timebefore=' + params.timebefore);
    if(params.timeafter) qstring += ('&timeafter=' + params.timeafter);
    if(params.limit) qstring += ('&limit=' + params.limit);
    return $http.get(urlBase + qstring);
  }

  apiFactory.deletePhotos = function(photos) {
    return $http.post(urlBase + '/photos/delete', photos);
  }

  return apiFactory;
}]);
