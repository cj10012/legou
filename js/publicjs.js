// 轮播
// banner
// 抽取的轮播

function lunbo(selector, boxh, w, h) {
    $(selector).slidebox({
        boxh: boxh, //盒子的高度
        w: w, //图片的宽度
        h: h, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12, //控制按钮宽度
        controlsH: 12, //控制按钮高度
        radius: 6 //控制按钮圆角度数
    });
}

$(function() {
    lunbo('#slider', 400, 1000, 400);
    lunbo('#book .pptbox', 226, 328, 200);
    lunbo('#clothing .pptbox', 334, 440, 335);
    lunbo('#movement .pptbox', 334, 440, 335);
    lunbo('#children .pptbox', 334, 440, 335);
    lunbo('#proSider', 400, 1200, 400);
    lunbo('.prolistbox', 520, 1200, 520);

})


$("#exclusive .btitle ul>li").mouseenter(function() {

    $(this).addClass('active').siblings().removeClass("active");
    let index = $(this).index();
    $('#exclusive .proexccon .proex').eq(index).addClass("con").siblings().removeClass('con');

})