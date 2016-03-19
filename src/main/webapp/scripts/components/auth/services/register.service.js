'use strict';

angular.module('callonwebApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


