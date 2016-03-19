 'use strict';

angular.module('callonwebApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-callonwebApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-callonwebApp-params')});
                }
                return response;
            }
        };
    });
