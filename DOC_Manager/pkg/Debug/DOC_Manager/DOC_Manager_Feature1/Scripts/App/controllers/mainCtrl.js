(function () {
    'use strict';
    var app = angular.module('docapp');
    app.controller("mainCtrl", function ($scope, $animate, $filter, ngDialog, taskSvc) {

        $scope.Priorities = [
         { value: '1', text: 'Low', Priority: 'Low', ShortCode: 'L', Class: 'Green' },
         { value: '2', text: 'Medium', Priority: 'Medium', ShortCode: 'M', Class: 'Yellow' },
         { value: '3', text: 'High', Priority: 'High', ShortCode: 'H', Class: 'Red' }
        ];

        $scope.showPriorityStatus = function () {
            var selected = $filter('filter')($scope.Priorities, { value: $scope.TaskDtl.Priorities });
            return ($scope.TaskDtl.Priorities && selected.length) ? selected[0].ShortCode : 'Not set';
        };


        $scope.Category = [
         { value: '1', text: 'Finance', Priority: 'Low', ShortCode: 'L', Class: 'Green' },
         { value: '2', text: 'Human Resource', Priority: 'Medium', ShortCode: 'M', Class: 'Yellow' },
         { value: '3', text: 'Information Technology', Priority: 'High', ShortCode: 'H', Class: 'Red' }
        ];

        $scope.CategoryStatus = function () {
            var selected = $filter('filter')($scope.Category, { value: $scope.TaskDtl.Category });
            return ($scope.TaskDtl.Category && selected.length) ? selected[0].text : 'Not set';
        };



        $scope.showPriorityClass = function () {
            var selected = $filter('filter')($scope.Priorities, { value: $scope.TaskDtl.Priorities });
            return ($scope.TaskDtl.Priorities && selected.length) ? selected[0].Class : 'Not set';
        };

        $scope.taskClick = function ($index, tsk) {
            $scope.selectedIndex = $index;
            $scope.TaskDtl.Description = tsk.Desc2;
            $scope.TaskId = tsk.TaskId;
            $scope.TaskDtl.Title = tsk.Title;
            $scope.TaskDtl.Priorities = tsk.PriorityCod;
            $scope.TaskDtl.Category = tsk.Category;

            //$scope.Priorities.value = tsk.PriorityCode;
            //alert(tsk.TaskId);
            getMyComment(tsk.ID);
        };

        $scope.TaskDtl = {
            Description: "Task Description /n This is sample desctipyion",
            Title: "New product Intro",
            Category: '2',
            Priorities: '2',
        };




        $scope.addTaskOpen = function () {
            ngDialog.open({
                template: '../Templates/Task/AddTask.html',
                controller: 'Task.AddTask',
                closeByDocument: false
            });
        };


        $scope.getMyTask = function getMyTask() {
            taskSvc.getAll()
            .then(function (response) {
                $scope.myTaskList = response.d.results;
            });

        };

        $scope.getMyTask();

        $scope.editTaskOpen = function (tsk) {
            $scope.tsk = tsk;
            //$scope.Priorities = $scope.Priorities;
            ngDialog.open({
                template: '../Templates/Task/UpdateTask.html',
                controller: 'Document.UpdateTask',
                //preCloseCallback: 'updateMyTaskList',
                closeByDocument: false,
                scope: $scope
            });
        };




        $('#page-wrapper').removeClass('nav-small');

        $scope.selectedIndex = 0;


        getMyComment(1);
        function getMyComment(id) {
            taskSvc.getCommentsById(id)
            .then(function (response) {
                $scope.myCommentList = response.d.results;
                console.log(response.d.results);
            })
            //$scope.myCommentList = [{ "ActivityId": 8, "ActiveUserId": "ed1df834-d6b2-47fb-bbc0-7a564aab7e5b", "TaskID": 1, "ActivityType": 0, "Comments": "I don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. ", "CreationTime": "2015-09-22T00:44:32.17", "ProfileImage": "img/users/ryan.png", "Name": "Ryan", "SurName": "Gossling", "UserId": 2 }, { "ActivityId": 10, "ActiveUserId": "a5f155a4-a089-48f9-acee-2f0932c02376", "TaskID": 1, "ActivityType": 0, "Comments": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will. ", "CreationTime": "2015-09-22T00:44:32.17", "ProfileImage": "img/users/kunis.png", "Name": "Mila", "SurName": "Kuni", "UserId": 3 }, { "ActivityId": 12, "ActiveUserId": "a5f155a4-a089-48f9-acee-2f0932c02376", "TaskID": 1, "ActivityType": 0, "Comments": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will. ", "CreationTime": "2015-09-22T00:44:32.17", "ProfileImage": "img/users/kunis.png", "Name": "Mila", "SurName": "Kuni", "UserId": 3 }, { "ActivityId": 14, "ActiveUserId": "ed1df834-d6b2-47fb-bbc0-7a564aab7e5b", "TaskID": 1, "ActivityType": 0, "Comments": "I don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. ", "CreationTime": "2015-09-22T00:44:32.17", "ProfileImage": "img/users/ryan.png", "Name": "Ryan", "SurName": "Gossling", "UserId": 2 }, { "ActivityId": 16, "ActiveUserId": "a5f155a4-a089-48f9-acee-2f0932c02376", "TaskID": 1, "ActivityType": 0, "Comments": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will. ", "CreationTime": "2015-09-22T00:44:32.17", "ProfileImage": "img/users/kunis.png", "Name": "Mila", "SurName": "Kuni", "UserId": 3 }, { "ActivityId": 17, "ActiveUserId": "a5f155a4-a089-48f9-acee-2f0932c02376", "TaskID": 1, "ActivityType": 0, "Comments": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will. ", "CreationTime": "2015-09-22T00:44:32.17", "ProfileImage": "img/users/kunis.png", "Name": "Mila", "SurName": "Kuni", "UserId": 3 }, { "ActivityId": 18, "ActiveUserId": "ed1df834-d6b2-47fb-bbc0-7a564aab7e5b", "TaskID": 1, "ActivityType": 0, "Comments": "I don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. ", "CreationTime": "2015-09-22T00:44:32.17", "ProfileImage": "img/users/ryan.png", "Name": "Ryan", "SurName": "Gossling", "UserId": 2 }, { "ActivityId": 19, "ActiveUserId": "a5f155a4-a089-48f9-acee-2f0932c02376", "TaskID": 1, "ActivityType": 0, "Comments": "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will. ", "CreationTime": "2015-09-22T00:44:32.17", "ProfileImage": "img/users/kunis.png", "Name": "Mila", "SurName": "Kuni", "UserId": 3 }, { "ActivityId": 20, "ActiveUserId": "ed1df834-d6b2-47fb-bbc0-7a564aab7e5b", "TaskID": 1, "ActivityType": 0, "Comments": "sldfkj", "CreationTime": "2015-09-21T13:47:30.55", "ProfileImage": "img/users/ryan.png", "Name": "Ryan", "SurName": "Gossling", "UserId": 2 }, { "ActivityId": 22, "ActiveUserId": "ed1df834-d6b2-47fb-bbc0-7a564aab7e5b", "TaskID": 1, "ActivityType": 0, "Comments": "lasjhaskldfjh", "CreationTime": "2015-09-23T00:08:07.183", "ProfileImage": "img/users/ryan.png", "Name": "Ryan", "SurName": "Gossling", "UserId": 2 }]

        };

        $scope.icons = [{ "value": "Gear", "label": "<i class=\"fa fa-gear\"></i> Gear" }, { "value": "Globe", "label": "<i class=\"fa fa-globe\"></i> Globe" }, { "value": "Heart", "label": "<i class=\"fa fa-heart\"></i> Heart" }, { "value": "Camera", "label": "<i class=\"fa fa-camera\"></i> Camera" }];

        $scope.user = {
            name: 'awesome user'
        };
    });
})();