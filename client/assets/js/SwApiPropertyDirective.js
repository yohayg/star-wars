(function () {
    'use strict';

    angular.module('application')
        .directive("getProp", ['$filter', 'SWAPIService', function ($filter, SWAPIService) {
            return {
                template: "{{property}}",
                scope: {
                    prop: "=",
                    url: "="
                },
                link: function (scope) {
                    // Use Aerobatic's caching if we're on that server
                    var urlApi = scope.url,
                        queryParams = {
                            cache: true
                        };


                    var capitalize = $filter('capitalize');
                    SWAPIService.query(urlApi, queryParams).then(function (result) {
                        scope.property = capitalize(result.data[scope.prop]);
                    }, function (err) {
                        scope.property = "Unknown";
                    });
                }
            }
        }])
})();
