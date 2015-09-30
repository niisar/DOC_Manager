(function () {
    'use strict';
    var controllerId = "Task.MyTask";
    angular.module('docapp').controller(controllerId, ['$scope', '$rootScope', 'common', MyTask])

    function MyTask($scope,$rootScope, common) {
        var logger = common.logger;


        init();
        function init() {
            //logger.log("app shell loaded", null, controllerId);
            //common.activateController([], controllerId);
        }
    }
})();