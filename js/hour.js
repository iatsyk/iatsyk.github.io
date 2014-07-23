(function () {
    var app = angular.module('hour-directives', []);

    app.directive("hourDirective", function () {
        return {
            restrict: 'E',
            templateUrl: "html/hour-directive.html"
        };
    });
})();
