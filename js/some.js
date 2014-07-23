$(document).ready(function(){
$("#clickBtn").on("click", function () {
	console.log("in add");
	var hour = get_cookie("hour");
	if (hour == null) {
		document.cookie = "hour=0;expires=15/08/2014 00:00:00";
	}
	hour++;
	delete_cookie("hour");
	document.cookie = "hour=" + hour + ";expires=15/08/2014 00:00:00";
	var message = $("<h3 id=\"hour\">hour:  " + hour + "</h3>");
    	$("#hour").text(message);
	});
});