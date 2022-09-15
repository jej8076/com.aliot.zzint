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

/**
 * type에 따라 다르게 열리는 공통 popup window
 * @param type
 * @param btnClass
 * @extra globalMessageJson : message.properties를 json형식으로 받아온 변수
 */
function popupModal(type, btnClass){
    if(!isEmpty(convertData[type]) && convertData[type].length > 0){
        $('.btn.btn-' + btnClass + '.select').prop('class', 'btn btn-outline-' + btnClass + ' select');
        $('#modalBodyInput').val('');
        delete convertData[type];
    }else{
        $('#editorModal').html(modalForm(type, btnClass));
        $('#modalTitle').text(globalMessageJson[type + "Message"]);
        if($('#modalBodyInput').length <= 0) {
            let bodyHtml;
            if('extract' === type){
                bodyHtml = globalLanguage === 'ko_KR' ? extractFormKo() : extractForm();
            }else{
                bodyHtml = normalTextForm();
            }
            $('#modalBody').html(bodyHtml);
            $('#modalBodyInput').css('width', '435px');
            if($('#modalBodyInput1').length > -1 || $('#modalBodyInput2').length > -1){
                $('#modalBodyInput1').css('width', '100px');
                $('#modalBodyInput2').css('width', '100px');
            }
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

function toggle(type, btnClass){
    if(!isEmpty(convertData[type]) && convertData[type]){
        convertData[type] = false;
        $('.btn.btn-' + btnClass + '.select').prop('class', 'btn btn-outline-' + btnClass + ' select');
    }else{
        convertData[type] = true;
        $('.btn.btn-outline-' + btnClass + '.select').prop('class', 'btn btn-' + btnClass + ' select');
    }

    console.log(convertData[type]);
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
    setTimeout(() => $('#editorModal').empty(), 500);
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

const normalTextForm = () => '<input type="text" class="form-control" id="modalBodyInput" />';
const extractFormKo = () =>
    `<div><input type="text" class="form-control" id="modalBodyInput2" style="display: inline" /><span>${globalMessageJson["extractMessage2"]}</span>
     <input type="text" class="form-control" id="modalBodyInput1" style="display: inline" /><span>${globalMessageJson["extractMessage1"]}</span></div>`

const extractForm = () =>
    `<div><span>${globalMessageJson["extractMessage1"]}</span> <input type="text" class="form-control" id="modalBodyInput1" style="display: inline" />
    <span>${globalMessageJson["extractMessage2"]}</span> <input type="text" class="form-control" id="modalBodyInput2" style="display: inline" /></div>`

$(document).ready(function(){
    $('#orgContent').css('height', 700);
    $('#becameContent').css('height', 700);

    TextareaLine.appendLineNumber('orgContent');
});