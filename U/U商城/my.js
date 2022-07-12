/**
 * 功能：获取非行间样式的函数
 * @param {element} elem 标签
 * @param {string} attr 样式名
 * @returns 非行间样式
 */
function getStyle(elem, attr){
    if(elem.currentStyle){
        // IE 中
        // .后边的跟的是变量，使用[]代替
        var w = elem.currentStyle[attr];
    }else{
        // 标准
        var w = getComputedStyle(elem)[attr];
    }
    // 把结果返回出去
    return w;
}

/**
 * 运动函数
 * @param {element} elem 运动元素
 * @param {string} attr 运动属性
 * @param {number} step 步长
 * @param {number} target 目标值
 */
// var timer = null; // 必须是全局的 破坏了函数封装性，整体性
function move(elem, attr, step, target){
    // 6.步长优化：当前值<目标值 ? 前进(正值) : 为后退(负值)
    var cur = parseInt(getStyle(elem, attr)); // 当前值
    cur < target ? step = step : step = -step;

    // 5.先清除之前的，再添加新的
    clearInterval(elem.timer);
    
    // 7.把定时器id作为运动元素的自定义属性添加
    elem.timer = setInterval(function(){
        // 3.计算运动值 原来的值-10
        var l = parseInt(getStyle(elem, attr)) + step; // 500px

        // 4.到达目标值 做优化
        if((step<0 && l<= target) || (step>0 && l>=target)){
            l = target;
            // 清除定时器
            clearInterval(elem.timer);
        }

        // 2.移动元素位置
        // .后边是变量，使用[]代替
        elem.style[attr] = l + 'px';
    }, 50);
}

// 补0函数
function fullZero(n){
    n = n < 10 ? '0'+n : n;
    // 返回出去
    return n;
}
// 获取最大值到最小值之间的随机整数
function getRandom(min, max){
    var n = parseInt( Math.random() * (max-min+1) + min );
    // 返回出去
    return n;
}
/**
 * 获取四位随机验证码
 * @returns 验证码
 */
function getCode(){
    var str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    var code = ''; // 验证码

    for(var i = 1; i<=4; i++){
        // 获取一个随机下标 0, str.length-1
        var n = getRandom(0, str.length-1);
        code += str[n];
    }
    // 返回需要的内容
    return code;
}
/**
 * 绑定事件
 * @param {element} elem 添加事件的元素
 * @param {string} type 事件类型
 * @param {function} fun 事件处理函数
 */
function bind(elem, type, fun){
    if( elem.addEventListener ){
    // 标准
        elem.addEventListener(type, fun);
    }else{
        // IE
        elem.attachEvent('on'+type, fun);
    }
}
// 取消事件
function unbind(elem, type, fun){// elem-元素 type-事件类型
    // 兼容
    if(elem.removeEventListener){
        elem.removeEventListener(type, fun);
    }else{
        elem.detachEvent('on'+type, fun);
    }
}
/**
 * 添加滚轮事件
 * @param {element} elem 添加事件的元素
 * @param {function} upFun 滚轮向上滚动时的处理函数
 * @param {function} downFun 滚轮向下滚动时的处理函数
 */
function wheel(elem, upFun, downFun) {// upFun, downFun :是函数，把函数作为参数传入
    // 添加滚轮事件
    // 标准、IE: onmousewheel
    elem.onmousewheel = scroll;

    // ff:通过事件绑定添加
    if (elem.addEventListener) {
        elem.addEventListener('DOMMouseScroll', scroll);
    }

    function scroll(ev) {
        console.log('滚动');
        var e = window.event || ev;

        var tag; // true-上  fasel-下
        if (e.wheelDelta) {
            // 标准 IE： 上120  下-120
            tag = e.wheelDelta > 0 ? true : false;
        } else {
            // ff: 上-3  下3
            tag = e.detail < 0 ? true : false;
        }

        // 最后根据tag值做不同的处理
        if (tag) {
            // 上   
            upFun(); // upFun = function up(){console.log('往上进行放大'); }
        } else {
            // 下
            downFun();// 
        }
    }
}
// 
/**
 * 封装一个缓冲运动的函数
 * @param {element} elem 运动元素
 * @param {object} json 运动属性: 目标值
 * @param {number} xs 缩放系数
 * @param {function} callback 回调函数 可选
 */
