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
                                    alert('試用版です。');
                                    target = url[k];
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
        alert('試用版です。');
	location.href = $('#show_image').attr('src');
}

if ((location.href.match(/http:\/\/imageporter.com/)) || (location.href.match(/http:\/\/www.imageporter.com/))) {
        alert('試用版です。');
	location.href = $('img#knjdycbs87nbd').attr('src');
}

if (location.href.match(/http:\/\/www.stooorage.com/)) {
	$('div#page_body').find('img').each(function(){
		if($(this).attr('src').match(/img2.stooorage.com\/images/)) {
                        alert('試用版です。');
			location.href = $(this).attr('src');
		}
	});
}

if (location.href.match(/http:\/\/www.imagebam.com\/image/)) {
	$('a.buttonblue').each(function(){
		if($(this).attr('href').match(/imagebam.com\/download/)) {
                        alert('試用版です。');
			document.write('<img src="' + $(this).attr('href') + '"></img>');
		}
	});
}
