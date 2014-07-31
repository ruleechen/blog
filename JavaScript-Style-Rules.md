JavaScript Style Rules
==============================
+ Version: 0.1
+ Ronglin Chen
+ Javascript coding guideline for rb2 woodpecker project team

#####References#####
+ https://github.com/airbnb/javascript/blob/master/README.md
+ https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml

Naming
--------
In general:
+ functionNamesLikeThis
+ variableNamesLikeThis
+ ClassNamesLikeThis
+ EnumNamesLikeThis
+ methodNamesLikeThis
+ CONSTANT_VALUES_LIKE_THIS
+ foo.namespaceNamesLikeThis.bar
+ filenameslikethis.js

Note more:
+ Avoid single letter names. Be descriptive with your naming.
+ When saving a reference to "this" use "var self = this;". 
+ Private properties and methods should be named with a trailing underscore.
+ Protected properties and methods should be named without a trailing underscore (like public ones).
+ Filenames should be all lowercase in order to avoid confusion on case-sensitive platforms. Filenames should end in .js, and should contain no punctuation except for - or _ (prefer - to _).

Formatting
-----------------------
As visual studio is our most major IDE in javascript coding. We recommend useing the visual studio javascript editor default style. Format the opening javascript file by compose shortcur **CTRL+K  CTRL+D**.

Comments
-----------
Use [JSDoc](http://code.google.com/p/jsdoc-toolkit/)

> All files, classes, main methods and main properties should be documented with [JSDoc](http://code.google.com/p/jsdoc-toolkit/) comments with the appropriate [tags](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#JSDoc_Tag_Reference) and [types](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#JsTypes). Textual descriptions for properties, methods, method parameters and method return values should be included unless obvious from the property, method, or parameter name. Inline comments should be of the // variety.
