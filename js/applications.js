(function () {
    var app = angular.module('application-directives', []);
    app.directive("descriptions", function () {
        return {
            restrict: "E",
            templateUrl: "descriptions.html"
        };
    });

    app.directive("reviews", function () {
        return {
            restrict: "E",
            templateUrl: "reviews.html"
        };
    });

    app.directive("specs", function () {
        return {
            restrict: "E",
            templateUrl: "specs.html"
        };
    });

    app.directive("applicationTabs", function () {
        return {
            restrict: "E",
            templateUrl: "application-tabs.html",
            controller : function () {
                this.tab = 1;
                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
                controllerAs: "tab"
        };
    });
})();
