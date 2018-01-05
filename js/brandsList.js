var brandtitleid = getQueryString('brandtitleid');
$(function() {
    console.log(brandtitleid);
    getbrandsList(brandtitleid);
})

function getbrandsList(brandtitleid) {
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrand',
        data:{
            'brandtitleid':brandtitleid
        },
        success: function(backData) {
            console.log(backData);
            var html = template('brandsListTmp',backData);
            $('.brandsList-brands ul').html(html);
        }
    })
}


function getQueryString(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}
