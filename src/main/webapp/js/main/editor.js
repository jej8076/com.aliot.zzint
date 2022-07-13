let convertData = {};

function convert(){
    let orgContent = $('#orgContent').val();
    convertData.orgContent = orgContent;
    $.ajax({
        url : "/app/convert"
        , type : 'GET'
        , contentType : 'application/json'
        , async : false
        , data : convertData
        , success : function (data) {
            console.log('responseData :::: ' + data)
        }
        , error : function (error) {
            console.log(error);
        }
        , complete : function () {
            // test
        }
    });
}

function frontAddBtn(){
    $('#modalTitle').text('Enter the character to add before the line');
    let bodyHtml = '<input type="text" class="form-control" id="modalBodyInput">'
    $('#modalBody').append(bodyHtml)
    $('#modalBodyInput').css('width', '435px');
    $('#editorModal').modal('show');
}

function saveChanges(){
    let frontAddText = $('#modalBodyInput').val();
    $('#frontAdd').val(frontAddText);
    $('#editorModal').modal('hide');
    convertData.frontAdd = frontAddText;
}

$(document).ready(function(){
    $('#orgContent').css('height', 700);
    $('#becameContent').css('height', 700);
});