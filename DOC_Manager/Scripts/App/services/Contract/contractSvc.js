(function () {
    'use strict';
    var app = angular.module('docapp');
    app.factory("contractSvc", ["baseSvc", function (baseService) {
        var listEndPoint = '/_api/web/lists/';
        var getAll = function () {
            var query = listEndPoint + "GetByTitle('CONTRACT__HDR')/Items?$select=Title,ID,StartDate,EndDate,Category,Budget,Stackholders";
            return baseService.getRequest(query);
        };

        var getContractHdr = function (id) {
            var query = listEndPoint + "GetByTitle('CONTRACT__HDR')/Items?$select=Title,ID,StartDate,EndDate,Category,Budget,Stackholders&$filter=ID eq " + id + "";
            return baseService.getRequest(query);
        };

        var getAllContractHdr = function () {
            var query = listEndPoint + "GetByTitle('CONTRACT__HDR')/Items?$select=Title,ID,StartDate,EndDate,Category,Budget,Stackholders";
            return baseService.getRequest(query);
        };

        var getContractSmry = function (id) {
            var query = listEndPoint + "GetByTitle('CONTRACT_SMRY')/Items?$select=SortId,ID,Title,Desc&$filter=CONTRACT_HDR_ID eq " + id + " &$orderby=SortId";
            return baseService.getRequest(query);
        };
        var addContractHdr = function (contractHdr) {
            var data = {
                __metadata: { 'type': 'SP.Data.CONTRACT_x005f__x005f_HDRListItem' },
                Title: contractHdr.Title,
                StartDate: contractHdr.StartDate,
                EndDate: contractHdr.EndDate,
                Category: contractHdr.Category,
                Budget: contractHdr.Budget,
                Stackholders: contractHdr.Stackholders
            };
            var url = listEndPoint + "GetByTitle('CONTRACT__HDR')/Items";
            return baseService.postRequest(data, url);
        };

        var addContractSmry = function (contractSmry) {
            var data = {
                __metadata: { 'type': 'SP.Data.CLAIM_x005f_SMRYListItem' },
                Title: contractSmry.Title,
                Desc: contractSmry.Desc,
                CONTRACT_HDR_ID: contractSmry.CONTRACT_HDR_ID,
                Category: contractSmry.Category,
                CLAUSE_MST_ID: contractSmry.CLAUSE_MST_ID,
                SortId: contractSmry.SortId,

            };
            var url = listEndPoint + "GetByTitle('CONTRACT_SMRY')/Items";
            return baseService.postRequest(data, url);
        };

        return {
            getAll: getAll,
            getContractHdr: getContractHdr,
            getContractSmry: getContractSmry,
            addContractHdr: addContractHdr,
            addContractSmry: addContractSmry,
            getAllContractHdr: getAllContractHdr,

        };
    }]);
})();