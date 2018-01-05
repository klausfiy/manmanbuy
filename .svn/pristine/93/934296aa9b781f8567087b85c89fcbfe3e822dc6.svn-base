$(function(){
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
    getCategoryDetail();
    getComment();
 // 设置下拉刷新图标
 $('.minirefresh-downwrap .downwrap-content p').first().removeClass().addClass('glyphicon glyphicon-refresh').css({top:-3,color:'#666'});
})
//获取url中的参数并且解决中文乱码问题
function getQueryString(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}
var id = getQueryString('productid');
console.log(id);
function getCategoryDetail(){
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproduct',
        data:{productid:id},   
        success: function(data){
            console.log(data);
            var html = template('getCategoryDetailTmp',data)
            $('.product .product-list').html(html);
        }

    })

}
function getComment(){
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproductcom',
        data:{productid:id},   
        success: function(data){
            console.log(data);
            var html = template('getCommentTmp',data)
            $('.comment-list .media-list').html(html);
        }

    })

}