(function () {
    'use strict';
    var app = angular.module('docapp');
    app.factory("taskSvc", ["baseSvc", function (baseService) {
        var listEndPoint = '/_api/web/lists/';
        var getAll = function () {
            var query = listEndPoint + "GetByTitle('Asana2')/Items?$select=Title,Category,ID,PriorityCod,Desc2";
            return baseService.getRequest(query);
        };

        var getCommentsById = function (ID) {
            var query = listEndPoint + "GetByTitle('Activities')/Items?$select=TaskID,ActivityType,Cmnt,ID,EntryDate,UserCmnt,ProfilePic&$filter=ActivityType eq '2' and TaskID eq " + ID + "";

            return baseService.getRequest(query);
        }
        var addNewTask = function (tsk) {
            var data = {
                __metadata: { 'type': 'SP.Data.Asana2ListItem' },
                Title: tsk.Title,
                PriorityCod: tsk.PriorityCod.toString(),
                Category:  tsk.CategoryCode.toString(),
                Desc2: tsk.Description,
                AssignedTo: tsk.AssignedUserId.toString()
            };
            var url = listEndPoint + "GetByTitle('Asana2')/Items";
            return baseService.postRequest(data, url);
        };
        var updatePriority = function (updatePriorityTsk) {
            var data = {
                __metadata: { 'type': 'SP.Data.Asana2ListItem' },
                PriorityCod: updatePriorityTsk.PriorityCod.toString(),
            };
            var url = listEndPoint + "/GetByTitle('Asana2')/GetItemById(" + updatePriorityTsk.ID + ")";
            return baseService.updateRequest(data, url);
        };

        var updatePriority = function (updatePriorityTsk) {
            var data = {
                __metadata: { 'type': 'SP.Data.Asana2ListItem' },
                PriorityCod: updatePriorityTsk.PriorityCod.toString(),
            };
            var url = listEndPoint + "/GetByTitle('Asana2')/GetItemById(" + updatePriorityTsk.ID + ")";
            return baseService.updateRequest(data, url);
        };

        var updateCategory = function (updateCategoryTsk) {
            var data = {
                __metadata: { 'type': 'SP.Data.Asana2ListItem' },
                Category: updateCategoryTsk.Category.toString(),
            };
            var url = listEndPoint + "/GetByTitle('Asana2')/GetItemById(" + updateCategoryTsk.ID + ")";
            return baseService.updateRequest(data, url);
        };

        var updateDesc = function (updateDescTsk) {
            var data = {
                __metadata: { 'type': 'SP.Data.Asana2ListItem' },
                Desc2: updateDescTsk.Desc2.toString(),
            };
            var url = listEndPoint + "/GetByTitle('Asana2')/GetItemById(" + updateDescTsk.ID + ")";
            return baseService.updateRequest(data, url);
        };

        var updateTitle = function (updateTitleTsk) {
            var data = {
                __metadata: { 'type': 'SP.Data.Asana2ListItem' },
                Title: updateTitleTsk.Title.toString(),
            };
            var url = listEndPoint + "/GetByTitle('Asana2')/GetItemById(" + updateTitleTsk.ID + ")";
            return baseService.updateRequest(data, url);
        };


        var addNewActivities = function (comment) {
            var data = {
                __metadata: { 'type': 'SP.Data.ActivitiesListItem' },
               // Title:'title',
                ActivityType: '2',
                Cmnt: comment.Cmnt,
                UserCmnt: 'Rahul',
                ProfilePic: 'img/Users/ryan-301.jpg',
                TaskID: comment.tskid.toString(),


            };
            var url = listEndPoint + "GetByTitle('Activities')/Items";
            return baseService.postRequest(data, url);
        };
        

        return {
            getAll: getAll,
            getCommentsById: getCommentsById,
            addNewTask: addNewTask,
            addNewActivities: addNewActivities,
            updatePriority: updatePriority,
            updateCategory: updateCategory,
            updateDesc: updateDesc,
            updateTitle: updateTitle
        };


    }]);

})();