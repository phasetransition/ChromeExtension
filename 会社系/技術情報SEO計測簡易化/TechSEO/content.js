var title = $(".result_table:first tr").eq(3).find("td")[0];
document.body.appendChild(title);

var elm_refresh = $(".result_function");
document.body.appendChild(elm_refresh[0]);

$("body div").hide();
var elm = $(".result_table");
document.body.appendChild(elm[1]);
document.body.appendChild(elm[2]);
//document.body.appendChild(elm[3]);
//document.body.appendChild(elm[4]);
document.body.appendChild(elm[5]);
//document.body.appendChild(elm[6]);
document.body.appendChild(elm[7]);
//document.body.appendChild(elm[8]);
$("table").each(function(){
	$(this).find("tr").eq(0).hide();
});
$(".result_function").each(function(){
	$(this).css('display','block');
	$(this).css('text-align','left');
});
