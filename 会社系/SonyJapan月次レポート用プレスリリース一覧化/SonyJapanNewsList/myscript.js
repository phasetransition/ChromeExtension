chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		if($('#includeHeader').css('display') == "none"){
			location.reload();
			return;
		}
		$('div').hide();
		var tbl = document.createElement("table");
		/*var container = document.createElement("div");*/
		tbl.id = "feedList";
		document.body.appendChild(tbl);
		$('div.column1').find('div.info').each(function(){
			var tr = "<tr>";
			$(this).find('div.date').each(function(){
				var temp = $(this).text();
				var temp2 = temp.match(/\d{4}|\d{2}/g);
				tr = tr + "<td>" + temp2[0] + "." + temp2[1] + "." + temp2[2] + "</td>";
			});
			$(this).find('a').each(function(){
				tr = tr + "<td>" + $(this).text() + "</td>"
				var href = $(this).attr('href');
				if(href.match(/^http/)) {
					tr = tr + "<td>" + href  + "</td>";
				} else {
					tr = tr + "<td>http://" + location.hostname  + href + "</td>";
				}
			});
			tr = tr + '</tr>'
			$('#feedList').append(tr);
		});
		$('#feedList tbody').css('text-align','left');
	}
)
