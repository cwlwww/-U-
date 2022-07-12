var videoDetail = {
    poster: '../img/videoDetail/san.png',
    src: 'https://flv2.bn.netease.com/8e5f1f852aad995942c2a88e003145003682f1f553c25725676eed76e1c2a86dd36fba3c613d7a3991b4dedbb2cb4d91a9c875ab14ef19731408e548f32db4063f3f0e7e650eaf39a0d905df17eb7b96bfed4f841a2a6a0456936b726b6064b0dfde4c2ced9487f0b11487caeecd0b28d065f0db1d4d99a8.mp4',
    title: '初三数学班',
    year: '2019年秋季',
    grade: '初三数学',
    time: 15,
    duration: '09月30日—12月20日',
    period: '2020年12月20日',
    end: 1616206481238,
    day: 33,
    h: 23,
    m: 23,
    s: 23,
    price: 199,
    isFree: true,
    singlePrice: 199,
    group: 99,
    teacher: '李晓明',
    teacherTitle: '小U课堂高级讲师',
    introduce: '多年IT行业从业经验，精通常用的Web开发技术;熟悉主流的CMS、商城、论坛 等PHP开源产品，具有丰富的建站及二次开发经验，多个大型ERP系统的开发实践经验;精通常用的PHP开发框架，对服务器架构及服务器日常运维等方面有一 定的研究。'
};

var classList = [{
    title: '第一章：公开课',
    num: 4,
    list: [
        { name: '第0节：化学的研究对象和研究方法', time: '2020.12.10 20：00' },
        { name: '第1节：离子反应', time: '2020.12.10 20：00' },
        { name: '第2节：氧化还原反应', time: '2020.12.10 20：00' },
        { name: '第3节：钠及其化合物', time: '2020.12.10 20：00' }
    ]
}, {
    title: '第二章：公开课',
    num: 4,
    list: [
        { name: '第0节：化学的研究对象和研究方法', time: '2020.12.10 20：00' },
        { name: '第1节：离子反应', time: '2020.12.10 20：00' },
        { name: '第2节：氧化还原反应', time: '2020.12.10 20：00' },
    ]
}, {
    title: '第三章：公开课',
    num: 4,
    list: [
        { name: '第0节：化学的研究对象和研究方法', time: '2020.12.10 20：00' },
        { name: '第1节：离子反应', time: '2020.12.10 20：00' },
    ]
}, {
    title: '第四章：公开课',
    num: 4,
    list: [
        { name: '第0节：化学的研究对象和研究方法', time: '2020.12.10 20：00' },
        { name: '第1节：离子反应', time: '2020.12.10 20：00' },
        { name: '第2节：氧化还原反应', time: '2020.12.10 20：00' },
        { name: '第3节：钠及其化合物', time: '2020.12.10 20：00' }
    ]
}, {
    title: '第五章：公开课',
    num: 4,
    list: [
        { name: '第0节：化学的研究对象和研究方法', time: '2020.12.10 20：00' },
        { name: '第1节：离子反应', time: '2020.12.10 20：00' },
        { name: '第2节：氧化还原反应', time: '2020.12.10 20：00' },
        { name: '第3节：钠及其化合物', time: '2020.12.10 20：00' }
    ]
}, {
    title: '第六章：公开课',
    num: 4,
    list: [
        { name: '第0节：化学的研究对象和研究方法', time: '2020.12.10 20：00' },
        { name: '第1节：离子反应', time: '2020.12.10 20：00' },
        { name: '第2节：氧化还原反应', time: '2020.12.10 20：00' },
        { name: '第3节：钠及其化合物', time: '2020.12.10 20：00' }
    ]
}];

var classImgList = [
    '../img/videoDetail/detail.png'
];

var teacher = document.getElementById('teacher');
var palyerwin = document.getElementById('vediowin');
var vediocon = document.getElementById('vediocon');

/* <video src="https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4" controls></video> */


function sette(item) {
    vediowin.onclick = function(){
        vediowin.style.background = 'black'
        vediowin.innerHTML = '<video src="'+item.src+'" controls autoplay></video>'
    }
    item.free = item.isFree ? '免费' : '收费';
    vediocon.innerHTML += `<p class="vt">[${item.year}]${item.title}</p>
    <p class="vc">年级科目：${item.grade}</p>
    <p class="vc">课时数量：${item.time}课时</p>
    <p class="vc">开课时间：${item.duration}</p>
    <p class="vc">有效时期：${item.period}</p>
    <br>
    <br>
    <p class="vc">距报名截止仅剩</p>
    <p class="vc"><span>${item.day}</span>天<span>${item.h}</span>时<span>${item.m}</span>分<span>${item.s}</span>秒
    </p>
    <a class="jg">&yen${item.singlePrice}</a>
    <a class="fs">${item.free}</a>
    <a class="buy"><span>&yen${item.singlePrice}单独购买</span>|<span>&yen${item.group}拼团</span></a>`
    teacher.innerHTML += '<p id="tt">授课师资</p>' +
        '<div id="touxiang" style="background: url(' + item.poster + ') center;"></div>' +
        '<div class="teacher jj">' +
        '<p>' + item.teacher + '</p><p>' + item.teacherTitle + '</p></div>' +
        '<p class="teacher js">' + item.introduce + '</p>'
};
sette(videoDetail);


