import 'babel-polyfill';
require('assets/css/en/bootstrap.min.css');
require('assets/css/en/style.css');
require('assets/css/en/media.css');
require('assets/css/m-common.less');
let {
  wxSetShare
} = require('js/util');
window.$ = window.jQuery = require('jquery');

window.GetQueryString = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};
window.showMenu = () => {
  $('.header').addClass('showmenu');
};

window.closeMenu = () => {
  $('.header').removeClass('showmenu');
};

$(function () {
  let pageName = location.pathname.match(/(\w+)\.html/)[1];
  $('.page_name').text($(`.menu-list a[data-name="${pageName}"]`).text().trim());
});

/**
 * 设置分享
 */
wxSetShare({
  title: document.title||'成长兔英语',
  desc: '0-6岁家庭陪伴式幼儿英语启蒙开创者，宝宝出生就能玩的英语课',
});
