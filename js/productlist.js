var logodis = document.querySelector(".logmenu");
var leftdis = document.querySelector('.left');
console.log(leftdis);
// console.log(logodis);
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


/* 新书畅销榜
     鼠标移入：显示当前的div 
               隐藏其它的div 
               隐藏自己的标题
               显示其它的标题
   */
$("#newBook .newright ul li").mouseenter(function() {
    $(this).find("div").show();
    $(this).find(".title").hide()
    $(this).siblings().find(".exa_bo").hide()
    $(this).siblings().find(".title").show()
})


// 猜你喜欢
let index = 0;
let singeBoxHeight = $('#likebox .pro-reo .likecont').outerHeight(true);
console.log(" 单个盒子的高度", singeBoxHeight);
$('#likebox .likelse .bmenu').click(function() {
    index++;
    let st = -(index * singeBoxHeight);
    console.log(st);

    if (index === 3) {
        index = 0;
        $('#likebox  .pro-reo .box').css('top', index);


    } else {
        $('#likebox .pro-reo .box').css('top', st);
    }
})