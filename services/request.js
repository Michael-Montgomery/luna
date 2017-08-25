var app = angular.module('launch.request', []);


app.service('request', function($http) {
    this.posts = [];
    this.gallery = [];
    this.updateBlogPosts = function(succFunc, failFunc) {
        $http.get('http://localhost:8701/blog-posts').then(succFunc, failFunc)
    }
    this.updateGallery = function(succFunc, failFunc) {
        $http.get('http://localhost:8701/gallery').then(succFunc, failFunc)
    }
})