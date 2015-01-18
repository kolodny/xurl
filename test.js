var assert = require('assert');
var xURL = require('./index');

describe('xURL', function() {
  it('can parse a full url', function() {
    assert.deepEqual(xURL('http://www.google.com:8080/index.html?qs#hash'), {
      "protocol": "http:",
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "#hash",
      "href": "http://www.google.com:8080/index.html?qs#hash"
    });
  });

  it('can parse an empty url', function() {
    assert.deepEqual(xURL(''), {
      "protocol": undefined,
      "host": "",
      "hostname": "",
      "port": "",
      "pathname": "",
      "search": "",
      "hash": "",
      "href": ""
    });
  });

  it('can parse a url without a protocol', function() {
    assert.deepEqual(xURL('//www.google.com:8080/index.html?qs#hash'), {
      "protocol": undefined,
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "#hash",
      "href": "//www.google.com:8080/index.html?qs#hash"
    });
  });

  it('can parse a url without a port', function() {
    assert.deepEqual(xURL('http://www.google.com/index.html?qs#hash'), {
      "protocol": "http:",
      "host": "www.google.com",
      "hostname": "www.google.com",
      "port": "",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "#hash",
      "href": "http://www.google.com/index.html?qs#hash"
    });
  });

  it('can parse a url without a port', function() {
    assert.deepEqual(xURL('http://www.google.com/index.html?qs#hash'), {
      "protocol": "http:",
      "host": "www.google.com",
      "hostname": "www.google.com",
      "port": "",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "#hash",
      "href": "http://www.google.com/index.html?qs#hash"
    });
  });

  it('can parse a url without an empty query string', function() {
    assert.deepEqual(xURL('http://www.google.com:8080/index.html?#hash'), {
      "protocol": "http:",
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "/index.html",
      "search": "?",
      "hash": "#hash",
      "href": "http://www.google.com:8080/index.html?#hash"
    });
  });

  it('can parse a url without a hash', function() {
    assert.deepEqual(xURL('http://www.google.com:8080/index.html?qs#'), {
      "protocol": "http:",
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "#",
      "href": "http://www.google.com:8080/index.html?qs#"
    });
  });

  it('can parse a url without an empty query string', function() {
    assert.deepEqual(xURL('http://www.google.com:8080/index.html?qs'), {
      "protocol": "http:",
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "",
      "href": "http://www.google.com:8080/index.html?qs"
    });
  });

});
