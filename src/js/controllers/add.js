/*
* controllers
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Blog.controllers';

var ctls = angular.module(name, [])
.controller('MainCtl', require('./main-controller'))
.controller('HomeCtl', require('./home-controller'));