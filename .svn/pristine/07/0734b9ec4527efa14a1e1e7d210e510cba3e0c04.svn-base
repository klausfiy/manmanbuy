
var currentPage = 0;
var totalPage = 0;
$(function(){
    getData();
    getPage();
    getPrevPage();
    getNextPage();
    goDetail();
    goBack();
    getHtmlSize()
});
function getData(pageid){
    $.ajax({
        url: 'http://mmb.ittun.com/api/getmoneyctrl',
        data: {
            pageid: pageid
        },
        success: function(data){
            console.log(data);
            totalPage = Math.ceil(data.totalCount / data.pagesize);
            var arr = [];
            for(var i = 0; i < totalPage; i++){
                arr.push(i);
            }
            data.total = arr;
            data.pageId = pageid || 0;
            var html = template('productTmp',data);
            var select = template('pageTmp',data);
            $('#select').html(select);
            $('.product').html(html);
        }
    })
}
function getPage(){
    $('#select').on('change',function(){
        currentPage = $(this).val().split('/');
        currentPage = currentPage[0] - 1;
        getData(currentPage);
        scrollTo(0,0);
    })
    $('#select').on('click',function(){
        if($('.category .arr').hasClass('glyphicon-triangle-bottom')){
            $('.category .arr').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
        }else {
            $('.category .arr').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
        }
    })
}
function getPrevPage(){
    $('.prev').on('click',function(){
        currentPage--;
        if(currentPage <= 0) currentPage = 0;
        getData(currentPage);
    })
}
function getNextPage(){
    $('.next').on('click',function(){
        currentPage++;
        if(currentPage >= totalPage - 1) currentPage = totalPage - 1;
        getData(currentPage);
    })
}
function goDetail(){
    $('.product').on('click','.media',function(){
        var productId = $(this).data('productid');
        window.location.href = 'promotionDetail.html?productId='+ productId;
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