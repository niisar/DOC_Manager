(function () {
    'use strict';
    var controllerId = "Task.DeleteTask";
    angular.module('docapp').controller(controllerId, ['$rootScope', 'common', DeleteTask])

    function DeleteTask($rootScope, common) {
        var logger = common.logger;


        init();
        function init() {
            common.activateController([], controllerId);
        }
    }
})();