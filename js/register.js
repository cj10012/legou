// 表单验证

$().ready(function() {
    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({
        rules: {

            username: {
                required: true,
                myUser: 2
            },
            pwd: {
                required: true,

                myPwd: 5
            },
            pwds: {
                required: true,

                mypwds: 5,
                equalTo: "#pwd"
            },
            phone: {
                required: true,
                digits: "只能输入数字",
                myphone: 11
            },
            auth: {
                required: true,

            },
            checkbox: {
                required: true
            },
            // phoneauth: {
            //     required: true,
            //     myphoneauth: 6
            // }

        },
        messages: {
            username: {
                required: "请输入用户名",

            },
            pwd: {
                required: "请输入密码",

            },
            pwds: {
                required: "再次输入密码",
                equalTo: "两次密码输入不一致"
            },
            phone: {
                required: "请输入11位手机号"
            },
            auth: "请输入验证码",
            // phoneauth: "请输入手机验证码",
            checkbox: ""

        }
    })


    jQuery.validator.addMethod("myUser", function(value, element) {
        var tel = /^[A-Za-z0-9]{4,10}$/;
        return this.optional(element) || (tel.test(value));
    }, "请正确填写您的用户名");
    jQuery.validator.addMethod("myPwd", function(value, element) {
        var tel = /^[A-Za-z0-9]{6,12}$/;
        return this.optional(element) || (tel.test(value));
    }, "请正确填写您的密码");
    jQuery.validator.addMethod("mypwds", function(value, element) {
        var tel = /^[A-Za-z0-9]{6,12}$/;
        return this.optional(element) || (tel.test(value));
    }, "请与您上面输入的密码一致");
    // jQuery.validator.addMethod("myphoneauth", function(value, element) {
    //     var tel = /^[0-9]{6}$/;
    //     return this.optional(element) || (tel.test(value));
    // }, "请您输入正确的手机验证码");
    jQuery.validator.addMethod("myphone", function(value, element) {
        var tel = /^[1][3,4,5,7,8][0-9]{9}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入您的手机号");


});


// 注册按钮
$("#contreg p .cbox").click(function() {
    let bool = $(this).prop("checked");
    if (bool) {
        $("#contreg p .subl").prop('disabled', false);
        $("#contreg p .subl").addClass('bcg')
    } else {
        $("#contreg p .subl").prop('disabled', true);
        $("#contreg p .subl").addClass('bkg').removeClass('bcg')
    }
})


// 获取随机图形码


$(function() {
    var show_num = [];
    draw(show_num);

    $("#canvas").on('click', function() {
        draw(show_num);
    })
    $(".subl").on('click', function() {
        var val = $(".input-val").val().toLowerCase();
        var num = show_num.join("");
        if (val == '') {
            alert('请输入验证码！');
        } else if (val == num) {
            alert('提交成功！');
            $(".input-val").val('');
            draw(show_num);

        } else {
            alert('验证码错误！请重新输入！');
            $(".input-val").val('');
            draw(show_num);
        }
    })
})

function draw(show_num) {
    var canvas_width = $('#canvas').width();
    var canvas_height = $('#canvas').height();
    var canvas = document.getElementById("canvas"); //获取到canvas的对象，演员
    var context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
    var aCode = sCode.split(",");
    var aLength = aCode.length; //获取到数组的长度

    for (var i = 0; i <= 3; i++) {
        var j = Math.floor(Math.random() * aLength); //获取到随机的索引值
        var deg = Math.random() * 30 * Math.PI / 180; //产生0~30之间的随机弧度
        var txt = aCode[j]; //得到随机的一个内容
        show_num[i] = txt.toLowerCase();
        var x = 10 + i * 20; //文字在canvas上的x坐标
        var y = 20 + Math.random() * 8; //文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
    }
    for (var i = 0; i <= 5; i++) { //验证码上显示线条
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    for (var i = 0; i <= 30; i++) { //验证码上显示小点
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}

function randomColor() { //得到随机的颜色值
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}


// 手机验证码获取