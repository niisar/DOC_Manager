(function () {
    'use strict';
    var controllerId = "Task.AddTask";
    angular.module('docapp').controller(controllerId, ['$rootScope', '$timeout', 'taskSvc', '$scope', AddTask])

    function AddTask($rootScope, $timeout , taskSvc, $scope) {
        //var logger = common.logger;

        $scope.addMyTask = function (tsk) {
            console.log(tsk);
            taskSvc.addNewTask(tsk)
            .then(function (response) {
                $timeout(function () {
                    angular.element('#submitClick').trigger('click');
                }, 100);
            });
        };

        //init();
        //function init() {
        //    common.activateController([], controllerId);
        //}
    }
})();