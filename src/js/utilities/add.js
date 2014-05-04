/*
* utilities
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Blog.utilities';

angular.module(name, [])
.constant('utils', {
	padLeft: require('./pad-left'),
	padRight: require('./pad-right')
});
