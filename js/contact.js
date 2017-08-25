var app = angular.module('launch.contact', []);

app.config(function($routeProvider) {
    $routeProvider.when('/contact', {
        templateUrl: 'templates/contact.tpl.html',
        controller: 'contactController'
    })
});

app.controller('contactController', function($scope) {
    $('#contact-nav').on('click', function() {
        $('.mini-wrapper').fadeToggle('slow');

    });
    $('.close').on('click', function() {
        $('.mini-wrapper').fadeToggle();
    })
})