$(function(){
    getProductDetail();
    goBack();
    getHtmlSize()
})
function getProductId(key){
    var reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
}
function getProductDetail(){
    var productid = getProductId('productId');
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data: {
            productid: productid
        },
        success: function(data){
            var html = template('productTmp',data);
            $('.product').html(html);
            $('.bottom span').html('> &nbsp;'+data.result[0].productName);
        }
    })
}
function goBack(){
    $('#header .icon-back').on('click',function(){
        history.go(-1);
    })
}
function getHtmlSize(){
    $(window).on('resize',function(){
        var size = document.documentElement.clientWidth;
        $('html').css('fontSize',size/10+'px');
    }).trigger('resize');
}
