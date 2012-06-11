Month = new Array();
Month["Jan"] = "01";
Month["Feb"] = "02";
Month["Mar"] = "03";
Month["Apr"] = "04";
Month["May"] = "05";
Month["Jun"] = "06";
Month["Jul"] = "07";
Month["Aug"] = "08";
Month["Sep"] = "09";
Month["Oct"] = "10";
Month["Nov"] = "11";
Month["Dec"] = "12";

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		if($('#includeHeader').css('display') == "none"){
			location.reload();
			return;
		}
		$('div').hide();
		$('img').hide();
		var tbl = document.createElement("table");
		/*var container = document.createElement("div");*/
		tbl.id = "feedList";
		document.body.appendChild(tbl);
		$('div.column1').find('div.info').each(function(){
			var tr = "<tr>";
			$(this).find('div.date').each(function(){
				var temp = $(this).text();
				var temp0 = temp.replace(String.fromCharCode(160)," ");
				var temp1 = temp0.replace(",","");
				var temp2 = temp1.split(" ");
				tr = tr + "<td>" + temp2[2] + "." + Month[temp2[0].slice(0,3)] + "." + temp2[1] + "</td>";
			});
			$(this).find('a').each(function(){
				tr = tr + "<td>" + $(this).text() + "</td>"
				var href = $(this).attr('href');
				if(href.match(/^http/)) {
					tr = tr + "<td>" + href  + "</td>";
				} else {
					tr = tr + "<td>" + location + href.replace("index.html","") + "</td>";
				}
			});
			tr = tr + '</tr>'
			$('#feedList').append(tr);
		});
		$('#feedList tbody').css('text-align','left');
	}
)
