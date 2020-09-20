var logodis = document.querySelector(".logmenu");
var leftdis = document.querySelector('.left');

var flag = false;
logodis.addEventListener('click', function() {

    if (!flag) {

        leftdis.style.display = 'block'
        flag = true;
    } else {
        leftdis.style.display = 'none'
        flag = !flag;
    }
})

// 放大镜
$(function() {

    var magnifierConfig = {
        magnifier: "#magnifier1", //最外层的大容器
        width: 318, //承载容器宽
        height: 347, //承载容器高
        moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
        zoom: 5 //缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);

    /*magnifier的内置函数调用*/
    /*
    	//设置magnifier函数的index属性
    	_magnifier.setIndex(1);

    	//重新载入主图,根据magnifier函数的index属性
    	_magnifier.eqImg();
    */
});

// 商品介绍
$(".introright .cti .inr_t").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
    let index = $(this).index();
    // $("#ebook .ebook-left .con").eq(index).addClass("cur").siblings().removeClass("cur")
    let re = $(".intro_con").eq(index).show().siblings(".con").hide();

    console.log(re);
})

// 人气单品
$("#popularity .rec_u li").hover(function() {
        $(this).css({
            backgroundColor: "#e6e6e6"
        })
    }, function() {
        $(this).css({
            backgroundColor: ""
        })
    })
    // 看了又看
$("#introduction .rec_u li").hover(function() {
    $(this).css({
        backgroundColor: "#e6e6e6"
    })
}, function() {
    $(this).css({
        backgroundColor: ""
    })
})

// 加入购物车
$(function() {

    var re = $("#banner .magncenter .increase .sum")
    $("#banner .magncenter .increase .in_pone").click(function() {

        re.val(parseInt(re.val()) + 1);
        $("#banner .magncenter .increase .in_ptwo").removeAttr("disabled");

    })
    $("#banner .magncenter .increase .in_ptwo").click(function() {

        if (parseInt(re.val()) > 1) {
            re.val(parseInt(re.val()) - 1)
        } else {
            $("#banner .magncenter .increase .in_ptwo").removeAttr("disabled");
        }

    })

})