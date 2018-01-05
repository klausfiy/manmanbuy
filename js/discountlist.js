$(function(){
    getDiscountList();
    modelSlide();
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
    // 设置下拉刷新图标
    $('.minirefresh-downwrap .downwrap-content p').first().removeClass().addClass('glyphicon glyphicon-refresh').css({top:-3,color:'#666'});
})
//获取url中的参数并且解决中文乱码问题
function getQueryString(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}
var id = getQueryString('id');
function getDiscountList(){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        data:{couponid:id},
        success:function(data){
            console.log(data);
            var html = template('getDiscountListTmp',data);
            $('.discount-list .media-list').html(html);
        }
    })
}
function modelSlide(){
    $('.discount-list .media-list').on('click','a',function(){
        var id = $(this).data('id');
        var img = $(this).data('img');
        console.log([{id:id,img:img}]);
        var html = template('modelSlideTmp',[{id:id,img:img}]);
        $('#carousel-example-generic').html(html);
        // $('.carousel-inner .item').first().addClass('active').siblings().removeClass('active');
        // $('.carousel-indicators li').first().addClass('active').siblings().removeClass('active');
    })
}