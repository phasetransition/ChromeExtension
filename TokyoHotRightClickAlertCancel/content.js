document.getElementsByName('mainFrame')[0].addEventListener('load',function(){
	document.evaluate('//a[@name="noClick"]',document.evaluate('//frame[@name="mainFrame"]',document,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null).iterateNext().contentDocument,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null).iterateNext().name="";
},false);
