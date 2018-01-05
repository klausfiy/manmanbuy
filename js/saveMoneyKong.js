$(function(){

    getSaveMoneyList();
    getPagination();
    
})
var page = $('.pagination .selectPage').val();
function getSaveMoneyList(){
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        data: {pageid:page},
        success:function(data){
            console.log(data);
            var html = template('getSaveMoneyTmp',data);
            $('.media-list').html(html);
            
        }
    })
}
function getPagination(){
    // 上一页
    $('.pagination .prev-page').on('click',function(){
        page --;
        if(page<=0){
            page=1;
            return;
        }
        $('.pagination .selectPage').val(page);
        getSaveMoneyList(); 
        
    })
    // 下一页
    $('.pagination .next-page').on('click',function(){
        page ++;
        if(page>=15){
            page=15;
            return;
        }
        $('.pagination .selectPage').val(page);        
        getSaveMoneyList();

    })
    // console.log(page);
    $('.pagination .selectPage').on('change',function(){
        page = $(this).val();
        getSaveMoneyList();     
        // scrollTo(0, 0);
        document.body.scrollTop = document.documentElement.scrollTop = 0; 
    })
}