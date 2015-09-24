(function () {
    'use strict';
    var app = angular.module('docapp');
    app.controller("mainCtrl", function ($scope, $animate, $filter, ngDialog, taskSvc, $timeout) {
        //$scope.kk = function () {
        //    alert('d');

        //};


        $scope.myTaskList = [];
        $scope.updatePriorityTsk = [];
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
                //controller: 'Task.AddTask',
                closeByDocument: false,
                preCloseCallback: 'updateMyTaskList',
                scope: $scope
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
                controller: 'Task.UpdateTask',
                preCloseCallback: 'updateMyTaskList',
                closeByDocument: false,
                scope: $scope
            });
        };

        $scope.updateMyTaskList = function (value) {
            $timeout(function () {
                if (value == 'submit') {

                    $scope.getMyTask();
                    //console.log($scope.myTaskList);
                    $scope.$watch('myTaskList', function () {
                        console.log('watch');
                        //$scope.getMyTask();
                    });
                } else {

                }
            }, 100);
        };


        $('#page-wrapper').removeClass('nav-small');

        $scope.selectedIndex = 0;

        //$scope.comment.tskid = '';
        $scope.comment = [];
        getMyComment(1);
        function getMyComment(id) {
            $scope.comment.tskid = id;
            taskSvc.getCommentsById(id)
            .then(function (response) {
                $scope.myCommentList = response.d.results;
                
            })
            

        };

        $scope.putComment = function (comment) {
            taskSvc.addNewActivities(comment)
            .then(function (response) {
                console.log(response);
                getMyComment(comment.tskid);
            });
        };
        
        $scope.updatePriority = function () {
            $scope.updatePriorityTsk = {
                ID: $scope.comment.tskid,
                PriorityCod: $scope.TaskDtl.Priorities,
            };

            taskSvc.updatePriority($scope.updatePriorityTsk)
            .then(function (response) {
                $scope.getMyTask();
            });
        };


        $scope.updateCategory = function () {
            $scope.updatePriorityTsk = {
                ID: $scope.comment.tskid,
                PrioCategoryrityCod: $scope.TaskDtl.Category,
            };

            taskSvc.updateCategory($scope.updatePriorityTsk)
            .then(function (response) {
                $scope.getMyTask();
            });
        };

        $scope.updateDesc = function () {
            $scope.updatePriorityTsk = {
                ID: $scope.comment.tskid,
                Desc2: $scope.TaskDtl.Description,
            };

            taskSvc.updateDesc($scope.updatePriorityTsk)
            .then(function (response) {
                $scope.getMyTask();
            });
        };

        $scope.updateTitle = function () {
            $scope.updatePriorityTsk = {
                ID: $scope.comment.tskid,
                Title: $scope.TaskDtl.Title,
            };

            taskSvc.updateTitle($scope.updatePriorityTsk)
            .then(function (response) {
                $scope.getMyTask();
            });
        };

        $scope.user = {
            name: 'awesome user'
        };
    });
})();