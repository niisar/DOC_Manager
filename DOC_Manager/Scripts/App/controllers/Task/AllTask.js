(function () {
    'use strict';
    var controllerId = "Task.AllTask";
    angular.module('docapp').controller(controllerId, ['$rootScope', 'common', AllTask])

    function AllTask($rootScope, common) {
        var logger = common.logger;


        init();
        function init() {
            common.activateController([], controllerId);
        }
    }
})();