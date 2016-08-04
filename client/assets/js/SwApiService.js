(function () {
    'use strict';

    angular.module('application')
        .service('SWAPIService', ['$http', function ($http) {

            return {
                query: function (urlApi, queryParams) {
                    return $http({
                        method: 'GET',
                        url: urlApi,
                        params: queryParams
                    });

                },
                test: function(){
                    return $http({
                        method: 'GET',
                        url: 'http://ec2-54-93-90-68.eu-central-1.compute.amazonaws.com:7379/GET/hello'
                    })
                },
                set: function (url) {
                    return $http({
                        method: 'SET',
                        url: url
                    });
                },
                get: function (url) {
                    return $http({
                        method: 'GET',
                        url: url
                    });
                }
            };

        }])
})();
