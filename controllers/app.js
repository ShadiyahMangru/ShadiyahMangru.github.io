var app = angular.module("myApp", ["ngRoute", "main", "codeWord", "sumPuzzles", "numberGuess", "memory", "war"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/main.html",
        controller : "mainCtrl",
    })
    .when("/CodeWord", {
        templateUrl : "html/CodeWord.html",
        controller : "CodeWordCtrl"
    })
    .when("/SumPuzzles", {
        templateUrl : "html/SumPuzzles.html",
        controller : "SumPuzzlesCtrl"
    })
    .when("/NumberGuess", {
        templateUrl : "html/NumberGuess.html",
        controller : "NumberGuessCtrl"
    })
    .when("/Memory", {
        templateUrl : "html/Memory.html",
        controller : "MemoryCtrl"
    })
    .when("/War", {
        templateUrl : "html/War.html",
        controller : "WarCtrl"
    });
});    