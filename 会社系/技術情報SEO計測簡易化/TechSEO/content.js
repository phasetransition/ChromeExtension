$("body div").hide();
var elm = $(".result_table");
var title = $(".result_table:first tr").eq(3).find("td")[0];
document.body.appendChild(title);
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