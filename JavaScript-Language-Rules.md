Javascript coding guideline
==============================
+ Version: 0.1
+ Ronglin Chen
+ Javascript coding guideline for rb2 woodpecker project team

#####References#####
+ https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
+ https://github.com/airbnb/javascript/blob/master/README.md

Variables
---------
Declarations with **var** always
> When you fail to specify var, the variable gets placed in the global context, potentially clobbering existing values. Also, if there's no declaration, it's hard to tell in what scope a variable lives (e.g., it could be in the Document or Window just as easily as in the local scope). So always declare with var.

```javascript
// bad
name = 'a';

// good
var name = 'a';
```

Array and Object literals
----------------------------
Use Array and Object literals instead of Array and Object constructors.
> Array constructors are error-prone due to their arguments. Because of this, if someone changes the code to pass 1 argument instead of 2 arguments, the array might not have the expected length. To avoid these kinds of weird cases, always use the more readable array literal. Object constructors don't have the same problems, but for readability and consistency object literals should be used.

```javascript
// bad
var o = new Object();
var a = new Array(item1, item2, item3);

// good
var o = {};
var a = [item1, item2, item3];
```

String quotes
---------------
Javascript support both ' and " as string quote. But please prefer ' over ".
> For consistency single-quotes (') are preferred to double-quotes ("). This is helpful when creating strings that include HTML

```javascript
// bad
var str1 = "a";
var str2 = "<input type=\"text\" />";

// good
var str1 = 'a';
var str2 = '<input type="text" />';
```

Semicolons
------------
Always use semicolons.

> Below example there are a couple places where missing semicolons are particularly dangerous. Make sure your assignments end with semicolons. And please note that semicolons should be included at the end of function expressions, but not at the end of function declarations.

```javascript
// bad
var myMethod = function() {
  return true;
}  // No semicolon here
var x = {
  'a': 1,
  'b': 2
}  // No semicolon here

// good
var foo = function() {
  return true;
};  // semicolon here
var x = {
  'a': 1,
  'b': 2
};  // semicolon here
function foo() {
  return true;
}  // no semicolon here
```

Function Declarations Within Blocks
----------------------------------------
Use a variable initialized with a Function Expression to define a function within a block.

> While most script engines support Function Declarations within blocks it is not part of ECMAScript (see [ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm), clause 13 and 14). Worse implementations are inconsistent with each other and with future EcmaScript proposals. ECMAScript only allows for Function Declarations in the root statement list of a script or function. Instead use a variable initialized with a Function Expression to define a function within a block:

```javascript
// bad
if (x) {
  function foo() { }
}

// good
if (x) {
  var foo = function() { };
}
```

with() {}
-------------
**Don't** use with.

> Using with clouds the semantics of your program. Because the object of the with can have properties that collide with local variables, it can drastically change the meaning of your program.

