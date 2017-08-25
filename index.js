var app = angular.module('launch', ['ngRoute', 'launch.home', 'launch.shop', 'launch.contact', 'launch.gallery', 'launch.blog', 'launch.request']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/home'
    }).otherwise({
        redirectTo: '/home'
    })
});