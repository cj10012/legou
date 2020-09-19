// 扫码和账号切换
var qrcode = document.querySelector('.contitle .qr');
var account = document.querySelector('.contitle .ac');
var conscan = document.querySelector('.cons .conscan');
var conlogn = document.querySelector('.cons .conlogn');



// console.log(qrcode, account);
qrcode.addEventListener('click', function() {

    conscan.style.display = 'block';
    conlogn.style.display = 'none';

})
account.addEventListener('click', function() {

    conscan.style.display = 'none';
    conlogn.style.display = 'block';

})


// 登录二维码显示隐藏
let consImg_one = document.querySelector('.consImg_one');
let consImg_two = document.querySelector('.consImg_two')
    // console.log(cons);
consImg_one.addEventListener('mouseenter', function() {
    this.style.left = -10 + 'px'
    consImg_two.style.display = 'block'
    startMove(consImg_one, {
        left: -10
    }, 5000, 'easeOut');

})
consImg_one.addEventListener('mouseleave', function() {
    this.style.left = 69 + 'px'
    consImg_two.style.display = 'none'
    startMove(consImg_one, {
        left: 69
    }, 5000, 'easeOut');
})

var icon_del = document.querySelector('.icon_del');
var userName = document.querySelector('#user');
var cloImg = document.querySelector('.cloImg');
var pasw = document.querySelector('#pasw');


// 删除图片显示隐藏事件
userName.addEventListener('input', function() {
    let str = this.value;

    if (str.length > 0) {
        icon_del.style.display = 'block';
    } else {
        icon_del.style.display = 'none';
    }

})

// 删除值
icon_del.addEventListener('click', function() {
    userName.value = '';
    this.style.display = 'none';
})

// 图片切换事件
let cImgflag = false;
cloImg.addEventListener('click', function() {
    if (!cImgflag) {
        cloImg.src = './images/open.png';
        pasw.type = 'text';
    } else {
        cloImg.src = './images/close.png';
        pasw.type = 'password';
    }
    cImgflag = !cImgflag;
})



// 登录验证
// $().ready(function() {
//     // 在键盘按下并释放及提交后验证提交表单
//     $("#myform").validate({
//         rules: {

//             user: {
//                 required: true,
//                 myUser: 2
//             },
//             pasw: {
//                 required: true,

//                 myPwd: 5
//             },


//         },
//         messages: {
//             user: {
//                 required: "请输入用户名",

//             },
//             pasw: {
//                 required: "请输入密码",

//             },

//         }
//     })


//     jQuery.validator.addMethod("myUser", function(value, element) {
//         var tel = /^[A-Za-z0-9]{4,10}$/;
//         return this.optional(element) || (tel.test(value));
//     }, "请正确填写您的用户名");
//     jQuery.validator.addMethod("myPwd", function(value, element) {
//         var tel = /^[A-Za-z0-9]{6,12}$/;
//         return this.optional(element) || (tel.test(value));
//     }, "请正确填写您的密码");


// });