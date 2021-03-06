'use strict';

angular.module('moviesApp')

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('main', {
        url: '/',
        component: 'main',
        abstract: true,
      })
      
      .state('main.movies', {
        url: 'list?{categoryId:int}',
        publicRoute: true,
        params: {
          categoryId: {
            value: 0
          }
        },
        component: 'moviesList',
        resolve: {
          categories: (CategoriesService) => {
            return CategoriesService.query().$promise;
          },
          movies: (MoviesService, $transition$) => {
            return MoviesService.query({
              categoryId: $transition$.params().categoryId
            }).$promise;
          }
        }
      })

      .state('main.details', {
        url: 'details/:id',
        component: 'movieDetails',
        resolve: {
          movie: (MoviesService, $transition$) => {
            return MoviesService.get({
              id: $transition$.params().id
            }).$promise;
          }
        }
      })

      .state('main.add', {
        url: 'add',
        component: 'movieAdd',
        resolve: {
          categories: (CategoriesService) => {
            return CategoriesService.query().$promise;
          }
        }
      })

    $urlRouterProvider.otherwise('/list');
  });