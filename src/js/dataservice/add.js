/*
* data service
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Blog.dataService';

var services = angular.module(name, [])
.factory('Blogs', require('./blog-service'));