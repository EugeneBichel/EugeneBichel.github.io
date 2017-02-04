(function (angular) {
    angular.module('MonkeyTricksApp', [])
        .controller('MainController', function() {
            "use strict";

            this.greeting = "Welcome to Monkey Tricks";

        });
})(window.angular);