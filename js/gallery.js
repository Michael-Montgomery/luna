var app = angular.module('launch.gallery', ['launch.request']);

app.config(function($routeProvider) {
    $routeProvider.when('/gallery', {
        templateUrl: 'templates/gallery.tpl.html',
        controller : 'galleryController'
    })
});

app.controller('galleryController', function($scope, request) {
    $scope.gallery = [];
    $scope.fetchGallery = function(response) {
        request.gallery = response.data;
        $scope.gallery = request.gallery;
    }
    $scope.logError = function(response) {
        console.log(response.data);
    }
    request.updateGallery($scope.fetchGallery, $scope.logError);
    $('#gallery-nav').on('click', function() {
        $('.mini-wrapper').fadeToggle('slow');
    });
    $('.close').on('click', function() {
        $('.mini-wrapper').fadeToggle();
    })
})