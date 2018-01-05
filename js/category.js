$(function(){
    getfirstCategory();
    getSecondCategory(); 
    window.addEventListener('resize', function() {
        var windowWidth = document.documentElement.clientWidth;
        // console.log(windowWidth);
        var htmlfontSize = windowWidth / 10;
        document.querySelector('html').style.fontSize = htmlfontSize + 'px';
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
 // 设置下拉刷新图标
 $('.minirefresh-downwrap .downwrap-content p').first().removeClass().addClass('glyphicon glyphicon-refresh').css({top:-3,color:'#666'});

})

function getfirstCategory(){
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcategorytitle',
        success: function(data){
            // console.log(data);
            var html = template('getFirstCategoryTmp',data);
            $('#accordion').html(html);
        }
    })
}
function getSecondCategory(){
    $('#main').on('click','.panel-heading',function(){
        var id = $(this).data('id');
        // console.log(id);
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getcategory',
            data:{titleid:id},
            success: function(data){
                // console.log(data);
                var html = template('getSecondCategoryTmp',data);
                $('.panel-body').html(html);
            }

        })

    })
}