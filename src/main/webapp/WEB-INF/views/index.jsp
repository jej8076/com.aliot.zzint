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
        <link rel="stylesheet" href="/css/main/lobby.css">
        
        <!-- custom - js -->
        <script defer type="text/javascript" src="/js/common/common.js"></script>
        <script defer type="text/javascript" src="/js/main/lobby.js"></script>

        <title>zzint</title>
    </head>
    <body>
        <div class="mainouter">
            <div class="mainrooms">
                <div class="roomunit" onclick="move('/app/editor')">
                    <h2>슈퍼 텍스트 에디터</h2>
                    <!--
                    <p class="text-muted">문자 라인별로 앞, 뒤에 문자 추가 가능</p>
                    <p class="text-primary">특정 문자를 기준으로 n번째 문자만 치환 가능</p>
                    <p class="text-secondary">특정 범위 라인의 문자 치환 가능</p>
                    <p class="text-danger">특정 문자를 기준으로 n번째 문자만 치환 가능</p>
                    -->
                    <p class="text-warning">문자 라인별로 앞, 뒤에 문자 추가 가능</p>
                    <p class="text-success">특정 범위 라인의 문자 치환 가능</p>
                    <p class="text-info">특정 문자를 기준으로 n번째 문자만 치환 가능</p>
                </div>
            </div>
        </div>

    </body>
</html>