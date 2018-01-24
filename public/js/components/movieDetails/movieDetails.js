'use strict';

angular.module('moviesApp')

    .component('movieDetails', {

        templateUrl: 'js/components/movieDetails/movieDetails.html',

        require: {
            parent: '^main'
        },

        bindings: {
            movie: '<'
        },

        controller: function ($log, $state) {

            this.$onInit = () => {
                $log.info('movieDetails component init');
            };

            this.delete = () => {
                this.movie.$delete(() => {
                    $state.go('main.movies');
                }, (error) => {
                    this.error = error.statusText;
                });
            };
        }

    });