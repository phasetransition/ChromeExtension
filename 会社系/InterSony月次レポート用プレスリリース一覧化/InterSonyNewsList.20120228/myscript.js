chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		if($('#results').css('display') == "none"){
			location.reload();
		}
		$('div').hide();
		var tbl = document.createElement("table");
		tbl.id = "feedList";
		document.body.appendChild(tbl);
		$('#results').find('tr.page').each(function(){
			var buf = "";
			var buf2 = ""
			var date = $(this).find('span').text();
			var image = $(this).find('img').attr('src');
			var imageFile = image.substr(image.length - 5, 5);
			var cat = "";
			switch (imageFile) {
				case "1.gif":
				cat = "広報コメント";
				break;
				case "2.gif":
				cat = "Press Release";
				break;
				case "4.gif":
				cat = "Media Update";
				break;
				case "5.gif":
				cat = "Report";
				break;
			}
			$(this).find('a').each(function(){
			    if($(this).text() != "" && buf.substr(0,4) != "<tr>"){
			        buf = '<tr><td>'+cat+'</td><td>'+date+'</td><td>'+$(this).text()+'</td>';
			    }
			    var href = $(this).attr('href');
			    if(href.substr(0,4) == "http"){
			        buf2 = '<td>' + href + '</td>';
			    }else if(href.length < 2){
			        ;
			    }else if(buf2.length < 1){
			        buf2 = '<td>' + "http://www.intersony.sony.co.jp/SonyNews/News" + href.replace(/..\/News/ig,'') + '</td>';
			    }
			});
			$('#feedList').append(buf + buf2 + '</tr>');
		}
		);
		$('#feedList tbody').css('text-align','left');
	}
)
