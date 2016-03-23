(function () {
	var app = angular.module('mainModule', []);

	app.directive("mainDirective", function () {
        	return {
        	restrict: 'E',
        	templateUrl: "main.html"
        	};
	});

})();
