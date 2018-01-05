$(function(){
    getDiscount();
})

function  getDiscount(){
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcoupon',
        success: function(data){
            console.log(data);
            var html = template('getDiscountTmp',data);
            $('#main .container .row').html(html);
        }

    })

}