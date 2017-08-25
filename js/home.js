var app = angular.module('launch.home', []);

app.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'homeController'
    })
});

app.controller('homeController', function($scope) {
    $('#home-nav').on('click', function() {
        $('.mini-wrapper').fadeToggle('slow');
    });
    $('.close').on('click', function() {
        $('.mini-wrapper').fadeToggle();
    })
})