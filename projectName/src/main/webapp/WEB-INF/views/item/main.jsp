<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>
	<a href="/item/insert">상품 등록</a> |
	<a href="/item/list">상품 목록</a> |
	<a href="/item/searchByName">상품 검색</a>

	<script type="text/javascript">
		$(document).ready(function() {
			$("a").eq(2).click(function() {
				event.preventDefault();

				var itemname = prompt("상품명을 입력하시오.");

				var url = $(this).attr("href");

				location.assign(url+"/"+itemname);
			});
		});
	</script>
</body>
</html>