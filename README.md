# symbol-keymirror ![NPM](https://badge.fury.io/js/symbol-keymirror.svg) ![TravisCI](https://travis-ci.org/jsoulet/symbol-keymirror.svg?branch=master)



## How to install?
```sh
$ npm install --save symbol-keymirror
```

##  How to use?

**object: symbolKeyMirror([String])**
*Takes an array of string and returns an object with the string as key, and Symbol(key) as the value*

```javascript
const symbolKeyMirror = require('symbol-keymirror');
const keys = [
  'ADD_ITEM',
  'REMOVE_ITEM'
];

const symbols = symbolKeyMirror(keys);

symbols.ADD_ITEM; //Symbol('ADD_ITEM')
```
