$(function() {
    // 全选
    $('.selall').click(function() {
        let bool = $(this).prop('checked');
        $(".singcheck,.selall").prop('checked', bool);
        totalPrice();
        totalNum()

    })


    // 单个选项选择全选
    $('table .singcheck').click(function() {
        let singNum = $('table .singcheck:checked').length;
        let singAll = $('table .singcheck').length;
        if (singNum === singAll) {
            $(".selall").prop('checked', true);
        } else {
            $(".selall").prop('checked', false);

        }
        totalPrice();
        totalNum()

    })

    // 加减操作
    // 增加
    $('#check table tbody .addbtn').click(function() {
            let num = $(this).siblings('.count').val();
            num++;

            $(this).siblings('.count').val(num);
            // 计算商品数量


            singleTotalPrice(this, num)
            totalPrice();
            totalNum()


        })
        // 减少
    $('#check table tbody .reducebtn').click(function() {
            let num = $(this).siblings('.count').val();
            if (num > 1) {
                num--;
                $(this).siblings('.count').val(num);
                // 计算商品数量

            }

            singleTotalPrice(this, num)
            totalPrice();
            totalNum()


        })
        // 删除单个商品
    $('table tr td .delcl').click(function() {
            $(this).parent().parent().remove();
            totalPrice();
            totalNum()
        })
        // 删除全部商品
    $('table tr td .delall').click(function() {
        $('table .singcheck:checked').each(function(index, dom) {
            $(this).parent().parent().remove();
        })
        totalPrice();
        totalNum()
    })


    // 改变数量
    $('#check table tbody .count').keyup(function() {
        let num = $(this).val();
        if (isNaN(num)) {
            $(this).val(1);
            num = 1;
        }
        if (num > 200) {
            $(this).val(200)
            num = 200;
        }

        singleTotalPrice(this, num)
        totalPrice();
        totalNum()

    })

    function singleTotalPrice(obj, num) {
        // 计算小计
        let singleprice = $(obj).parent().siblings('.singleprice').html();
        let singleTotalPrice = singleprice * num;
        $(obj).parent().siblings(".singleTotalPrice").html(singleTotalPrice.toFixed(2));

    }
    // 总价
    function totalPrice() {
        var sum = 0;

        $('table .singcheck:checked').each(function(index, dom) {
                let singleTotalPrice = $(this).parent().siblings('.singleTotalPrice').html();

                sum += parseFloat(singleTotalPrice);


            })
            // 得到总价
        $('.totalprice').html(sum.toFixed(2));

    }
    // 总数
    function totalNum() {

        var counts = 0;
        $('table tr .singcheck:checked').each(function(index, dom) {
                let singletotalNum = $(this).parent().siblings().find('.count').val();

                counts += parseInt(singletotalNum);
            })
            // 得到总数

        $('.totalnum').html(counts);
    }



    // 猜你喜欢
    $("#popularity .rec_u li").hover(function() {
        $(this).css({
            backgroundColor: "#e6e6e6"
        })
    }, function() {
        $(this).css({
            backgroundColor: ""
        })
    })

})