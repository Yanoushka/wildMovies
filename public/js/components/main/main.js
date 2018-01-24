'use strict';

angular.module('moviesApp')

    .component('main', {

        templateUrl: 'js/components/main/main.html',

        bindings: {
            loggedUser: '<'
        },

        controller: function (CONSTANTS, $log, $state, $scope) {

            this.$onInit = () => {

                $log.info('main component init');
            };
        }

    });