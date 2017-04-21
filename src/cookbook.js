'use strict';

angular.module('cookbook', [])
.directive('emcees', function() {
    return {
        restrict: 'E',
        templateUrl: 'template.html',
        link: function(scope, element) {
            scope.emcee = scope.emcees[0];
        }
    };
});
