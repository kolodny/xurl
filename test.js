var assert = require('assert');
var xURL = require('./index');

describe('xURL', function() {
  it('can parse a full url', function() {
    var url = 'http://www.google.com:8080/index.html?qs#hash';
    assert.deepEqual(xURL(url), {
      "protocol": "http:",
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "#hash",
      "href": url
    });
  });

  it('can parse an empty url', function() {
    var url = '';
    assert.deepEqual(xURL(url), {
      "protocol": undefined,
      "host": "",
      "hostname": "",
      "port": "",
      "pathname": "",
      "search": "",
      "hash": "",
      "href": url
    });
  });

  it('can parse an empty path', function() {
    var url = 'http://www.google.com:8080?qs#hash';
    assert.deepEqual(xURL(url), {
      "protocol": "http:",
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "",
      "search": "?qs",
      "hash": "#hash",
      "href": url
    });
  });


  it('can parse a url without a protocol', function() {
    var url = '//www.google.com:8080/index.html?qs#hash';
    assert.deepEqual(xURL(url), {
      "protocol": undefined,
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "#hash",
      "href": url
    });
  });

  it('can parse a url without a port', function() {
    var url = 'http://www.google.com/index.html?qs#hash';
    assert.deepEqual(xURL(url), {
      "protocol": "http:",
      "host": "www.google.com",
      "hostname": "www.google.com",
      "port": "",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "#hash",
      "href": url
    });
  });

  it('can parse a url without a port', function() {
    var url = 'http://www.google.com/index.html?qs#hash';
    assert.deepEqual(xURL(url), {
      "protocol": "http:",
      "host": "www.google.com",
      "hostname": "www.google.com",
      "port": "",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "#hash",
      "href": url
    });
  });

  it('can parse a url without an empty query string', function() {
    var url = 'http://www.google.com:8080/index.html?#hash';
    assert.deepEqual(xURL(url), {
      "protocol": "http:",
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "/index.html",
      "search": "?",
      "hash": "#hash",
      "href": url
    });
  });

  it('can parse a url without a hash', function() {
    var url = 'http://www.google.com:8080/index.html?qs#';
    assert.deepEqual(xURL(url), {
      "protocol": "http:",
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "#",
      "href": url
    });
  });

  it('can parse a url without an empty query string', function() {
    var url = 'http://www.google.com:8080/index.html?qs';
    assert.deepEqual(xURL(url), {
      "protocol": "http:",
      "host": "www.google.com:8080",
      "hostname": "www.google.com",
      "port": "8080",
      "pathname": "/index.html",
      "search": "?qs",
      "hash": "",
      "href": url
    });
  });

});
