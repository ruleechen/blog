/*
* tests
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Blog.tests';

angular.module(name, [])
.service('testService', require('./test-ng-service'))
.factory('testFactory', require('./test-ng-factory'))
.provider('testProvider', require('./test-ng-provider'));

/*

http://www.cnblogs.com/stanzhu/p/3186690.html

说明：

注入service，相当于注入service定义时的function实例。

注入factory，相当于注入factory定义时的函数调用入口。

注入provider，相当于注入provider内$get定义的函数实例的调用。

*/