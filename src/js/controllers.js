"use-strict";

var simpleSiteControllers = angular.module("simpleSiteControllers", []);

simpleSiteControllers.controller("SectionCtrl", ["$scope", "$routeParams", "Appdata",
function ($scope, $routeParams, Appdata) {

    // TODO : make this generic
    Appdata.get({secId: "heroine"}, function(secData) {
        $scope.heroine = secData;
    });

    Appdata.get({secId: "about-me"}, function(secData) {
        $scope.aboutme = secData;
    });

    Appdata.get({secId: "education"}, function(secData) {
        $scope.education = secData;
    });

    Appdata.get({secId: "workfolio"}, function(secData) {
        $scope.workfolio = secData;
    });  

    Appdata.get({secId: "skills"}, function(secData) {
        $scope.skills = secData;
    });

    Appdata.get({secId: "work"}, function(secData) {
        $scope.work = secData;
        $scope.currentWorkPos = "YHOO4";
        $scope.updateWorkPos = function (posValue) {
            $scope.currentWorkPos = posValue;
        }
    });
}]);
