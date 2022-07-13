<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
    <head>
        <!-- meta -->
        <meta charset="UTF-8">

        <!-- jquery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

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
                <textarea class="form-control" id="orgContent"></textarea>
            </div>
            <button type="button" class="btn btn-light" onclick="convert()">convert</button>
            <div class="form-group">
                <label for="orgContent" class="form-label mt-4">became content</label>
                <textarea class="form-control" id="becameContent"></textarea>
            </div>
        </div>
    </body>
</html>