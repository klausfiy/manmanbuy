var brandtitleid = getQueryString('brandtitleid');
$(function(){
    console.log(brandtitleid)
    getbrandsProduct(brandtitleid);
})

function getbrandsProduct(brandtitleid) {
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        data:{
            'brandtitleid':brandtitleid,
            'pagesize':4
        },
        success: function(backData) {
            console.log(backData);
            var html = template('brandsProductTmp',backData);
            $('.product').html(html);
        }
    })
}


function getQueryString(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}
