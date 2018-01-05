$(function(){
    upData();
    $("#returntop").click(function () {
        console.log(123);
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });

    $('.back-left').click(function(){
        window.location.href="index.html";
    })

    var miniRefresh = new MiniRefresh({
        container: '#minirefresh',
        down: {
            callback: function() {
                // 下拉事件

                miniRefresh.endDownLoading();
            }
        },
        up: {

            callback: function() {
                // 上拉事件

                // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
                miniRefresh.endUpLoading(true);
            }
        }
    });
})

function upData(){
    $.ajax({
        url:'http://mmb.ittun.com/api/getinlanddiscount',
        success:function(data){
           console.log(data);
          var html=template('discount',data);

          $('#main .commodity').html(html);
        }
    })
}

