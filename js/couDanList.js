
var shopId = 0,areaId = 0;
$(function(){
    goBack();
    getShop();
    getShopArea();
    getShopId();
    getShopAreaId();
    getProduct(shopId,areaId);
    getHtmlSize();
    arrChange()
});
function getShop(){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getgsshop',
        success: function(data){
            var html = template('shopTmp',data);
            $('#search .shop').html(html);
        }
    })
}
function getShopArea(){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getgsshoparea',
        success: function(data){
            var html = template('shopAreaTmp',data);
            $('#search .shop-area').html(html);
        }
    })
}
function getProduct(shopId,areaId){
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getgsproduct',
        data: {
            shopid: shopId,
            areaid: areaId
        },
        success: function(data){
            console.log(data);
            var html = template('detailTmp',data);
            $('#main .row').html(html);
        }
    })
}
function goBack(){
    $('#header .icon-back').on('click',function(){
        history.go(-1);
    })
}
function getShopId(){
    $('#search .shop').on('click','li',function(){
        shopId = $(this).data('shopid');
        var text = $(this).text();
        getProduct(shopId,areaId);
        $('#search .shop-title').text(text);
    });
    $('#search .open').on('mouseenter','li',function(){
        console.log('hh');
        $(this).addClass('active').siblings().removeClass('active');
    })
}
function getShopAreaId(){
    $('#search .shop-area').on('click','li',function(){
        areaId = $(this).data('areaid');
        var text = $(this).text().slice(0,2);
        getProduct(shopId,areaId);
        $('#search .area-title').text(text);
    });
    $('#search .shop-area').on('mouseenter','li',function(){
        console.log('hh');
        $(this).addClass('active').siblings().removeClass('active');
    })
}
function getHtmlSize(){
    $(window).on('resize',function(){
        var size = document.documentElement.clientWidth;
        $('html').css('fontSize',size/10+'px');
    }).trigger('resize');
}
function arrChange(){
    $('#search .product-shop').on('click',function(){
        if($(this).find('.arr').hasClass('glyphicon-triangle-bottom')) {
            $(this).find('.arr').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
            $(this).siblings().find('.arr').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
        }else {
            $(this).find('.arr').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom')
        }
    });
    $('#search .product-area').on('click',function(){
        if($(this).find('.arr').hasClass('glyphicon-triangle-bottom')) {
            $(this).find('.arr').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
            $(this).siblings().find('.arr').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
        }else {
            $(this).find('.arr').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom')
        }
    });
    $('#search .product-price').on('click',function(){
        if($(this).find('.arr').hasClass('glyphicon-triangle-bottom')) {
            $(this).find('.arr').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
            $(this).siblings().find('.arr').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
        }else {
            $(this).find('.arr').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom')
        }
    })
}