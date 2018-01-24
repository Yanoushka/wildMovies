'use strict';

angular.module('moviesApp')

  .component('searchMovies', {

    templateUrl: 'js/components/searchMovies/searchMovies.html',

    require: {
      parent: '^main'
    },

    bindings: {
      categories: '<',
      movies: '<'
    },

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('searchMovies component init');
      };
    }
  });