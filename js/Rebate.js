$(function(){
    upData();
    $("#returntop").click(function () {
        console.log(123);
        var speed=200;//�������ٶ�
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
                // �����¼�

                miniRefresh.endDownLoading();
            }
        },
        up: {

            callback: function() {
                // �����¼�

                // ע�⣬����Ĭ������ǿ��������Զ����صģ���������ʧ��ʱ�������endUpLoading(true)����ֹ��������
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

