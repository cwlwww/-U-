var bannerData = [{
    title: '24小时不断电大课堂',
    src: './img/index/tbanner1.png'
},
{
    title: '内容不够，字数凑',
    src: './img/index/tbanner2.png'
},
{
    title: '内容不够，字数凑',
    src: './img/index/tbanner3.png'
},
{
    title: '内容不够，字数凑',
    src: './img/index/tbanner4.png'
},
{
    title: '内容不够，字数凑',
    src: './img/index/tbanner5.png'
}
];


var lesson = {
    online: [{
        title: '行政管理专业班1',
        src: './img/index/banner1.png',
        cont: '人教版',
        time: 23,
        isFree: true,
        num: 1100
    }, {
        title: '行政管理专业班2',
        src: './img/index/banner2.png',
        cont: '人教版',
        time: 23,
        isFree: false,
        num: 1100
    }, {
        title: '行政管理专业班3',
        src: './img/index/banner3.png',
        cont: '人教版',
        time: 23,
        isFree: true,
        num: 1100
    }, {
        title: '行政管理专业班4',
        src: './img/index/banner4.png',
        cont: '人教版',
        time: 22,
        isFree: true,
        num: 1100
    }, {
        title: '行政管理专业班5',
        src: './img/index/banner5.png',
        cont: '人教版',
        time: 33,
        isFree: true,
        num: 1100
    }, {
        title: '行政管理专业班7',
        src: './img/index/banner7.png',
        cont: '人教版',
        time: 44,
        isFree: true,
        num: 1100
    }, {
        title: '行政管理专业班6',
        src: './img/index/banner6.png',
        cont: '人教版',
        time: 33,
        isFree: true,
        num: 1100
    }, {
        title: '行政管理专业班8',
        src: './img/index/banner8.png',
        cont: '人教版',
        time: 44,
        isFree: true,
        num: 1100
    }],

    test: [{
        title: '2020年6月北京中考试题',
        src: './img/index/test1.png',
        cont: '北京',
        time: '初一',
        num: 1100
    },
    {
        title: '2020年6月北京中考试题',
        src: './img/index/test2.png',
        cont: '北京',
        time: '初一',
        num: 1100
    }, {
        title: '2020年6月北京中考试题',
        src: './img/index/test3.png',
        cont: '北京',
        time: '初一',
        num: 1100
    }, {
        title: '2020年6月北京中考试题',
        src: './img/index/test4.png',
        cont: '北京',
        time: '初一',
        num: 1100
    }, {
        title: '2020年6月北京中考试题',
        src: './img/index/test5.png',
        cont: '北京',
        time: '初一',
        num: 1100
    }, {
        title: '2020年6月北京中考试题',
        src: './img/index/test6.png',
        cont: '北京',
        time: '初一',
        num: 1100
    }
    ],
    good: [
        {
            title: '行政管理专业班',
            src: './img/index/good_banner1.png',
            cont: '天津',
            time: 23,
            isFree: true,
            num: 1100
        }, {
            title: '行政管理专业班2',
            src: './img/index/good_banner2.png',
            cont: '天津',
            time: 23,
            isFree: true,
            num: 1100
        }, {
            title: '行政管理专业班3',
            src: './img/index/good_banner3.png',
            cont: '天津',
            time: 23,
            isFree: true,
            num: 1100
        }, {
            title: '行政管理专业班4',
            src: './img/index/good_banner4.png',
            cont: '天津',
            time: 23,
            isFree: true,
            num: 1100
        }, {
            title: '行政管理专业班5',
            src: './img/index/good_banner5.png',
            cont: '天津',
            time: 23,
            isFree: true,
            num: 1100
        }, {
            title: '行政管理专业班6',
            src: './img/index/good_banner6.png',
            cont: '天津',
            time: 23,
            isFree: true,
            num: 1100
        }
    ]
}


var tbanner = document.getElementById('tbanner');
var lb = document.getElementById('lb');
bannerData.forEach(function (item, index) {
    tbanner.innerHTML += '<li><img src=' + item.src + '></li>';
    lb.innerHTML += '<p>' + item.title + '</p>';
    console.log(lb);
});
console.log(lb);
var li = tbanner.querySelectorAll('li');
var p = lb.querySelectorAll('p');
// var oBox = document.querySelector('.box');
var n = 0; // 标识图片位置
p[0].className = 'active'


// 自动轮播
var timer = setInterval(auto, 1500);
function auto() {
    n++;
    if (n == li.length) {
        n = 0;
    }
    for (var i = 0; i < li.length; i++) {
        bufferMove(li[i], { opacity: 0 }, 10);
        p[i].className = '';
    }
    bufferMove(li[n], { opacity: 100 }, 10);
    p[n].className = 'active';
}

tbanner.onmouseover = function () {
    clearInterval(timer);
}

tbanner.onmouseout = function () {
    timer = setInterval(auto, 1500);
}
for (var j = 0; j < p.length; j++) {
    p[j].index = j;
    p[j].onmouseover = function () {
        for (var i = 0; i < li.length; i++) {
            bufferMove(li[i], { opacity: 0 }, 10);
            p[i].className = '';
        }
        console.log(this.index);
        bufferMove(li[this.index], { opacity: 100 }, 10);
        p[this.index].className = 'active';
    }
}

var tu1 = document.getElementById('tu1');

lesson.online.forEach(function (item, index) {
    item.free = item.isFree ? '免费' : '收费';
    tu1.innerHTML += '<li><div class="img" style="background:url(' + item.src + ');">' +
        '<p class="bb">' + item.cont + '</p>' +
        '<p class="study">' + item.num + '人正在学习</p></div>' +
        '<p class="mc">' + item.title + '</p>' +
        '<p class="ks">' + item.time + '课时</p>' +
        '<a class="free">' + item.free + '</a>' + '</li>'
});

var tu2 = document.getElementById('tu2');

lesson.test.forEach(function (item, index) {
    tu2.innerHTML += '<li><div class="img" style="background:url(' + item.src + ');">' + ' <p class="bb">' + item.cont + '</p>' +
        '<p class="study">' + item.num + '人正在学习<span>初一</span></p></div>' +
        '<p class="mc">' + item.title + '</p><a class="free">去考试</a>' + '</li >'
});

var tu3 = document.getElementById('tu3');

lesson.good.forEach(function (item, index) {
    item.free = item.isFree ? '免费' : '收费';
    tu3.innerHTML += '<li><div class="img" style="background:url(' + item.src + ');">' +
        '<p class="bb">' + item.cont + '</p>' +
        '<p class="study">' + item.num + '人正在学习</p></div>' +
        '<p class="mc">' + item.title + '</p>' +
        '<p class="ks">' + item.time + '课时</p>' +
        '<a class="free">' + item.free + '</a>' + '</li>'
});