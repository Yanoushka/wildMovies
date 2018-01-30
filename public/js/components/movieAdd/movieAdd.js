'use strict';

angular.module('moviesApp')

    .component('movieAdd', {

        templateUrl: 'js/components/movieAdd/movieAdd.html',

        bindings: {
            categories: '<'
        },

        controller: function ($log, $state, MoviesService, TmdbService) {

            this.$onInit = () => {
                $log.info(`movieAdd component init, ${this.categories ? this.categories.length : 0} categories`);
                this.movie = new MoviesService();
                this.maxFileSize = 2;
            };

            this.validate = () => {
                this.movie.$save().then((newMovie) => {
                    $state.go('main.movies');
                }).catch((err) => {
                    this.errorMessage = err;
                });
            };

            this.search = (search) => {
                TmdbService.search(search).then((result) => {
                    $log.info(result);
                    this.movie.title = result.Title;
                    this.movie.description = result.Plot;
                    this.movie.image = result.Poster;
                    this.movie.year = result.Year;
                    this.movie.realisator = result.Director;
                    this.movie.actor = result.Actors;
                }).catch((err) => {
                    this.errorMessage = err;
                });
            };

            // this.validate = (file) => {
            //     this.movie.uploadImage(file, (progress) => {
            //         this.progress = progress;
            //     }).then((result) => {
            //         this.movie.image = result.url;
            //         return this.movie.$save();
            //     }).then((newMovie) => {
            //         $state.go('main.movies');
            //     }).catch((error) => {
            //         this.error = error.statusText;
            //     });
            // };
        }
    })

    .factory('MoviesService', ($resource) => {
        return $resource('/movies/:id', {
          id: '@id'
        });
      })

    .service('TmdbService', function ($http, $q, $window) {
        this.search = (query) => {
            const params = $window.encodeURIComponent(query);
            const url = `http://www.omdbapi.com/?apikey=81d3b711&t=${params}`;
            const defer = $q.defer();
            $http.get(url).then((results) => {
                defer.resolve(results.data);
            }).catch((err) => {
                defer.reject(err);
            });
            return defer.promise;
        };
    });