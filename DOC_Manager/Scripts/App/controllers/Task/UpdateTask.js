﻿(function () {
    'use strict';
    var controllerId = "Task.UpdateTask";
    angular.module('docapp').controller(controllerId, ['$rootScope', 'common', UpdateTask])

    function UpdateTask($rootScope, common) {
        var logger = common.logger;


        init();
        function init() {
            common.activateController([], controllerId);
        }
    }
})();