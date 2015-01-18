xURL
===

[![Build Status](https://travis-ci.org/kolodny/xurl.svg?branch=master)](https://travis-ci.org/kolodny/xurl)

usage:
```js
var xURL = require('xurl');
xurl('http://www.google.com:8080/index.html?qs#hash');

/* returns:
{
  "protocol": "http:",
  "host": "www.google.com:8080",
  "hostname": "www.google.com",
  "port": "8080",
  "pathname": "/index.html",
  "search": "?qs",
  "hash": "#hash",
  "href": "http://www.google.com:8080/index.html?qs#hash"
}
*/
```

