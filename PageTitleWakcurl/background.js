var targetTitle = new Array();
var timerID = new Array();
//React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.create({url:"./top.html",active:true});
});
//Receive request
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if(request.messageId == "getTitle"){
	        var targetID;
	        chrome.tabs.create({url:request.url,active:false},function(b){
				targetID = b.id;
				chrome.runtime.sendMessage({messageId: "urlOpened", tabId: targetID});
	        });
		}else if(request.messageId == "urlOpened"){
			timerID[request.tabId] = setInterval(function(){chrome.tabs.get(request.tabId,function(c){targetTitle[request.tabId] = c.title;
																	if (targetTitle[request.tabId]) {
																		clearInterval(timerID[request.tabId]);
																		chrome.tabs.remove(request.tabId);
																		chrome.runtime.sendMessage({messageId: "bkgd2top", title: targetTitle[request.tabId], tabId: request.tabId, url: c.url});
																	}
																});
						},1000);
		}
});
