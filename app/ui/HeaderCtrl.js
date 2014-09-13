﻿(function (app) {

    maryjs.HeaderCtrl = function ($scope, $location, settings) {
        $scope.store = new settings();
        
        $scope.$on("$locationChangeSuccess", function (e, newLoc, oldLoc) {
            $scope.menu = $location.$$path;
        });

        $scope.lock = function () {
            $location.path("/");
            $scope.$apply();

            var key = prompt("Entrez votre code");
            while(key != $scope.store.lockKey)
                key = prompt("Entrez votre code");
        }
    };

    app.controller("maryjs.HeaderCtrl",
        [
            "$scope",
            "$location",
            "maryjs.settings",
            maryjs.HeaderCtrl
        ]);
}(angular.module("maryjs.app")));