(function () {
    'use strict';
    var app = angular.module('docapp');
    //#region mainCtrl
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
            Description: "Welcome to your task manager",
            Title: "Task Manager",
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
        //getMyComment(1);
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
                Category: $scope.TaskDtl.Category,
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


        $scope.compleateTask = function (ID) {
            taskSvc.compleateTask(ID)
            .then(function (response) {
                $scope.getMyTask();
            });
        };

        $scope.user = {
            name: 'awesome user'
        };
    });
    //#endregion

    //#region newcrtl
    app.controller("newctrl", function ($scope, $animate, $filter, ngDialog, taskSvc, $timeout) {
        //#region navigation
        $scope.navigateDashbord = function () {
            
        };
        $scope.tabs = [
           { title: '0', name: 'New Contract', template: '../Templates/Claim/ClaimNew.html', content: "Empty Data" },
           { title: '1', name: 'Preview', template: '../Templates/Claim/ClaimPreview.html', content: "Empty Data" },

        ];

        $scope.templates =
           [
               { name: 'New Contract.', url: '../Templates/Claim/ClaimDashbord.html' },
               { name: 'New Clause', url: '../Templates/Claim/ClaimTemplates.html' },
               { name: 'Contract', url: '../Templates/Claim/ClaimFinal.html' },
           ];
        $scope.template = $scope.templates[2];
        //#endregion

        $scope.navigateDashbord = function () {
            $scope.template = $scope.templates[0];
            console.log($scope.ContractMaster.selectedRows);

            $scope.treedata = $scope.ContractMaster.selectedRows;
        };

        $scope.getselected = function () {
            console.log($scope.ContractMaster.selectedRows);
        }

        //#region grid
        $scope.ContractMaster = {
            columnDefs: [
                { headerName: '', width: 30, checkboxSelection: true },
                { field: 'Title', headerName: 'Title', width: 100 },
                  { field: 'Desc', headerName: 'Contract Description', width: 890 },
            ],
            angularCompileRows: true,
            rowSelection: 'multiple',
            
                   };


        $scope.GetContractMaster = function () {
            $scope.ContractMaster.rowData = [
                { 'id': '1', 'ContractType': '1', 'nodes': [], 'Title': 'Name and business', 'Desc': 'The parties hereby form a partnership under the name of __________________________________________ to conduct a __________________________________________. The principal office of the business shall be in _______________________.' },
                { 'id': '2', 'ContractType': '1', 'nodes': [], 'Title': 'Term', 'Desc': 'The partnership shall begin on ________________, 20____, and shall continue until terminated as herein provided.' },
                { 'id': '3', 'ContractType': '1', 'nodes': [], 'Title': 'Capital', 'Desc': 'The capital of the partnership shall be contributed in cash by the partners as follows: A separate capital account shall be maintained for each partner. Neither partner shall withdraw any part of his capital account. Upon the demand of either partner, the capital accounts of the partners shall be maintained at all times in the proportions in which the partners share in the profits and losses of the partnership.' },
                { 'id': '4', 'ContractType': '1', 'nodes': [], 'Title': 'Profit and loss', 'Desc': 'The net profits of the partnership shall be divided equally between the partners and the net losses shall be borne equally by them. A separate income account shall be maintained for each partner. Partnership profits and losses shall be charged or credited to the separate income account of each partner. If a partner has no credit balance in his income account, losses shall be charged to his capital account.' },
                { 'id': '5', 'ContractType': '1', 'nodes': [], 'Title': 'Salaries and drawings', 'Desc': 'Neither partner shall receive any salary for services rendered to the partnership. Each partner may, from time to time, withdraw the credit balance in his income account.' },
                { 'id': '6', 'ContractType': '1', 'nodes': [], 'Title': 'Interest', 'Desc': 'No interest shall be paid on the initial contributions to the capital of the partnership or on any subsequent contributions of capital.' },
                { 'id': '7', 'ContractType': '1', 'nodes': [], 'Title': 'Banking', 'Desc': 'All funds of the partnership shall be deposited in its name in such checking account or accounts as shall be designated by the partners. All withdrawals are to be made upon checks signed by either partner.' },
                { 'id': '8', 'ContractType': '1', 'nodes': [], 'Title': 'Books', 'Desc': 'The partnership books shall be maintained at the principal office of the partnership, and each partner shall at all times have access thereto. The books shall be kept on a fiscal year basis, commencing _____________________ and ending _____________________, and shall be closed and balanced at the end of each fiscal year. An audit shall be made as of the closing date.' },

                { 'id': '9', 'ContractType': '2', 'nodes': [], 'Title': 'Vendor', 'Desc': 'Under this Software License Agreement (the "Agreement"), Karansoft (the "Vendor") grants to the user (the "Licensee") a non-exclusive and non-transferable license (the "License") to use AsanaPro (the "Software").' },
                { 'id': '10', 'ContractType': '2', 'nodes': [], 'Title': 'Title1', 'Desc': '"Software" includes the executable computer programs and any related printed, electronic and online documentation and any other files that may accompany the product.' },
                { 'id': '11', 'ContractType': '2', 'nodes': [], 'Title': 'Title1', 'Desc': 'Title, copyright, intellectual property rights and distribution rights of the Software remain exclusively with the Vendor. Intellectual property rights include the look and feel of the Software. This Agreement constitutes a license for use only and is not in any way a transfer of ownership rights to the Software.' },
                { 'id': '12', 'ContractType': '2', 'nodes': [], 'Title': 'Title1', 'Desc': 'This Agreement grants a site license to the Licensee. The Software may be loaded onto a maximum of 3 computers.' },
                { 'id': '13', 'ContractType': '2', 'nodes': [], 'Title': 'Title1', 'Desc': 'The Software may not be modified, reverse-engineered, or de-compiled in any manner through current or future available technologies.' },
            ];

            if ($scope.ContractMaster.api) {
                $scope.ContractMaster.api.onNewRows();
                $scope.ContractMaster.api.refreshView();
                $scope.ContractMaster.api.setRows();
            }
        };
        $scope.GetContractMaster();



        //#endregion

        //#region uitree
        $scope.remove = function (scope) {
            scope.remove();
        };

        $scope.toggle = function (scope) {
            scope.toggle();
        };

        $scope.moveLastToTheBeginning = function () {
            var a = $scope.data.pop();
            $scope.data.splice(0, 0, a);
        };

        $scope.newSubItem = function (scope) {
            var nodeData = scope.$modelValue;
            //console.log(scope.$modelValue);
            nodeData.nodes.push({
                id: nodeData.id * 10 + nodeData.nodes.length,
                Title: nodeData.Title + '.' + (nodeData.nodes.length + 1),
                Desc: (nodeData.nodes.length + 1)+'.'+ ' Click to edit.' ,
                nodes: []
            });
        };

        $scope.collapseAll = function () {
            $scope.$broadcast('collapseAll');
        };

        $scope.expandAll = function () {
            $scope.$broadcast('expandAll');
        };

        $scope.treedata_ = [{
            'id': 1,
            'title': 'node1',
            'nodes': [
              {
                  'id': 11,
                  'title': 'node1.1',
                  'nodes': [
                    {
                        'id': 111,
                        'title': 'node1.1.1',
                        'nodes': []
                    }
                  ]
              },
              {
                  'id': 12,
                  'title': 'node1.2',
                  'nodes': []
              }
            ]
        }, {
            'id': 2,
            'title': 'node2',
            'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
            'nodes': [
              {
                  'id': 21,
                  'title': 'node2.1',
                  'nodes': []
              },
              {
                  'id': 22,
                  'title': 'node2.2',
                  'nodes': []
              }
            ]
        }, {
            'id': 3,
            'title': 'node3',
            'nodes': [
              {
                  'id': 31,
                  'title': 'node3.1',
                  'nodes': []
              }
            ]
        }];

        //#endregion

    });
    //#endregion
})();
