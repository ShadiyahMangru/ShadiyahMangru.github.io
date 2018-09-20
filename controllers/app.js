var app = angular.module("myApp", ["ngRoute", "main", "hockeyLexicon", "stats", "trophies", "jersey", "memory", "points"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/main.html",
        controller : "mainCtrl"
    })
    .when("/HockeyLexicon", {
        templateUrl : "html/HockeyLexicon.html",
        controller : "HockeyLexiconCtrl"
    })
    .when("/Stats", {
        templateUrl : "html/Stats.html",
        controller : "StatsCtrl"
    })
    .when("/Trophies", {
        templateUrl : "html/Trophies.html",
        controller : "TrophiesCtrl"
    })
    .when("/Jersey", {
        templateUrl : "html/Jersey.html",
        controller : "JerseyCtrl"
    })
    .when("/Memory", {
        templateUrl : "html/Memory.html",
        controller : "MemoryCtrl"
    })
    .when("/Points", {
        templateUrl : "html/Points.html",
        controller : "PointsCtrl"
    });
});    