var lession = document.getElementById('lession');

function getlession(dat) {
    dat.forEach(function (item, index) {
        var str1 = '';
        var str = item.list;
        for (var i = 0; i < str.length; i++) {
            str1 += '<dd style="display:none"><span class="iconfont icon-24gf-playCircle"></span>' + str[i].name + '<span class="ltime">' + str[i].time + '</span><a href="" class="lplayer">播放视频</a></dd>'
        }

        lession.innerHTML += '<dl><dt>' + item.title + '<span class="iconfont icon-zhengsanjiao"></span></dt>' + str1 + '</dl>'
    })
}
getlession(classList);

var dt = document.getElementsByTagName('dt');
var dl = document.getElementsByTagName('dl');
var zk = document.getElementById('zk');
var zkarr = []
zk.tag = 'false'

for (var i = 0; i < dt.length; i++) {
    dt[i].index = i;
    zkarr.push(false);
    console.log(dt[i].tag);
    dt[i].onclick = function () {
        console.log(this.tag);
        if (zkarr[this.index] == true) {
            this.getElementsByTagName('span')[0].className = 'iconfont icon-daosanjiao';
            var arr = dl[this.index].querySelectorAll('dd')
            console.log(arr);
            for (var j = 0; j < arr.length; j++) {
                arr[j].style.display = 'none'
            }
            zkarr[this.index] = false;
            console.log(zkarr);
            choicehuishou()
        }
        else {
            this.getElementsByTagName('span')[0].className = 'iconfont icon-zhengsanjiao';
            var arr = dl[this.index].querySelectorAll('dd')
            for (var j = 0; j < arr.length; j++) {
                arr[j].style.display = 'block'
            }
            zkarr[this.index] = true;
            choicehuishou()
        }
    }
    zk.onclick = function () {
        console.log(zk.tag);
        if (zk.tag == 'false') {
            for (var i = 0; i < dt.length; i++) {
                dt[i].getElementsByTagName('span')[0].className = 'iconfont icon-zhengsanjiao';
                var arr = dl[i].querySelectorAll('dd');
                for (var j = 0; j < arr.length; j++) {
                    arr[j].style.display = 'block'
                }
                zkarr[i] = true;
            }
            zk.tag = 'true';
            zk.innerHTML = '点击收回隐藏全部'
        }
        else if (zk.tag == 'true') {
            for (var i = 0; i < dt.length; i++) {
                dt[i].getElementsByTagName('span')[0].className = 'iconfont icon-daosanjiao';
                var arr = dl[i].querySelectorAll('dd');
                for (var j = 0; j < arr.length; j++) {
                    arr[j].style.display = 'none'
                }
                zkarr[i] = false;
            }
            zk.tag = 'false';
            zk.innerHTML = '点击展开查看全部'
        }
    }
    function choicehuishou(){
        if (zkarr.indexOf(false) == -1) {
            zk.tag = 'true';
            zk.innerHTML = '点击收回隐藏全部'
        }
        else if (zkarr.indexOf(true) == -1) {
            zk.tag = 'false';
            zk.innerHTML = '点击展开查看全部'
        }
    }
}


var kcml = document.getElementById('kcml');
var kcxq = document.getElementById('kcxq');

kcxq.onclick = function () {
    for(var i = 0; i < dl.length; i++){
        dl[i].style.display = 'none';
    }
    this.style.color = '#fff'
    this.style.background = '#80C4AE'
    kcml.style.color = '#333333';
    kcml.style.background = '#fff'
    lession.style.backgroundImage = `url("${classImgList[0]}")`;
    lession.style.height = '1650px'
}
kcml.onclick = function () {
    for(var i = 0; i < dl.length; i++){
        dl[i].style.display = 'block';
    }
    this.style.color = '#fff'
    this.style.background = '#80C4AE'
    kcxq.style.color = '#333333';
    kcxq.style.background = '#fff'
    lession.style.backgroundImage = 'none'
    lession.style.height = '100%';
}