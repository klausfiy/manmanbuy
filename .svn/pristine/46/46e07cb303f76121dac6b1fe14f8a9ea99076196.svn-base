$(function () {
    // 轮播图滑动插件初始化
    var mySwiper = new Swiper('.swiper-container', {
        // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
        direction: 'horizontal',
        // 是循环是否支持无缝轮播
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'slide',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        // 自动轮播
        autoplay: 1000,
        // 解决自动轮播的时候手动后无法再次自动轮播
        autoplayDisableOnInteraction: false
    });

    // iscroll插件初始化
    var myScroll = new IScroll('#wrapper', {
        /*支持水平滚动*/
        scrollX: true,
        // 禁止垂直滚动
        scrollY: false,
        // 支持鼠标滚动
        mouseWheel: false
    });

    getBaicaijiaTitle();
    getbaicaijiaProduct(0);
});

function getBaicaijiaTitle() {
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        success: function (backData) {
            var html = template('baicaijiaTitleTmp', backData);
            $('.baicaijiaTitle ul').html(html);
            
            $('.baicaijiaTitle ul').on('click',"li",function() {
                $('.baicaijiaTitle ul li').removeClass('active');
                $(this).addClass('active');
                var titleId = $(this).data('title');
                getbaicaijiaProduct(titleId);
            })
        }
    })
};


function getbaicaijiaProduct(titleId) {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            data:{
                'titleid':titleId
            },
            success:function(backData) {
                // console.log(backData);
                var html = template('baicaijiaproductTmp',backData);
                $('#product-list').html(html);
            }
        })
}