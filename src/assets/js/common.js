var browser = {
  versions: function () {
    var u = navigator.userAgent,
      app = navigator.appVersion;
    return { //移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

function setCookie(name, value, time) {
  var strsec = getsec(time);
  var exp = new Date();
  exp.setTime(exp.getTime() + strsec * 1);
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
}

function getsec(str) {
  var str1 = str.substring(1, str.length) * 1;
  var str2 = str.substring(0, 1);
  if (str2 == 's') {
    return str1 * 1000;
  } else if (str2 == 'h') {
    return str1 * 60 * 60 * 1000;
  } else if (str2 == 'd') {
    return str1 * 24 * 60 * 60 * 1000;
  }
}

function getCookie(name) {
  var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

if (browser.versions.mobile || browser.versions.ios || browser.versions.android ||
  browser.versions.iPhone || browser.versions.iPad) {
  window.location = './m_index.html';
}

var campCourse = document.querySelector('#camp-course');
var campDialog = document.querySelector('#camp-dialog');
var campDialogClose = document.querySelector('#camp-dialog') ? document.querySelector('#camp-dialog').querySelector('.close') : null;
var freeCourse = document.querySelector('#free-course');
var freeCourseClose = document.querySelector('#free-course') ? document.querySelector('#free-course').querySelector('.close') : null;
campCourse && campCourse.addEventListener('click', function (e) {
  campDialog.style.display = 'block';
}, false);
campDialogClose && campDialogClose.addEventListener('click', function (e) {
  campDialog.style.display = 'none';
}, false);
freeCourseClose && freeCourseClose.addEventListener('click', function (e) {
  freeCourse.style.display = 'none';
  setCookie('free_course_close_flag', 1, 'd7');
}, false);

if (freeCourse && !getCookie('free_course_close_flag')) {
  freeCourse.style.display = 'block';
}


