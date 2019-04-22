/**
 * [numBounce 数字跳动]
 * @param  {[type]} initialNum [初始值]
 * @param  {[type]} finishNum  [结束值]
 * @param  {[type]} node       [需要被赋值的dom节点]
 * @param  {[type]} otherText  [除了数字之外额外的文字]
 * @param  {[type]} frequency  [每次增加的数目]
 * @return {[type]}            [description]
 * 需要注意的是： initialNum + n * time === finishNum (不然有可能最后的值会不匹配)
 */
function numBounce(initialNum, finishNum, node, otherText, frequency, time) {
  var initial = initialNum;
  var intervalTime = 100;
  if (time) {
    intervalTime = time;
  }
  var statisticsNum = setInterval(function () {
    node.innerHTML = initial + otherText;
    initial += frequency ? frequency : 1;
    if (initial > finishNum) {
      clearInterval(statisticsNum);
    }
  }, intervalTime);
}

function downloadApp() {
  window.location.href = 'http://www.babyfs.cn/app/download';
}

window.onload = function () {
  /*
  	第一屏 统计数字增长
   */
  var numNode = document.querySelector('.screen-one').querySelector('.statistics').querySelectorAll('span');
  numBounce(126, 200, numNode[0].children[1], '万', 2);
  numBounce(966, 1000, numNode[1].children[1], '+', 1);
  numBounce(267, 300, numNode[2].children[1], '+', 1);
  numBounce(178, 200, numNode[3].children[1], '+', 1);

  /*
  	第一屏 轮播
   */
  var swiper_one = new Swiper('.swiper-container-one', {
    loop: true,
    autoplay: 3500,
    // 分页器
    pagination: '.swiper-pagination',
    paginationClickable: true,
  });
  /*
  	第四屏 轮播
   */
  var swiper_four = new Swiper('.swiper-container-four', {
    loop: true,
    direction: 'vertical',
    spaceBetween: 35,
    slidesPerView: 'auto',
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    autoHeight: true
  });

  var swiper_forth = document.querySelector('.swiper-container-four');
  swiper_forth.onmouseover = function () {
    swiper_four.stopAutoplay();
  };
  swiper_forth.onmouseout = function () {
    swiper_four.startAutoplay();
  };

  /*
  	第五屏 轮播
   */
  var swiper_five = new Swiper('.swiper-container-five', {
    loop: false,
    autoplay: false,
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 20,
    onlyExternal: true,
    // slideToClickedSlide: true,
    // 前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });
};
/*
	第二屏 相关
 */

var screenTwoItems = document.querySelector('.screen-two').querySelectorAll('a');
for (let i = 0; i < screenTwoItems.length; i++) {
  var item = screenTwoItems[i];
  item.addEventListener('click', function (e) {
    e.preventDefault();
  }, false);
}

/*
	第三屏 相关
 */
screenTwoItems = document.querySelector('.screen-three').querySelectorAll('a');
var l1dl = document.querySelector('.screen-three').querySelector('.l1').querySelector('dl');
for (let i = 0; i < screenTwoItems.length; i++) {
  (function (arg) {
    screenTwoItems[arg].addEventListener('click', function (e) {
      e.preventDefault();
    }, false);
    screenTwoItems[arg].onmouseover = function () {
      if (arg !== 0) {
        l1dl.style.display = 'none';
      }
      screenTwoItems[arg].querySelector('dl').style.display = 'block';
    };
    screenTwoItems[arg].onmouseout = function () {
      screenTwoItems[arg].querySelector('dl').style.display = 'none';
    };
  })(i);
}
/*
	第五屏相关
 */

//视频地址
var srcVideo = [
  'http://live.babyfs.cn/Act-ss-mp4-ld/869db86dd87744009d49b19e558470d5/2_1.mp4',
  'http://live.babyfs.cn/Act-ss-mp4-sd/e44875e97b784e60807cb39226f75f26/2_2.mp4',
  'http://live.babyfs.cn/Act-ss-mp4-hd/84b5e7e579eb4018a8bd5b2ce95d2a15/2_3.mp4',
  'http://live.babyfs.cn/Act-ss-mp4-sd/9039b17a4d3e4a27979990db09689cbd/4_1.mp4',
  'http://live.babyfs.cn/Act-ss-mp4-hd/3902be3a31504fabad15b1b8b358eecf/4_2.mp4',
  'http://live.babyfs.cn/Act-ss-mp4-sd/b91a07305bc94ce494fbfd3b51b29fa8/4-4.mp4',
  'http://live.babyfs.cn/Act-ss-mp4-ld/2fcb7697ddc1402fb78d966341da40f2/6_1.mp4',
  'http://live.babyfs.cn/Act-ss-mp4-hd/911fa5e7245a49c0b3336fc19fcd1994/6_2.mp4',
  'http://live.babyfs.cn/Act-ss-mp4-sd/796e95a2ccdb44ac8fb64866f3ac856a/6_3.mp4'
];

//视频介绍
var strVideo = [
  '姓名：白依诺+夕夕</br>年龄：2岁4个月</br>班级：草莓105班',
  '姓名：刘子涵+Candy</br>年龄：两岁七个月</br>班级：草莓精品84班',
  '姓名：陆瑾瑜+小歪歪</br>年龄：1岁8个月</br>班级：樱桃46班',
  '姓名：林伊桐+桐桐</br>年龄：5岁</br>班级：苹果精品39班',
  '姓名：马一鸣+Summer</br>年龄：4岁3个月</br>班级：草莓43班',
  '姓名：许可+Coco</br>年龄：3岁十个月</br>班级：苹果46班',
  '姓名：李一豪+豪豪</br>年龄：五岁六个月</br>班级：苹果精品53班',
  '姓名：刘一然+一然</br>年龄：6岁</br>班级：苹果38班',
  '姓名：余翊萱+可可</br>年龄：六岁五个月</br>班级：苹果47班',
];

function checkVideo(e) {
  var screenFiveItems = document.querySelector('.screen-five').querySelector('.main').querySelectorAll('.swiper-slide');
  var videoSource = document.querySelector('.screen-five').querySelector('.right').querySelector('#oVideo').querySelector('source');
  var posterImg = document.querySelector('.screen-five').querySelector('.right').querySelector('.posterimg').querySelector('img');
  var videoPlayer = document.querySelector('.screen-five').querySelector('.right').querySelector('#oVideo');
  var videoStr = document.querySelector('.screen-five').querySelector('.right').querySelector('.message').querySelector('p');
  var playBtn = document.querySelector('.screen-five').querySelector('.right').querySelector('.playBtn').querySelector('img');
  for (var i = 0; i < screenFiveItems.length; i++) {
    var item = screenFiveItems[i].children[0];
    item.setAttribute('class', '');
  }
  e.target.parentNode.setAttribute('class', 'checked');
  playBtn.style.display = 'block';
  var pidID = e.target.id;
  switch (pidID) {
    case 'pic1':
      videoSource.src = srcVideo[0];
      videoStr.innerHTML = strVideo[0];
      posterImg.src = 'http://i.s.babyfs.cn/e57b535607894a6b915acc8fc586f6fc.png';
      break;
    case 'pic2':
      videoSource.src = srcVideo[1];
      videoStr.innerHTML = strVideo[1];
      posterImg.src = 'http://i.s.babyfs.cn/0ac6dc9113ca4ca5842cd2d02b154ce6.png';
      break;
    case 'pic3':
      videoSource.src = srcVideo[2];
      videoStr.innerHTML = strVideo[2];
      posterImg.src = 'http://i.s.babyfs.cn/90643ea71b484fc188a7ef3c74c3cbad.png';
      break;
    case 'pic4':
      videoSource.src = srcVideo[3];
      videoStr.innerHTML = strVideo[3];
      posterImg.src = 'http://i.s.babyfs.cn/e9b76782293e401bab7b38d87b2448f8.png';
      break;
    case 'pic5':
      videoSource.src = srcVideo[4];
      videoStr.innerHTML = strVideo[4];
      posterImg.src = 'http://i.s.babyfs.cn/9d02764fa69f4c4eb1efb2d0ab85a2b6.png';
      break;
    case 'pic6':
      videoSource.src = srcVideo[5];
      videoStr.innerHTML = strVideo[5];
      posterImg.src = 'http://i.s.babyfs.cn/5facce54bd2649cea0d99ce97608d959.png';
      break;
    case 'pic7':
      videoSource.src = srcVideo[6];
      videoStr.innerHTML = strVideo[6];
      posterImg.src = 'http://i.s.babyfs.cn/a2bc958750de4a0496e1fec32322656f.png';
      break;
    case 'pic8':
      videoSource.src = srcVideo[7];
      videoStr.innerHTML = strVideo[7];
      posterImg.src = 'http://i.s.babyfs.cn/8c4ee5c5ac24488b8c5bf2e2bee940d7.png';
      break;
    case 'pic9':
      videoSource.src = srcVideo[8];
      videoStr.innerHTML = strVideo[8];
      posterImg.src = 'http://i.s.babyfs.cn/1ffdf605bd4f4d72bccd569529ca63f4.png';
      break;
  }
  videoPlayer.load();
}

function playVideo(event) {
  var videoPlayer = document.querySelector('.screen-five').querySelector('.right').querySelector('#oVideo');
  var poster = document.querySelector('.screen-five').querySelector('.right').querySelector('.posterimg');
  videoPlayer.play();
  event.target.style.display = 'none';
  poster.style.display = 'none';
}


(function () {
  var height = window.innerHeight;
  var _body = document.querySelector('body');
  if (height > 800) {
    _body.setAttribute('class', 's');
    if (height >= 900) _body.setAttribute('class', 'l');
  } else {
    _body.setAttribute('class', 'xs');
  }
  // _body.setAttribute('class', height>900?'l':'s');
  var screenItems = document.querySelectorAll('.screen-item');
  for (var i = 0; i < screenItems.length; i++) {
    screenItems[i].style.height = height + 'px';
  }
  var screenBox = document.querySelector('.screen-box');
  var curIndex = 0;
  var sw = true;
  var btnOff = true;

  var next = document.querySelector('#next-screen');

  function shake() {
    btnOff = false;
    var mapItems = getArrayItems(Array.prototype.slice.call(document.querySelector('.map').querySelectorAll('li')), 5);
    for (var i = 0; i < mapItems.length; i++) {
      mapItems[i].style.display = 'block';
      addClass(mapItems[i], 'zoom-' + i);
    }

    setTimeout(function () {
      for (var i = 0; i < mapItems.length; i++) {
        mapItems[i].style.display = 'none';
        removeClass(mapItems[i], 'zoom-' + i);
      }
      setTimeout(function () {
        shake();
      }, 1000);
    }, 3000);
  }

  function wheel(type) {
    var videoPlayer = document.querySelector('.screen-five').querySelector('.right').querySelector('#oVideo');
    var playBtn = document.querySelector('.screen-five').querySelector('.right').querySelector('.playBtn').querySelector('img');
    playBtn.style.display = 'block';
    videoPlayer.pause();
    if (type > 0) {
      if (curIndex < 0) {
        curIndex++;
      }
    } else if (curIndex > -7) {
      curIndex--;
    }
    // console.log(curIndex);
    if (curIndex > -7) {
      screenBox.style.transform = 'translate3d(0px, ' + curIndex * height + 'px, 0px)';
      //for IE
      screenBox.style['msTransform'] = 'translateY(' + curIndex * height + 'px' + ')';
      //for firefox
      screenBox.style['MozTransform'] = 'translateY(' + curIndex * height + 'px' + ')';
      //不兼容IE
      screenBox.style.transition = 'all 1s ease';
      if (curIndex == -3 || curIndex == -5) {
        next.style.backgroundImage = 'url(http://i.s.babyfs.cn/c479a2e2254f4654898d093e6ff08349.png)';
      } else {
        next.style.backgroundImage = 'url(http://i.s.babyfs.cn/01b90f9df8d6440e9c201eaa76165bd4.png)';
      }
      if (curIndex == -2) {
        screenTwoItems[0].querySelector('dl').style.display = 'block';
      }
      if (curIndex == -6) {

        if (btnOff) {
          shake();
        }
      }
      next.setAttribute('class', 'act');
      setTimeout(function () {
        next.setAttribute('class', '');
      }, 1000);
    } else {
      // screenBox.style = 'transform: translate3d(0px, ' + -(7 * height + 360) + 'px, 0px); transition: all 1s ease;';
      screenBox.style.transform = 'translate3d(0px, ' + -(6 * height + 360) + 'px, 0px)';
      screenBox.style.transition = 'all 1s ease';
      next.setAttribute('class', 'hide');
    }
  }

  //随机数
  function getArrayItems(arr, num) {
    var temp_array = new Array();
    for (var index in arr) {
      temp_array.push(arr[index]);
    }
    var return_array = new Array();
    for (var i = 0; i < num; i++) {
      //判断如果数组还有可以取出的元素,以防下标越界
      if (temp_array.length > 0) {
        //在数组中产生一个随机索引
        var arrIndex = Math.floor(Math.random() * temp_array.length);
        //将此随机索引的对应的数组元素值复制出来
        return_array[i] = temp_array[arrIndex];
        //然后删掉此索引的数组元素,这时候temp_array变为新的数组
        temp_array.splice(arrIndex, 1);
      } else {
        //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
        break;
      }
    }
    return return_array;
  }
  //判断类名
  function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
  }
  //添加类名
  function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
      elements.className += ' ' + cName;
    }
  }
  //删除类名
  function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
      elements.className = elements.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ');
    }
  }

  document.addEventListener('mousewheel', function (e) {
    e.preventDefault();
    if (sw) {
      wheel(e.wheelDelta);
      sw = false;
      setTimeout(function () {
        sw = true;
      }, 1200);
    }
  }, false);

  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', function (e) {
      e.preventDefault();
      if (sw) {
        wheel(-e.detail);
        sw = false;
        setTimeout(function () {
          sw = true;
        }, 1200);
      }
    }, false);
  }

  next.addEventListener('click', function () {
    wheel(-1);
  }, false);

  window.addEventListener('resize', function (e) {
    height = window.innerHeight;
    if (height > 800) {
      _body.setAttribute('class', 's');
      if (height >= 900) _body.setAttribute('class', 'l');
    } else {
      _body.setAttribute('class', 'xs');
    }
    // _body.setAttribute('class', height>900?'l':'s');
    for (var i = 0; i < screenItems.length; i++) {
      screenItems[i].style.height = height + 'px';
    }
  }, true);

})();
