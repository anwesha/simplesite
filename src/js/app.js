"use-strict";

/* App Module */
var simpleSite = angular.module("simpleSite", [
    "ngRoute",
    "ngAnimate",
    "simpleSiteControllers",
    "simpleSiteServices",
    "simpleSiteDirectives",
    "ngLodash"
]);

simpleSite.config(["$routeProvider", "$locationProvider",
function ($routeProvider, $locationProvider) {
    var routePrefix = 'simplesite/src/';
    $routeProvider.
    when("/",{
        templateUrl: function (params) {
            return routePrefix + "partials/page.html";
        },
        controller : "SectionCtrl"
    }).
    otherwise({
        redirectTo: "/"
    });
    $locationProvider.html5Mode(true);
}
]);
