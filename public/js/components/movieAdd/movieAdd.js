'use strict';

angular.module('moviesApp')

    .component('movieAdd', {

        templateUrl: 'js/components/movieAdd/movieAdd.html',

        bindings: {
            categories: '<'
        },

        controller: function ($log, $state, MoviesService) {

            this.$onInit = () => {
                $log.info(`movieAdd component init, ${this.categories ? this.categories.length : 0} categories`);
                this.movie = new MoviesService();
                this.maxFileSize = 2;
            };

            this.validate = (file) => {
                this.movie.uploadImage(file, (progress) => {
                    this.progress = progress;
                }).then((result) => {
                    this.movie.image = result.url;
                    return this.movie.$save();
                }).then((newMovie) => {
                    $state.go('main.movies');
                }).catch((error) => {
                    this.error = error.statusText;
                });
            };
        }
    });