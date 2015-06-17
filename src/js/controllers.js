"use-strict";

var simpleSiteControllers = angular.module("simpleSiteControllers", []);

simpleSiteControllers.controller("SectionCtrl", ["$scope", "$routeParams", "Appdata",
function ($scope, $routeParams, Appdata) {

    Appdata.get({secId: "heroine"}, function(secData) {
        $scope.heroine = secData;
    });

    Appdata.get({secId: "about-me"}, function(secData) {
        $scope.aboutme = secData;
    });

    Appdata.get({secId: "education"}, function(secData) {
        $scope.education = secData;
    });

    Appdata.get({secId: "skills"}, function(secData) {
        $scope.skills = secData;
    });
}]);
