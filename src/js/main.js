/*
* main
* author: ronglin
* create date: 2014.4.22
*/

'use strict';

var libraries = require('./libraries/add');
var utilities = require('./utilities/add');
var dataService = require('./dataservice/add');
var controllers = require('./controllers/add');
var tests = require('./tests/add');

var blog = angular.module('Blog', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    utilities.name,
    dataService.name,
    controllers.name
].concat(tests));

blog.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', { templateUrl: 'views/home.html', controller: 'HomeCtrl' });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);
