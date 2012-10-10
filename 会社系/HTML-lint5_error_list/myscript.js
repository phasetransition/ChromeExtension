$('div').hide();
var tbl = document.createElement("table");
tbl.id = "feedList";
document.body.appendChild(tbl);
$('div.error-listing').each(function(){
	var tr = "<tr>";
	var temp = "";
	$(this).find('div.top').each(function(){
		$(this).empty();
	});
	$(this).find('h1').each(function(){
		temp = this.innerText.replace(/</g,"&lt;").replace(/>/g,"&gt;");
		tr = tr + "<td>" + temp + "</td>";
	});
	var temp2 = this.innerText.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(temp,"");
	tr = tr.replace(".","</td><td>").replace("*","</td><td>*") + "<td>" + temp2 + "</td>";
	tr = tr + '</tr>'
	$('#feedList').append(tr);
});
$('#feedList tbody').css('text-align','left');

