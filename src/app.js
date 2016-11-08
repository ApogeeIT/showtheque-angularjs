
var app = angular.module('showthequeApp', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    
    .when('/home', {
        templateUrl: 'modules/home/views/home.html',
        controller: 'HomeController',
        controllerAs:'homeCtrl'
    })

    .when('/shows', {
        templateUrl: 'modules/show/views/show-list.html',
        controller: 'ShowListController',
        controllerAs:'listCtrl'
    })

    .when('/show/:id?', {
        templateUrl: 'modules/show/views/show-edit.html',
        controller: 'ShowEditController',
        controllerAs:'editCtrl'
    })

    .otherwise('/home');

});