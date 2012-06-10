window.onload = function() {
var txtArea = document.getElementById('urllist');
txtArea.addEventListener('mousedown', function(){if (this.value == this.defaultValue) this.value = "";}, false);
}

function checkTitle(){
	$('table#result').empty();
	$('table#result').css('display','table');
	$('table#result').append('<tbody><tr><th>URL</th><th>TITLE</th></tr></tbody>');
	var urlArray = $('#urllist').val().split('\n');
	/* convert array data to JSON text */
	var targetTitle = new Array();
	var timerID = new Array();
        var elmTbody;
	for (var i = 0; i < urlArray.length; i++){
		if (urlArray[i] == "") {
			continue;
		}
		if (!(urlArray[i].match(/^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/))) {
			urlArray[i] = 'http://' + urlArray[i];
		}
		if (((urlArray[i].indexOf('.',0)) < 1) || (!(urlArray[i].match(/^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/))) ) {
			var element = document.createElement('tr');
			element.innerHTML = '<td class="cUrl">' + urlArray[i] + '</td><td class="cTitle">Invalid URL</td>';
			elmTbody = $('#result').find('tbody');
                        elmTbody[0].appendChild(element);
			continue;
		}
		chrome.extension.sendRequest(urlArray[i],function(a){
			timerID[a] = 0
			timerID[a] = setInterval(function(){chrome.tabs.get(a,function(c){targetTitle[a] = c.title;
																if (targetTitle[a]) {
																	clearInterval(timerID[a]);
																	var element = document.createElement('tr');
																	element.id = a;
																	element.innerHTML = '<td class="cUrl">' + c.url + '</td><td class="cTitle">' + targetTitle[a] + '</td>';
																	elmTbody = $('#result').find('tbody');
                                                                                                                                        elmTbody[0].appendChild(element);
																	document.getElementById(a).addEventListener('dblclick',function(){checkThisTitle(a);},false);
																	//$('table').append('<tr class="normal" id="'+ a +'"><td class="cUrl">' + c.url + '</td><td class="cTitle">' + targetTitle[a] + '</td></tr>');
																	chrome.tabs.remove(a);
																}
													});
						},2000);
		});
	}
}

function checkThisTitle(id){
	var tdUrl;
	var tdTitle;
	var timerID;
	var targetTitle;
	var strUrl;

	document.getElementById(id).className = 'checking';
	$(document.getElementById(id)).find('td').each(function(){
		if ( $(this).hasClass('cUrl') ) {
			tdUrl = this;
		}
		if ( $(this).hasClass('cTitle') ) {
			tdTitle = this;
		}
	});

	strUrl = tdUrl.innerText;
	if (!(strUrl.match(/^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/))) {
		strUrl = 'http://' + tdUrl.innerText;
	}

	chrome.extension.sendRequest(strUrl,function(a){
		timerID = 0
		timerID = setInterval(function(){chrome.tabs.get(a,function(c){targetTitle = c.title;
															if (targetTitle) {
																clearInterval(timerID);
																tdTitle.innerText = targetTitle;
																chrome.tabs.remove(a);
																document.getElementById(id).className = 'normal';
															}
												});
					},1000);
	});
}
