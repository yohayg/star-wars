(function () {
    'use strict';

    angular.module('application')
        .directive("buttonFavorite", ['SWAPIService', function (SWAPIService) {
            return {
                scope: true,
                restrict: 'E',
                replace:true,
                template: '<input type="button" value="{{likeText}}" class="btn btn-success btn-lg">',
                link: function (scope, elem) {
                    elem.bind('click', function () {

                        if(scope.like){
                            scope.setDislike();
                        }else {
                            scope.setLike();
                        }
                        elem.val(scope.likeText)
                        console.log(scope.like);
                       
                    });
                }
            };
        }])
})();
