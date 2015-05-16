"use-strict";

var debAppControllers = angular.module("simpleSiteControllers", []);

debAppControllers.controller("SectionCtrl", ["$scope", "$routeParams", "Appdata",
function ($scope, $routeParams, Appdata) {
    $scope.aboutme = Appdata.get({secId: $routeParams.secId}, function(secData) {
      $scope.secData = secData;
    });
}]);
