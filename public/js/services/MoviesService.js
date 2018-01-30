'use strict';

angular.module('moviesApp')

  .factory('MoviesService', function ($resource, $q) {

    let Movie = $resource('/movies/:id', {
      id: '@id'
    })

    // Movie.prototype.uploadImage = (file, progress) => {

    //   let defer = $q.defer();

    //   Upload.upload({
    //     url: '/movies/image',
    //     data: {
    //       file: file
    //     }
    //   }).then((response) => {
    //     // Image uploaded
    //     if (response.status === 200) {
    //       // No error, return the image url
    //       defer.resolve(response.data);
    //     } else {
    //       // Error detected, return the error text
    //       defer.reject(response.statusText);
    //     }
    //   }, (error) => {
    //     // Error detected
    //     defer.reject(error);
    //   }, (evt) => {
    //     // Upload progression, update UI if a callback has been supplied
    //     if (typeof progress === 'function') {
    //       let progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    //       progress(progressPercentage);
    //     }
    //   });

    //   return defer.promise;
    // };

    return Movie;
  });