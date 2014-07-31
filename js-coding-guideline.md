Javascript coding guideline
==============================
+ Version: 0.1
+ Ronglin Chen
+ Javascript coding guideline for rb2 woodpecker project team

#####References#####
+ https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml

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
