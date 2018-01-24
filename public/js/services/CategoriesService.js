'use strict';

angular.module('moviesApp')

  .factory('CategoriesService', function ($resource, Upload) {
    return $resource('/categories/:id', {
      id: '@id'
    });
  });