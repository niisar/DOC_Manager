(function () {
    'use strict';
    var app = angular.module('docapp');
    app.factory("contractSvc", ["baseSvc", function (baseService) {
        var listEndPoint = '/_api/web/lists/';
        var getAll = function () {
            var query = listEndPoint + "GetByTitle('CONTRACT__HDR')/Items?$select=Title,ID,StartDate,EndDate,Category,Budget,Stackholders";
            return baseService.getRequest(query);
        };
        var addContractHdr = function (contractHdr) {
            var data = {
                __metadata: { 'type': 'SP.Data.CONTRACT__HDR' },
                Title: contractHdr.Title,
                StartDate: contractHdr.StartDate,
                EndDate: contractHdr.EndDate,
                Category: contractHdr.Category,
                Budget: contractHdr.Budget,
                Stackholders: contractHdr.Stackholders
            };
            var url = listEndPoint + "GetByTitle('CONTRACT_HDR')/Items";
            return baseService.updateRequest(data, url);
        };

        return {
            getAll: getAll,
            addContractHdr: addContractHdr
        };
    }]);
})();