var app = angular.module('launch.shop', []);

app.config(function($routeProvider) {
    $routeProvider.when('/shop', {
        templateUrl: 'templates/shop.tpl.html',
        controller: 'shopController'
    })
});

app.controller('shopController', function($scope) {
    $scope.message = 'shop';
})