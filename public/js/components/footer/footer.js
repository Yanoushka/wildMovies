'use strict';

angular.module('moviesApp')

    .component('footer', {

        templateUrl: 'js/components/footer/footer.html',

        bindings: {
            loggedUser: '<'
        },

        controller: function (CONSTANTS, $log, $state, $scope) {

            this.$onInit = () => {

                $log.info('footer component init');
            };
        }

    });