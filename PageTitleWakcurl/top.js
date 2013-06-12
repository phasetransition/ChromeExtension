var targetTitle = new Array();
var timerID = new Array();
var elmTbody;
window.onload = function() {
	var txtArea = document.getElementById('urllist');
	txtArea.addEventListener('mousedown', function(){if (this.value == this.defaultValue) this.value = "";}, false);
	var submitButton = document.getElementById('submit');
	submitButton.addEventListener('click', function(){checkTitle();}, false);
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if(request.messageId == "bkgd2top"){
			var element = document.createElement('tr');
			element.id = request.tabId;
			element.innerHTML = '<td class="cUrl">' + request.url + '</td><td class="cTitle">' + request.title + '</td>';
			elmTbody = $('#result').find('tbody');
			elmTbody[0].appendChild(element);
			document.getElementById(request.tabId).addEventListener('dblclick',function(){checkThisTitle(request.tabId);},false);
		}
	});
}

function checkTitle(){
	$('table#result').empty();
	$('table#result').css('display','table');
	$('table#result').append('<tbody><tr><th>URL</th><th>TITLE</th></tr></tbody>');
	var urlArray = $('#urllist').val().split('\n');
	/* convert array data to JSON text */
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
		chrome.runtime.sendMessage({messageId: "getTitle", url: urlArray[i]});
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

	chrome.runtime.sendMessage({messageId: "getTitle", url: strUrl});

    var dom_obj=document.getElementById(id);
    var dom_obj_parent=dom_obj.parentNode;
    dom_obj_parent.removeChild(dom_obj);
}
