var app = angular.module('launch.blog', ['launch.request']);

app.config(function($routeProvider) {
    $routeProvider.when('/blog', {
        templateUrl: 'templates/blog.tpl.html',
        controller: 'blogController'
    })
});

app.controller('blogController', function($scope, request) {
    $scope.posts = [];
    $scope.updatePosts = function(response) {
        request.posts = response.data;
        $scope.posts = request.posts;
    };
    $scope.logError = function(response) {
        console.log(response.data);
    };
    request.updateBlogPosts($scope.updatePosts, $scope.logError);
    $('#blog-nav').on('click', function() {
        $('.mini-wrapper').fadeToggle('slow');
    });
    $('.close').on('click', function() {
        $('.mini-wrapper').fadeToggle();
    })
})