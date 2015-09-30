(function () {
    'use strict';
    var controllerId = "Claim.Claim";
    angular.module('docapp').controller(controllerId, ['$rootScope', 'common', DeleteTask])

    function DeleteTask($rootScope, common) {
        var logger = common.logger;


        init();
        function init() {
            common.activateController([], controllerId);
        }
    }
})();

(function () {
    'use strict';
    var controllerId = "Claim.Claim";
    angular.module('docapp').controller(controllerId, ['$rootScope', 'common', ClaimManager]);
    function ClaimManager($rootScope, common) {
        var logger = common.logger;
    }
})();