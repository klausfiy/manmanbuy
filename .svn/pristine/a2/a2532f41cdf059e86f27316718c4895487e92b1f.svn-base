
var id= getQueryString('id');
$(function(){
    UpdateDetail();
    $("#returntop").click(function () {
        console.log(123);
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
    $('.back-left').click(function(){
        window.location.href="Rebate.html";
    })
});

function UpdateDetail(){
    $.ajax({
        url:'http://mmb.ittun.com/api/getdiscountproduct',
        data:{
            'productid':id
        },
        success:function(data){
            console.log(data);
            var html=template('productDetail',data);

            $('#main .top').html(html);
        }
    })
}

function getQueryString(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}