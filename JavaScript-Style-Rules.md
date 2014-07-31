JavaScript Style Rules
==============================
+ Version: 0.1
+ Ronglin Chen
+ Javascript coding guideline for rb2 woodpecker project team

#####References#####
+ https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
+ https://github.com/airbnb/javascript/blob/master/README.md

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
+ Private properties and methods should be named with a trailing underscore.
+ Protected properties and methods should be named without a trailing underscore (like public ones).
+ Filenames should be all lowercase in order to avoid confusion on case-sensitive platforms. Filenames should end in .js, and should contain no punctuation except for - or _ (prefer - to _).

Code formatting
-----------------------
Use the visual studio javascript editor default style. Format the opening javascript file by shortcur CTRL+K CTRL+D.

Comments
-----------
+ All javascript file should be commented with main info of current file at the top line. Author/CreateDate/Description etc.

```javascript
/**
 * A comment should begin with a slash and 2 asterisks.
 * Inline tags should be enclosed in braces like {@code this}.
 * @desc Block tags should always start on their own line.
 * author: xxxx
 * create date: 2014.07.31
 */
```
