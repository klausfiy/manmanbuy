$(function(){
    getlink();
    $("#returntop").click(function () {
        console.log(123);
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
    $('.back-left').click(function(){
        window.location.href="index.html";
    })
})


function getlink() {
    $.ajax({
        url:'http://mmb.ittun.com/api/getsitenav',
        success:function(data){
            console.log(data);
            var html=template('linkTmp',data);
            $('#main .link').html(html);
        }
    })
}