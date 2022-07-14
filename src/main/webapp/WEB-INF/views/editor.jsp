<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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

        <!-- custom - css -->
        <link rel="stylesheet" href="/css/main/editor.css">
        
        <!-- custom - js -->
        <script defer type="text/javascript" src="/js/common/common.js"></script>
        <script defer type="text/javascript" src="/js/main/editor.js"></script>

        <title>zzint</title>
    </head>
    <body>
        <div class="mainouter">
            <div class="form-group">
                <label for="orgContent" class="form-label mt-4">original content</label>
                <br>
                <button type="button" class="btn btn-outline-primary select" onclick="functionAddBtn('addFront', 'primary')"><span>addFront</span></button>
                <button type="button" class="btn btn-outline-secondary select" onclick="functionAddBtn('addBack', 'secondary')">addBack</button>
                <textarea class="form-control" id="orgContent"></textarea>
            </div>
            <button type="button" class="btn btn-light" onclick="convert()">convert</button>
            <div class="form-group">
                <label for="becameContent" class="form-label mt-4">became content</label>
                <textarea class="form-control" id="becameContent"></textarea>
            </div>
        </div>
    </body>

    <!-- modal fade -->
    <div class="modal fade" id="editorModal">

    </div>
    <!-- /modal fade -->
</html>