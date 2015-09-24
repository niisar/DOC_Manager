(function () {
    'use strict';
    var controllerId = "Document.FileList";
    angular.module('docapp').controller(controllerId, ['$rootScope', 'common', FileList])

    function FileList($rootScope, common) {
        var vm = this;
        var logger = common.logger;

        // init controller
        init();

        // init controller
        function init() {
            logger.log("app shell loaded", null, controllerId);
            common.activateController([], controllerId);
        }
    }
})();