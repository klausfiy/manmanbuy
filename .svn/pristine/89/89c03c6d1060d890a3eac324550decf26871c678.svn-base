$(function() {
    getTopList();
})


function getTopList() {
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrandtitle',
        success: function(backData) {
            console.log(backData);
            var html = template('TopListTmp',backData);
            $('.topList-brands ul').html(html);
        }
    })
}