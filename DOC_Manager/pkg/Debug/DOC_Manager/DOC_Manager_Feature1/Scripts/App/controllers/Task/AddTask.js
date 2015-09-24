(function () {
    'use strict';
    var controllerId = "Task.AddTask";
    angular.module('docapp').controller(controllerId, ['$rootScope', 'common', AddTask])

    function AddTask($rootScope, common) {
        var logger = common.logger;


        init();
        function init() {
            common.activateController([], controllerId);
        }
    }
})();