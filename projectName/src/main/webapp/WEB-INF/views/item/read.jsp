<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>
	itemid : ${vo.itemid }<br>
	itemname : ${vo.itemname }<br>
	itemprice : ${vo.itemprice }<br>
	itemcount : ${vo.itemcount }<br>
	userid : ${vo.userid }<br>
	
	<button>상품정보 수정화면</button>
	<button>상품 삭제</button>
	
	<button>상품 목록</button>
	<form></form>
	
	<script type="text/javascript">
		$(document).ready(function() {
			$("button").eq(0).click(function() {
				location.assign("/item/update/${vo.itemid}");
			});			
			$("button").eq(1).click(function(){
				$("form").attr("method", "post");
				$("form").attr("action", "/item/delete");
				$("form").append('<input type = "hidden" name ="itemid" value = "${vo.itemid}">');
				$("form").submit();
			});
			
			$("button").eq(2).click(function(){
				$("form").attr("method", "get");
				$("form").attr("action", "/item/list");
				$("form").submit();n
			});		
		
		});	
	</script>


</body>
</html>