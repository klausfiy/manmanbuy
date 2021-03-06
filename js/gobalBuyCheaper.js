$(function(){
    getGoodsList();
    previousPage();
    nextPage();
    closeAlert();
    changeSelect();
});

// 生成产品列表
function getGoodsList(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        data:{
            pageid:1
        },
        success:function(backData){
           
           ajaxPage(backData);
        
        }
    })
}
var pageid = 1;
// 点击上一页
function previousPage(){
    $("#moreProduct .left-perv").on("click",function(){
        
        if(pageid<=1){
            $(".alert-dismissible").css({"display":"block"});
            $("#alertConetnt").html("已经是第一页了，再上一页，臣妾做不到啊");
            pageid = 1;
             return;
        }else{
            $(".alert-dismissible").css({"display":"none"});            
            pageid--;
            $("#pageCate option:selected").text(pageid);
            console.log(pageid);
        }
        $.ajax({
            url:"http://127.0.0.1:9090/api/getmoneyctrl",
            data:{pageid:pageid},
            success:function(backData){
                ajaxPage(backData);
            }

            });
    });
}

// 点击下一页
function nextPage(){
    $("#moreProduct .right-next").on("click",function(){
               
        if(pageid>13){
            $(".alert-dismissible").css({"display":"block"});
            $("#alertConetnt").html("已经是最后一页了，再下一页，咱就出国了");
            return;
            pageid = 13;
        }else{
            $(".alert-dismissible").css({"display":"none"});                        
        }

        pageid++;
        $("#pageCate option:selected").text(pageid);        
        console.log(pageid); 
        $.ajax({
            url:"http://127.0.0.1:9090/api/getmoneyctrl",
            data:{pageid:pageid},
            success:function(backData){
                ajaxPage(backData);
            }

        })
    });
}

// ajax处理函数，调用模板函数
function ajaxPage(data){
     // 处理数据
     for(var i = 0 ; i<data.result.length ; i++){
        
            var temp = data.result[i].productComCount.split("有");
            var temp1 = temp[1].split("人评论");
            data.result[i].productComCount = temp1[0];
        }
    // 渲染模板
    var html = template("goodsTmp",data);
    $("#main").html(html);
}


// 点击关闭提示框

function closeAlert(){
    $("#closeAlert").on("click",function(){
        $(this).parent().parent().css({display:"none"});
    })
}

function changeSelect(){
    $("#pageCate").on("change",function(){

        var selectNum = $("#pageCate option:selected").val();
        pageid = selectNum;
        $.ajax({
            url:"http://127.0.0.1:9090/api/getmoneyctrl",
            data:{pageid:pageid},
            success:function(backdata){
                ajaxPage(backdata)
            }
        })
    })
    
}