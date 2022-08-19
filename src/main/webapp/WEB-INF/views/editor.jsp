<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html>
    <head>
        <!-- meta -->
        <meta charset="UTF-8">

        <!-- jquery -->
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>

        <!-- bootstrap -->
        <link rel="stylesheet" href="/css/common/bootstrap/bootstrap.css">
        <script type="text/javascript" src="/js/common/bootstrap/bootstrap.js"></script>

        <!-- textarea show line -->
        <link rel="stylesheet" href="/css/common/textarealine.css" type="text/css" media="all">
        <script type="text/javascript" src="/js/common/textarealine.js"></script>

        <!-- custom - css -->
        <link rel="stylesheet" href="/css/main/editor.css">
        
        <title>zzint</title>
    </head>
    <body>
        <div class="mainouter">
            <div class="form-group">
                <div style="margin-top: 140px"></div>

            </div>
            <div class="form-group">
                <label for="orgContent" class="form-label mt-4">${globalMessage.original_text}</label>
                <br>
                <button type="button" class="btn btn-outline-primary select" onclick="modalForAdd('addFront', 'primary')"><span>${globalMessage.add_front}</span></button>
                <button type="button" class="btn btn-outline-secondary select" onclick="modalForAdd('addBack', 'secondary')"><span>${globalMessage.add_back}</span></button>
                <button type="button" class="btn btn-outline-success select" onclick="toggle('addLine', 'success')">${globalMessage.add_line}</button>
                <div class="contentWrapper">
                    <textarea class="form-control" id="orgContent"></textarea>
                </div>
            </div>
            <button type="button" class="btn btn-light" onclick="convert()">${globalMessage.convert}</button>
            <div class="form-group">
                <label for="becameContent" class="form-label mt-4">${globalMessage.changed_text}</label>
                <div style="margin:63px;"></div>
                <div class="contentWrapper">
                    <textarea class="form-control" id="becameContent"></textarea>
                </div>
            </div>
        </div>
    </body>

    <!-- modal fade -->
    <div class="modal fade" id="editorModal">

    </div>
    <!-- /modal fade -->

    <!-- custom - js -->
    <script type="text/javascript" src="/js/common/common.js"></script>
    <script type="text/javascript" src="/js/main/editor.js"></script>
    <script>
        const globalMessage = '${globalMessage}';
        const globalMessageJson = DataMapStringToJson(globalMessage);
    </script>
</html>