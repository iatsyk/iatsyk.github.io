function get_cookie ( cookie_name ) {
	var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
	if ( results )
		return ( unescape ( results[2] ) );
	else
		return null;
}

function delete_cookie ( cookie_name ) {
	var cookie_date = new Date ( );  // Текущая дата и время
	cookie_date.setTime ( cookie_date.getTime() - 1 );
	document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

(function () {
	var app = angular.module('OSL', ['hour-directives']);

	app.controller('MainController', function () {
        	this.hour = get_cookie("hour");
	});

})();
