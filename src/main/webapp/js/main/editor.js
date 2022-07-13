$(document).ready(function(){
	$('#orgContent').css('height', 700);
    $('#becameContent').css('height', 700);
});

function convert(){
    $.ajax({
        url : "/app/convert"
        , type : 'GET'
        , contentType : 'application/json'
        , dataType : 'json'
        , async : false
        , data : {
            content : 'ttteeesssttt'
        }
        , success : function (data) {
            alert(data);
        }
        , error : function (error) {
            console.log(error);
        }
        , complete : function () {
            // test
        }
    });
}