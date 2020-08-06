var window_height= document.documentElement.clientHeight;
window.onresize=function () {window_height=document.documentElement.clientHeight;};
//模块一
var app_left=document.getElementsByClassName('app-left');
var app_tip=document.getElementsByClassName('app-tip');
var app_right=document.getElementsByClassName('app-right');
//模块二
var chat_down=document.getElementsByClassName('chat-down');
var chat_phone=document.getElementsByClassName('chat-phone');
var chat_logo=document.getElementsByClassName('chat-logo');
var chat_members=document.getElementsByClassName('chat-members');
var boss_img=document.getElementsByClassName('boss-img');
var company_img=document.getElementsByClassName('company-img');
//模块三
var direcruit_left=document.getElementsByClassName('direcruit-left');
var direcruit_inner=document.getElementsByClassName('direcruit-inner');
var direcruit_tip=document.getElementsByClassName('direcruit-tip');
var direcruit_right=document.getElementsByClassName('direcruit-right');
//模块四
var company_down=document.getElementsByClassName('company-down');
var company_computere=document.getElementsByClassName('company-computere');
var company_logo=document.getElementsByClassName('company-logo')[0].getElementsByTagName('li');
//模块五
var decent_right=document.getElementsByClassName('decent-right');
var decent_phone=document.getElementsByClassName('decent-phone');
var decent_cards=document.getElementsByClassName('decent-cards')[0].getElementsByTagName('li');
var decent_left=document.getElementsByClassName('decent-left');
window.onscroll = function(My_vanwee,animation){
    var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    //模块二
    if (((getOffsetTop(chat_down[0]) - _scrollTop) > 600 && (getOffsetTop(chat_down[0]) - _scrollTop) < 700) || (getOffsetTop(chat_down[0]) - _scrollTop) < 600) {
        vanwee(chat_down,"fadeInDown",_scrollTop);
        vanwee(chat_phone,"fadeInUp",_scrollTop);
        vanwee(chat_logo,"bounceIn",_scrollTop);
        vanwee(chat_members,"members",_scrollTop);
        vanwee2(company_img,"company",_scrollTop);
        vanwee2(boss_img,"boss",_scrollTop);
    }
    // 模块三
    if (((getOffsetTop(direcruit_left[0]) - _scrollTop) > 600 && (getOffsetTop(direcruit_left[0]) - _scrollTop) < 700) || (getOffsetTop(direcruit_left[0]) - _scrollTop) < 600) {
        vanwee(direcruit_left,"fadeInLeft",_scrollTop);
        vanwee(direcruit_inner,"chatScroll",_scrollTop);
        vanwee(direcruit_tip,"tip",_scrollTop);
        vanwee(direcruit_right,"fadeInRight",_scrollTop);
    }
    // 模块四
    if (((getOffsetTop(company_down[0]) - _scrollTop) > 600 && (getOffsetTop(company_down[0]) - _scrollTop) < 700) || (getOffsetTop(company_down[0]) - _scrollTop) < 600) {
        vanwee(company_down,"fadeInDown",_scrollTop);
        vanwee(company_computere,"fadeInUp",_scrollTop);
        vanwee2(company_logo,"logo",_scrollTop);
    }
    // 模块五
    if (((getOffsetTop(decent_right[0]) - _scrollTop) > 600 && (getOffsetTop(decent_right[0]) - _scrollTop) < 700) || (getOffsetTop(decent_right[0]) - _scrollTop) < 600) {
        vanwee(decent_right,"fadeInRight",_scrollTop);
        vanwee(decent_phone,"fadeInRight",_scrollTop);
        vanwee2(decent_cards,"card",_scrollTop);
        vanwee(decent_left,"fadeInLeft",_scrollTop);
    }
};

function getOffsetTop(ele) {
    var rtn = ele.offsetTop;
    var o = ele.offsetParent;
    while(o!=null) {
            rtn += o.offsetTop;
            o = o.offsetParent;
    }
    return rtn;
}

function vanwee(My_vanwee,animation,_scrollTop){
    for (var k=0;k<My_vanwee.length;k++){
        if (My_vanwee[k].classList.contains(animation)==false){
            My_vanwee[k].classList.add(animation);
        }
    }
}

function vanwee2(My_vanwee,animation,_scrollTop){
    for (var k=0;k<My_vanwee.length;k++){
        animations = animation + (k + 1);
        if (My_vanwee[k].classList.contains(animations)==false){
            My_vanwee[k].classList.add(animations);
        }
    }
}

// 滚动条等于0时执行第一屏效果
function my_animation(My_vanwee,animation) {
    var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    for (var k=0;k<My_vanwee.length;k++) {
        if (My_vanwee[k].classList.contains(animation)==false && _scrollTop>= getOffsetTop(My_vanwee[k]) - window_height && _scrollTop<= getOffsetTop(My_vanwee[k])){
            My_vanwee[k].classList.add(animation);
        }
    }
}

my_animation(app_left,"fadeInLeft");
my_animation(app_tip,"tip");
my_animation(app_right,"fadeInRight");