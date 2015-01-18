var qparse = /^(?:([a-z]\w*:))?(?:\/{2,3})?([^\/]*)([^\?#]*)(\?[^#]*)?(#.*)?$/i;
module.exports = function xURL(url) {
  var parsed = qparse.exec(url);
  var hostParts = parsed[2].split(':');
  return {
    protocol: parsed[1],
    host: parsed[2],
    hostname: hostParts[0],
    port: hostParts[1] || '',
    pathname: parsed[3],
    search: parsed[4] || '',
    hash: parsed[5] || '',
    href: url  
  };
};
