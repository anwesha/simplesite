var simpleSiteServices = angular.module("simpleSiteServices", ["ngResource"]);

simpleSiteServices.factory("Appdata", ["$resource",
function ($resource) {
    return $resource("simplesite/src/appdata/:secId.json", {}, {
      query: {
            method: "GET",
            params: { secId: "heroine" },
            isArray: false
        }
    });
}]);
