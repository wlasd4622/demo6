import 'babel-polyfill';
require('css/en/bootstrap.min.css');
require('css/en/style.css');
require('css/en/media.css');
require('css/en-common.less');
window.$ = window.jQuery = require('jquery');
window.GetQueryString = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};


window.showhide=(obj) => {
  $(obj).toggle();
};
