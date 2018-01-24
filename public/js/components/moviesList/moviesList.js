'use strict';

angular.module('moviesApp')

  .component('moviesList', {

    templateUrl: 'js/components/moviesList/moviesList.html',

    require: {
      parent: '^main'
    },

    bindings: {
      categories: '<',
      movies: '<'
    },

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('moviesList component init');
      };
    }
  });