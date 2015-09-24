(function () {
    'use strict';
    var app = angular.module('docapp');
    app.factory("taskSvc", ["baseSvc", function (baseService) {
        var listEndPoint = '/_api/web/lists/';
        var getAll = function () {
            var query = listEndPoint + "GetByTitle('asana')/Items?$select=Title,Body,AuthorId,PriorityCode,Category,ID,Modified,PriorityCod,Desc2";
            return baseService.getRequest(query);
        };

        var getCommentsById = function (ID) {
            var query = listEndPoint + "GetByTitle('Activities')/Items?$select=TaskID,ActivityType,Cmnt,ID,EntryDate,UserCmnt,ProfilePic&$filter=ActivityType eq '2' and TaskID eq " + ID + "";
            console.log(ID);
            console.log(listEndPoint);
            return baseService.getRequest(query);
        }
        return {
            getAll: getAll,
            getCommentsById: getCommentsById
        };

        
    }]);

})();