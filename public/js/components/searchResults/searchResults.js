'use strict';

angular.module('moviesApp')

  .component('searchResults', {

    templateUrl: 'js/components/searchResults/searchResults.html',

    require: {
      parent: '^main.searchMovies'
    },

    bindings: {
      categories: '<',
      movies: '<'
    },

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('searchResults component init');
      };
    }
  });