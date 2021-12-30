/**
 * 
 */


function deleteFile(filename){
	var msg = `
		<input type='hidden' name="deletefiles" value="${filename}">
	`;
	return msg;
}


function insertFile(filename){
	var msg = `
		<input type='hidden' name="insertfiles" value="${filename}">
	`;
	return msg;
}


function uploadedItemForRead(filename){
	
	var originalFilename = getOriginalFilename(filename);
	
	var msg = `
		<div class='uploadeditem col-sm-3 text-center'>
			<img src='${getImageUrl(filename)}'>
			<p class='uploadedItemForReadP'><a target='_blank' href='/test/downloadorshow?linkurl=${getLinkUrl(filename)}'>${originalFilename}</a></p>
		</div>
	`;
	
	return msg;
}





function uploadedItem(filename){
	
	var originalFilename = getOriginalFilename(filename);
	
	var msg = `
		<div class='uploadeditem col-sm-3 text-center'>
			<img src='${getImageUrl(filename)}'>
			<p class='uploadedItemP'><a target='_blank' href='/test/downloadorshow?linkurl=${getLinkUrl(filename)}'>${originalFilename}</a></p>
			<div><button data-filename='${filename}' class="btn btn-danger btn-sm deleteitem">삭제</button></div>
		</div>
	`;
	/*==> filename을 이용해서 일반파일은 다운로드, 이미지 파일은 브라우저에 출력하게 하기위해 콘트롤러에 요정하는 작업*/
	return msg;
}



function getLinkUrl(filename){
	/*==> 이미지 파일은 출력되게, 
		일반파일은 다운로드 되게 하기위해 링크 url을 지정, 파일명을 구해준다.*/
		
	if(checkImageFile(filename)){
		var prefix = filename.substring(0, 12);
		var suffix = filename.substring(14);
		filename = prefix + suffix;
	}
	
	
	return filename;
}


function getImageUrl(filename){ 
	/*==> 이미지 파일은 자동으로 만들어진, 
		일반파일은 사용자가 준비한 이미지 썸네일을 보여준다*/
	var url = "";
	
	if(checkImageFile(filename)){
		url="/test/displayfile?filename="+filename;
	}else{
		url="/resources/img/general.png";
	}
	
	return url;
}


function getOriginalFilename(filename){
	/*==>오리지널 파일명을 구한다*/
	var idx = -1;
	
	if(checkImageFile(filename)){
		idx = filename.indexOf("_", 14);
		/*==> index가 14인곳부터 '_' 의 index값을구하라*/
		
	}else{
		idx = filename.indexOf("_");
		
	}
	
	return filename.substring(idx+1);
}

function checkImageFile(filename){
	/*==>이미지 파일인지 여부를 확인한다.
		 "s_" 문자열의 index 값을 구한다.*/
	var idx = filename.indexOf("s_");
	if(idx == 12){
		return true;
	}else{
		return false;
	}
}

function checkImageFile2(filename){
	
	var idx = filename.lastIndexOf(".")+1;
	var formatName = filename.substring(idx);
	
	formatName = formatName.toUpperCase();
	
	if(formatName=="PNG" || formatName == "JPG" || formatName == "JPEG" 
												|| formatName == "GIF"){
		return true;
	}else{
		return false;
	}
}










function getRepliesPage(bno, curPage, el){
	el.html("");

	$.getJSON("/replies/"+bno+"/"+curPage, function(data){
		var arr= data["list"];
		
		for(var i=0;i<arr.length;i++){
			var obj = arr[i];
			
			msg = replyform(obj["replyer"], obj["updatedate"], obj["reply"], obj["rno"]);
			el.append(msg);
		}
		
		
		var strPage = `
		<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link reply_page_left" href="${data['curPage']}" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
		
		`;
		
		
		for(var i = data.beginPageNum; i < data.endPageNum+1; i++){
			var activeOr = data.curPage == i?"active":"";
			strPage += `<li class="page-item ${activeOr}"><a class="page-link reply_page_no" href="#">${i}</a></li>`;
		}
		
		
		strPage +=`
		    <li class="page-item">
      <a class="page-link reply_page_right" href="${data['curPage']}" data-totalPage="${data['totalPage']}" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
		`;
		
		el.append(strPage);
		
	});
}



function getAllReplies(bno, el){
	el.html("");
	
	$.getJSON("/replies/"+bno, function(data){
	
		
		for(var i=0;i<data.length;i++){
			var obj = data[i];
			
			msg = replyform(obj["replyer"], obj["updatedate"], obj["reply"], obj["rno"]);
			el.append(msg);
		}
		
	});
}



function replyform(replyer, updatedate, reply, rno){
	
	var msg = `
						   <div class="card">

					      <div class="clearfix card-header">

					         <span class="float-left">${replyer}</span><span class="float-right">${updatedate}</span>

					      </div>

					      <div class="card-body">

					         <p class="card-text">${reply}</p>

					         <a data-replyer="${replyer}" data-rno="${rno}" href="#" class="btn btn-warning btn-sm btn_reply_updateui_form">수정</a> 
					         <a data-rno="${rno}" href="#" class="btn btn-danger btn-sm btn_reply_delete">삭제</a>

					      </div>
					   </div>
					`;
					
					return msg;
	
}