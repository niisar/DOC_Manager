(function () {
    'use strict';
    var controllerId = "Task.DashBoard";
    angular.module('docapp').controller(controllerId, ['$rootScope', 'common', DashBoard])

    function DashBoard($rootScope, common) {
        var logger = common.logger;


        init();
        function init() {
            common.activateController([], controllerId);
        }
    }
})();