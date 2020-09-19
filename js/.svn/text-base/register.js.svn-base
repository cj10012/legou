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
            phoneauth: {
                required: true,
                myphoneauth: 6
            }

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
            phoneauth: "请输入手机验证码",
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
    jQuery.validator.addMethod("myphoneauth", function(value, element) {
        var tel = /^[0-9]{6}$/;
        return this.optional(element) || (tel.test(value));
    }, "请您输入正确的手机验证码");
    jQuery.validator.addMethod("myphone", function(value, element) {
        var tel = /^[1][3,4,5,7,8][0-9]{9}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入您的手机号");


});