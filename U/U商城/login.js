;(function(){
    var login = document.getElementById('log_in');
var logout = document.getElementById('log_out');
var log_box = document.getElementById('log');
var logout_box = document.getElementById('logout');
var onlog = document.getElementById('onlogin');
var onlogout = document.getElementById('onlogout');
var log_btn = log_box.getElementsByClassName('iconfont icon-guanbi')[0];
var logout_btn = logout_box.getElementsByClassName('iconfont icon-guanbi')[0];

login.onclick = function () {
    log_box.style.display = 'block';
}
log_btn.onclick = function () {
    log_box.style.display = 'none';
}

logout.onclick = function () {
    logout_box.style.display = 'block';
}
logout_btn.onclick = function () {
    logout_box.style.display = 'none';
}
onlogout.onclick = function () {
    log_box.style.display = 'none';
    logout_box.style.display = 'block';
}
onlogin.onclick = function () {
    log_box.style.display = 'block';
    logout_box.style.display = 'none';
}


var rename = logout_box.getElementsByClassName('name')[0]
var repass = logout_box.getElementsByClassName('password')[0]
var rerepass = logout_box.getElementsByClassName('password agin')[0]
var yzm = logout_box.querySelector('#yanzhengma');
var yanzhengma = logout_box.querySelector('.yanzhengma');
var tipp = logout_box.querySelectorAll('.tipp');
yzm.innerHTML = getCode();

var inname = log_box.getElementsByClassName('name')[0]
var inpass = log_box.getElementsByClassName('password')[0]
var inbtn = log_box.querySelector('#btnin');
var intipp = log_box.querySelectorAll('.tipp');

var reg = /^[0-9]{11}$/;
var regpass = /^[a-z0-9]{6,20}$/;
var arr = []

logout_box.onclick = function () {
    var target = event.target || event.srcElement;

    if (target.id == 'yanzhengma') {
        target.innerHTML = getCode();
    }
    else if (target.className == 'name') {
        target.onblur = function () {
            if (reg.test(target.value)) {
                target.style.borderColor = '#ccc';
                arr[0] = true;
                tipp[0].style.opacity = 0;
            } 
            else {
                target.style.borderColor = 'red';
                console.log(tipp);
                tipp[0].style.opacity = 1;
                arr[0] = false;
            }
        }
    }

    else if (target.className == 'password') {
        target.onblur = function () {
            if (regpass.test(target.value)) {
                target.style.borderColor = '#ccc';
                arr[1] = true;
                tipp[1].style.opacity = 0;
            } 
            else {
                target.style.borderColor = 'red';
                tipp[1].style.opacity = 1;
                arr[1] = false;
            }
        }
    }

    else if (target.className == 'password agin') {
        target.onblur = function () {
            console.log(repass.value);
            if (target.value == repass.value && target.value != '') {
                target.style.borderColor = '#ccc';
                arr[2] = true;
                tipp[2].style.opacity = 0;
            } 
            else {
                target.style.borderColor = 'red';
                tipp[2].style.opacity = 1;
                arr[2] = false;
            }
        }
        arr.push(target.value == repass.value)
    }
    else if (target.className == 'yzm') {
        target.onblur = function () {
            console.log(yzm.innerHTML);
            if (target.value.toLowerCase() == yzm.innerHTML.toLowerCase()) {
                target.style.borderColor = '#ccc';
                arr[3] = true;
                tipp[3].style.opacity = 0;
            } 
            else {
                target.style.borderColor = 'red';
                tipp[3].style.opacity = 1;
                arr[3] = false;
            }
        }
    }   
    else if(target.id == 'btnin'){
        if(arr[0] && arr[1] && arr[2] && arr[3]){
            alert('注册成功');
            obj = {
                'name': rename.value,
                'password': repass.value,
            } 
            var logarr = JSON.parse(localStorage.getItem('user'));
            if(logarr){
                logarr.push(obj);
                localStorage.setItem('user', JSON.stringify(logarr));  
            }
            else{
                localStorage.setItem('user', JSON.stringify([obj]));  
            }
            logout_box.style.display = 'none'
            log_box.style.display = 'block'
        }
        else{
            alert('注册失败');
        }
        console.log(logarr);
    }
}

var loglist = document.querySelector('#loglist');
var username = loglist.querySelector('#username');
console.log(username);
log_box.onclick = function () {
    var target = event.target || event.srcElement;
    logarr = JSON.parse(localStorage.getItem('user'));
    console.log(logarr);
    if (target.id == 'btnin') {
        for(var i = 0; i < logarr.length; i++){
            console.log(logarr[i].name == inname.value);
            if(logarr[i].name == inname.value && logarr[i].password == inpass.value){
                alert('登录成功');
                intipp[0].style.opacity = 0;
                intipp[1].style.opacity = 0;
                log_box.style.display = 'none';
                location.reload()
                localStorage.setItem('lg', true);  
                localStorage.setItem('username', logarr[i+1].name);
                return;
            }
        }
        intipp[1].style.opacity = 1;
        alert('登录失败');
    }
    if(target.className=='name'){
        target.onblur = function(){
            if(reg.test(inname.value) == false){
                intipp[0].style.opacity = 1;
            }
            else if(reg.test(inname.value)){
                intipp[0].style.opacity = 0;
            }
        }
    }
    if(target.className=='password'){
        target.onblur = function(){
            if(regpass.test(inpass.value) == false){
                intipp[1].style.opacity = 1;
            }
            else if(regpass.test(inpass.value)){
                intipp[1].style.opacity = 0;
            }
        }
    }
}

function getCode() {
    var str = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var code = ''; 

    for (var i = 1; i <= 4; i++) {
        var n = getRandom(0, str.length - 1);
        code += str[n];
    }
    return code;
}
console.log(getCode());

var logimg = document.querySelector('#logimg');
var logwin = document.querySelector('#login');
var logquit = loglist.querySelector('#quit');

var lg = localStorage.getItem('lg');
console.log(lg);
if(lg == 'true'){
    // loglist.style.display = 'inline-block';
    logimg.style.display = 'block';
    logwin.style.display = 'none';
    username.innerHTML = localStorage.getItem('username');
}
logimg.onmouseover = function(){
    loglist.style.display = 'inline-block';
}
loglist.onmouseleave = function(){
    loglist.style.display = 'none';
}
logquit.onclick = function(){
    location.reload()
    localStorage.setItem('lg', false);
    loglist.style.display = 'none';
}


})();