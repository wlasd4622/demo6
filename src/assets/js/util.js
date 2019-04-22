import wechat from 'babyfs-wechat';

/**
 * [numBounce 数字跳动]
 * @param  {[type]} initialNum [初始值]
 * @param  {[type]} finishNum  [结束值]
 * @param  {[type]} node       [需要被赋值的dom节点]
 * @param  {[type]} otherText  [除了数字之外额外的文字]
 * @param  {[type]} frequency  [每次增加的数目]
 * @return {[type]}            [description]
 */
let numBounce = (initialNum, finishNum, node, otherText, frequency, time) => {
  let initial = initialNum;
  let intervalTime = 100;
  if (time) {
    intervalTime = time;
  }
  let statisticsNum = setInterval(function () {
    node.innerHTML = initial + otherText;
    initial += frequency ? frequency : 1;
    if (initial > finishNum) {
      node.innerHTML = finishNum + otherText;
      clearInterval(statisticsNum);
    }
  }, intervalTime);
};
/**
 * 关于我们菜单栏选中
 */
let aboutUsMenu = () => {
  let pageName = location.pathname.match(/\w+/)[0];
  $('.about-us-left a[data-name]').each((i, item) => {
    if ($(item).attr('data-name').split(',').indexOf(pageName) > -1) {
      $(item).addClass('active');
    }
  });
};

let getRequest = () => {
  let url = location.search; //获取url中"?"符后的字串
  let theRequest = new Object();
  if (url.indexOf('?') != -1) {
    let str = url.substr(1);
    let strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = (strs[i].split('=')[1]);
    }
  }
  return theRequest;
};

let dateFtt = (fmt, date) => {
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    'S': date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
  return fmt;
};

/**
 * 设置微信分享参数
 */
let wxSetShare = (options) => {
  wechat
    .jssdkReady('babyclass')
    .then(wxWrapper => {
      //设置分享
      wxWrapper.share(Object.assign({
        title: '成长兔英语',
        link: window.location.href,
        imgUrl: 'http://i.s.babyfs.cn/op/1/6bee7c692299441aa5a78ac3488f942a.jpg'
      }, options));
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = {
  numBounce,
  aboutUsMenu,
  getRequest,
  dateFtt,
  wxSetShare
};
