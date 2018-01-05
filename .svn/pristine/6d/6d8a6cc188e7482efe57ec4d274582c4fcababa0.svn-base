$(function(){
    var tmpId = window.location.href;
    var id = (tmpId.split("?")[1]).split("=")[1];
    console.log(id);
   $.ajax({
    url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
    data:{productid : id},
    success:function(data){
        console.log(data.result);
        var html =template("productListTmp",data);
        $("#main").html(html);
    }
   })
});