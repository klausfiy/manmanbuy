$(function(){
    getProductList();
    getNavCategory();
    openCategory();
});

// 获取到商品明细
function getProductList(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        success:function (data){
            // console.log(data.result);
            // 对后台数据进行切割，只要取到数字即可
            for(var i = 0 ; i < data.result.length; i++){
                var temp = data.result[i].productComCount;
                var temp1 = temp.split("有");
                var temp2 = temp1[1].split("人评论")

                data.result[i].productComCount =  temp2[0]; 
            }
            var html = template("productListTmp",data);
            $("#discount .product-list").html(html);
        }
    })
}

// 获取到商品分类导航
function getNavCategory(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getindexmenu",
        success:function (data){
            console.log(data.result);
            var html = template("navCategoryTmp",data);
            $("#nav .nav-categroy .row").html(html)
        }
    })
}

function openCategory(){
    // var div = document.getElementsByClassName("target");
    // div.__proto__ = Array.prototype;
    // console.log(div);
    // var target = [];
    // var target = div[0];
    // console.log(target);
    var i = 0;
    $("#nav .nav-categroy .row").on("click",".target",function(){
        // console.log("nidaye");
        i++;
        if(  i % 2 == 1){
            $("#nav .nav-categroy").css({height:"360px",overflow:"visible"});
        }else{
            console.log("-")
            $("#nav .nav-categroy").css({height:"240px",overflow:"hidden"});
        }
      
    })
}