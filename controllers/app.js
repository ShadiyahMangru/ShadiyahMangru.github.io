var app = angular.module("myApp", ["ngRoute", "main", "codeWord", "baseChange", "sumPuzzles", "numberGuess", "memory", "war"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/main.html",
        controller : "mainCtrl",
    })
    .when("/HockeyLexicon", {
        templateUrl : "html/CodeWord.html",
        controller : "CodeWordCtrl"
    })
    .when("/StatsCalc", {
        templateUrl : "html/BaseChange.html",
        controller : "BaseChangeCtrl"
    })
    .when("/UnlockTrophies", {
        templateUrl : "html/SumPuzzles.html",
        controller : "SumPuzzlesCtrl"
    })
    .when("/JerseyQuiz", {
        templateUrl : "html/NumberGuess.html",
        controller : "NumberGuessCtrl"
    })
    .when("/Memory", {
        templateUrl : "html/Memory.html",
        controller : "MemoryCtrl"
    })
    .when("/PointsFaceoff", {
        templateUrl : "html/War.html",
        controller : "WarCtrl"
    });
});    