let convertData = {};

function convert(){
    convertData['orgContent'] = $('#orgContent').val();
    $.ajax({
        url : "/app/convert"
        , type : 'GET'
        , contentType : 'application/json'
        , async : false
        , data : convertData
        , success : function (data) {
            $('#becameContent').val(data);
        }
        , error : function (error) {
            console.log(error);
        }
        , complete : function () {
            // test
        }
    });
}

function functionAddBtn(type, btnClass){
    if(!isEmpty(convertData[type]) && convertData[type].length > 0){
        $('.btn.btn-primary.select').prop('class', 'btn btn-outline-' + btnClass + ' select');
        $('#modalBodyInput').val('');
        delete convertData[type];
    }else{
        $('#editorModal').html(modalForm(type, btnClass));

        $('#modalTitle').text('Enter the character to add before the line');
        if($('#modalBodyInput').length <= 0) {
            let bodyHtml = '<input type="text" class="form-control" id="modalBodyInput">'
            $('#modalBody').html(bodyHtml)
            $('#modalBodyInput').text(convertData[type]);
            $('#modalBodyInput').css('width', '435px');
        }
        $('#editorModal').modal('show');

        // modal fade 애니메이션이 끝나기 전에 포커스 시도하는 것을 방지
        setTimeout(() => $('#modalBodyInput').focus(), 500);

        $('#modalBodyInput').on('keyup', function(key) {
            if(key.keyCode === 13){
                $('#saveChangeBtn').trigger('click');
            }
        });
    }
}

function saveChanges(type, btnClass){
    convertData[type] = $('#modalBodyInput').val();
    closeModal();
    if(!isEmpty(convertData[type]) && convertData[type].length > 0){
        $('.btn.btn-outline-' + btnClass + '.select').prop('class', 'btn btn-' + btnClass + ' select');
    }
}

function closeModal(){
    $('#modalBodyInput').off('keyup');
    $('#editorModal').modal('hide');
    // modal fade 애니메이션이 끝나기 전에 empty 되는 것을 방지
    setTimeout(() => $('#editorModal').empty(), 1000);
}

function modalForm(type, btnClass){
    let modal = '';
    modal += '<div class="modal-dialog" role="document">';
    modal += '    <div class="modal-content">';
    modal += '        <div class="modal-header">';
    modal += '            <h5 class="modal-title" id="modalTitle"></h5>';
    modal += '            <button type="button" class="btn-close" onClick="closeModal()">';
    modal += '                <span aria-hidden="true"></span>';
    modal += '            </button>';
    modal += '        </div>';
    modal += '        <div class="modal-body" id="modalBody"></div>'
    modal += '        <div class="modal-footer">'
    modal += '            <button type="button" class="btn btn-primary" id="saveChangeBtn" onClick="saveChanges(\'' + type + '\', \'' + btnClass + '\')"> Save changes';
    modal += '            </button>';
    modal += '            <button type="button" class="btn btn-secondary" onClick="closeModal()">Close</button>';
    modal += '        </div>';
    modal += '    </div>';
    modal += '</div>';
    return modal;
}

$(document).ready(function(){
    $('#orgContent').css('height', 700);
    $('#becameContent').css('height', 700);

});