function bufferMove(elem, json, xs, callback){
    // 5.开启之前先清除
    clearInterval(elem.timer);

    // 把timer作为运动元素的自定义属性添加
    elem.timer = setInterval(function(){
        var tag = true;

        // 运动多属性 
        for(var attr in json){
            // console.log(attr, json[attr]); // attr-运动属性  json[attr]-目标值

            // 4.计算步长：(目标值 - 当前值)/缩放系数
            // 对于透明度做判断
            if(attr == 'opacity'){
                var cur = parseInt( getStyle(elem, attr)*100 );
            }else{
                var cur = parseInt( getStyle(elem, attr) );
            }
            var step = (json[attr] - cur)/xs;
            // 前进：向上取整   后退：向下取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            // 2.计算运动值
            var l = cur + step;

            // 1.移动元素 
            // 判断 是否为透明度
            if(attr == 'opacity'){
                elem.style[attr] = l/100; // 透明度没有px单位
            }else{
                elem.style[attr] = l + 'px';
            }

            // b:挨个验证 运动值是否和目标值相等  
            if(l != json[attr]){
                // 没有到达目标 
                tag = false;
            }
        }
        
        // c.挨个验证完之后，根据tag的值判断
        if(tag){ // 全部到达目标
            clearInterval(elem.timer);

            // 动画运动结束
            // callback一般作为可选值
            callback && callback();
        }
    }, 40);
}
// 声明一个防抖函数
function debounce(fun, wait){ // fun-防抖处理的函数  wait -等待时间ms
    var timer = null; // 通过闭包模拟全局变量

    return function(){
        // 开启定时器之前先清除
        clearTimeout(timer);

        // 延迟一段时间去执行
        timer = setTimeout(function(){
            fun();
        }, wait);
    }
}

// 声明一个节流函数
function throttle(fun, wait){// fun-需要节流处理的函数 wait-等待时间
    var tag = false; // 标识  true-有事件 false-没有事件

    // 通过闭包模拟全局变量
    return function(){
        // 事件触发时，判断当前是否有事件，没有事件时-才触发
        if(!tag){ // !tag=true  tag=false
            // 处理事件
            setTimeout(function(){
                fun();
                // 事件处理完毕，没有事件了，标识更改
                tag = false;
            }, wait);

            // 有事件在处理，更改标识
            tag = true;
        }
    }
}

function SwitchTab(parent){
    // 直接在this上添加属性和方法
    // 1.把标签作为属性添加  
    this.oBtn = parent.querySelectorAll('button');
    this.oDiv = parent.querySelectorAll('div');

    // 2.声明一个入口方法
    this.init = function(){
        // 在this指向正确时，提前存储一份
        var _this = this;
        // 1.添加点击事件
        for(var i = 0; i<this.oBtn.length; i++){
            // 3.添加自定义索引
            this.oBtn[i].index = i;

            this.oBtn[i].onclick = function(){
                // console.log(this); // 事件处理函数中  -> this指向触发事件的对象

                //调用切换选项卡的功能
                // console.log(this.index, '下标');
                _this.change(this.index);  // 
            }
        } 
    }
    this.init(); // 调用入口方法

    // 声明一个切换选项卡的函数
    this.change = function(index){
        // console.log(index,'接受的参数');
        // 4.清空样式
        for(var j = 0; j < this.oDiv.length; j++){
            this.oDiv[j].style.display = 'none';
            this.oBtn[j].className = '';
        }
        
        // 2.显示对应的div  下标i
        // console.log(this.index, '标签'); // undefined   此处构造函数中的this指向实例化的对象，不是标签，获取不到自定义索引
        this.oDiv[index].style.display = 'block';

        // 5.按钮样式变化
        this.oBtn[index].className = 'active';
    }
}
