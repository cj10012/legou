//文档加载事件
$(function() {



    // 电子书模块选项卡
    $(".bleft .btitle .bmenu p").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        let index = $(this).index();
        // $("#ebook .ebook-left .con").eq(index).addClass("cur").siblings().removeClass("cur")
        let re = $(".bcont .con").eq(index).show().siblings(".con").hide();


    })



    /* 新书畅销榜
      鼠标移入：显示当前的div 
                隐藏其它的div 
                隐藏自己的标题
                显示其它的标题
    */
    $("#book .bright ul li").mouseenter(function() {
        $(this).find("div").show();
        $(this).find(".title").hide()
        $(this).siblings().find(".exa_bo").hide()
        $(this).siblings().find(".title").show()
    })


    // 顶部搜索栏
    $(window).scroll(function() {
        //    console.log(1);
        let st = $("html,body").scrollTop();
        if (st >= 400) {
            $(".topsearch").stop().slideDown();
            $("#header .sech form").appendTo(".topsearch>div")
        } else {
            $(".topsearch").stop().slideUp();
            $(".topsearch>div  form").appendTo("#header .sech")

        }
    })


    // 回到顶部

    $(window).scrollTop(function() {
        $('.gototop').click(function() {
            let $jumpBox = $('.sctop').eq($(this).index());
            let top = $jumpBox.offset().top;
            $("html,body").stop().animate({ scrollTop: top }, 1000)

        })
    })



})

// 推广商品奶嘴
var gencont = document.querySelectorAll('.gencont li');
// console.log(gencont);
for (let i = 0; i < gencont.length; i++) {
    gencont[i].addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f2f2f2'
    })
    gencont[i].addEventListener('mouseleave', function() {
        this.style.backgroundColor = ''
    })
}


// 楼层
// var bg = ["#93d46f", "#ff6600", "#9a7dbd", "#d18a90", "#d8ebf9"];
$('#floor .iconc li').hover(function() {
    //从自己的自定义属性中取出颜色值　
    // 　鼠标移入向左边移　40px        
    $(this).css({
        "backgroundColor": $(this).attr("bgc"),
        "backgroundPositionX": -40,
        width: 40

    });


}, function() {
    // 鼠标移出向左边移　0px
    $(this).css({
        "backgroundColor": '',
        "backgroundPositionX": 0,
        width: 0
    });
}).click(function() {

    let $jumpBox = $(".floor").eq($(this).index());

    let top = $jumpBox.offset().top;

    $("html,body").stop().animate({ scrollTop: top }, 300)
})

// 二维码
var qrc_d = document.querySelector('.qrc_d');
var qrc_er = document.querySelector('.qrc_er');
qrc_d.addEventListener('mouseenter', function() {
    qrc_er.style.display = 'block';
})
qrc_d.addEventListener('mouseleave', function() {
    qrc_er.style.display = 'none';
})