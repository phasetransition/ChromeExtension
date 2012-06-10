chrome.browserAction.onClicked.addListener(function(tab) {
	$('a').each(function(){
		chrome.tabs.create({url:this.href,active:false});
	});
});
