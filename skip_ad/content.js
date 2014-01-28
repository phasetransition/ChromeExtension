//if ( location.href.match(/(theseforums.com|megaline.co|seriousdeals.net|theseblogs.com|dyo.gs|qqc.co|allanalpass.com|zff.co|yyv.co|whackyvidz.com|amy.gs|urlbeat.net|goneviral.com|miniurls.co|cash4files.com|filesonthe.net|ultrafiles.net|tubeviral.com|tinylinks.co)/)) {
var ar = document.getElementsByTagName('script');
var target;
for (var i = 0; i < ar.length ;i ++) {
    if (ar.item(i).text.match(/Lbjs.TargetUrl/)) {
        $('iframe').remove();
        $('div').remove();
        for (var i = 0; i < ar.length ;i ++) {
            if (ar.item(i).text.match(/Lbjs.TargetUrl/)) {
                var scr = ar.item(i).text.split('\n');
                for (var j = 0; j < scr.length; j ++) {
                    if (scr[j].match(/Lbjs.TargetUrl/)) {
                        var url = scr[j].split('\'');
                        for (var k = 0; k < url.length; k ++) {
                            if(url[k].match(/http:\/\//)) {
                                    target = url[k];
                                    /* window.alert(target); */
                                    break;
                            }
                        }
                    }
                }
            }
        }
        document.write('<a href="' + target + '">here</a>');
        document.location.href = target;
    }
}

if ((location.href.match(/http:\/\/imgchili.com/)) && !(location.href.match(/http:\/\/imgchili.com\/undefined/))) {
	location.href = $('#show_image').attr('src');
}

if (location.href.match(/http:\/\/imgchili.net\/show/)) {
	location.href = $('img#show_image').attr('src');
}

if ((location.href.match(/http:\/\/imageporter.com/)) || (location.href.match(/http:\/\/www.imageporter.com/))) {
	location.href = $('img#knjdycbs87nbd').attr('src');
}

if (location.href.match(/http:\/\/www.stooorage.com/)) {
	$('div#page_body').find('img').each(function(){
		if($(this).attr('src').match(/img[0-9].stooorage.com\/images/)) {
			location.href = $(this).attr('src');
		}
	});
}

if (location.href.match(/http:\/\/imagetwist.com/)) {
	$('img.pic').each(function(){
		if($(this).attr('src').match(/img\d+.imagetwist.com\/i/)) {
			location.href = $(this).attr('src');
		}
	});
}

if (location.href.match(/http:\/\/www.imagebam.com\/image/)) {
	$('a.buttonblue').each(function(){
		if($(this).attr('href').match(/imagebam.com\/download/)) {
			document.write('<img src="' + $(this).attr('href') + '"></img>');
		}
	});
}

if (location.href.match(/http:\/\/imageban.ru/)) {
	location.href = $('img#img_obj').attr('src');
}

if (location.href.match(/http:\/\/www.turboimagehost.com/)) {
	location.href = $('img#imageid').attr('src');
}

if (location.href.match(/http:\/\/depic.me/)) {
	location.href = $('img#pic').attr('src');
}

if (location.href.match(/http:\/\/[\w\d]{4,10}.imagevenue.com/)) {
	var element = document.createElement('img');
	element.id = "appendedByChromeExtention";
	element.src = document.getElementById('thepic').src;
	var a = document.getElementsByTagName('body')[0]
	a.innerHTML="";
	a.appendChild(element);
}

if (location.href.match(/http:\/\/www.imgbabes.com/)) {
	location.href = $('img#this_image').attr('src');
}

if (location.href.match(/http:\/\/www.allanalpass.com/)) {
	var timerID = setInterval(
				function(){
						if(document.getElementById('skiplink').getAttribute('href')){
							clearInterval(timerID);
							location = document.getElementById('skiplink').href;
						}
				},100);
}
