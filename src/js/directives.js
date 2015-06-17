var simpleSiteDirectives = angular.module("simpleSiteDirectives", []);

simpleSiteDirectives.directive("fadeBgImage", function () {
    return {
        restrict: "A",
        link: function ($scope, element, attrs) {
            var img = element.find('.bgimg');
            if (img) {
                img.bind('load', function (e) {
                    element.addClass('show');
                });
            }
        }
    };
});
