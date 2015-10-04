(function () {
    'use strict';
    var app = angular.module('docapp');
    app.factory("clauseSvc", ["baseSvc", function (baseService) {
        var listEndPoint = '/_api/web/lists/';
        var getAll = function () {
            var query = listEndPoint + "GetByTitle('CLAUSE_MST')/Items?$select=Title,Category,Desc";
            return baseService.getRequest(query);
        };
        var addClause = function (clauseMst) {
            var data = {
                __metadata: { 'type': 'SP.Data.CLAUSE_MST' },
                Title: clauseMst.Title,
                

            }
        }

        return {
            getAll: getAll
        };
    }]);
})();