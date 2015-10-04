(function () {
    'use strict';
    var app = angular.module('docapp');
    //#region mainCtrl
    app.controller("mainCtrl", function ($scope, $animate, $filter, ngDialog, taskSvc, $timeout) {

        $scope.AllUsers = [
           {
               text: 'John',
               value: 'John'
           },
           {
               text: 'Lynda',
               value: 'Lynda',
           },
           {
               text: 'Amy',
               value: 'Amy',
           }
        ];


        $scope.LoginUser = {
            status: "Amy"
        };
        $scope.showLoginUser = function () {
            var selected = $filter('filter')($scope.AllUsers, { value: $scope.LoginUser.status });
            return ($scope.LoginUser.status && selected.length) ? selected[0].text : 'Not set';
        };


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
         { value: '3', text: 'Information Technology', Priority: 'High', ShortCode: 'H', Class: 'Red' },
        { value: '4', text: 'Contact Request', Priority: 'High', ShortCode: 'H', Class: 'Red' }
        ];

        $scope.CategoryStatus = function () {
            var selected = $filter('filter')($scope.Category, { value: $scope.TaskDtl.Category });
            return ($scope.TaskDtl.Category && selected.length) ? selected[0].text : 'Not set';
        };

        $scope.showCurrentUser = function () {
            var selected = $filter('filter')($scope.AllUsers, { value: $scope.TaskDtl.AllUsers });
            return ($scope.TaskDtl.AllUsers && selected.length) ? selected[0].text : 'Not set';
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
            $scope.TaskDtl.AllUsers = tsk.AssignedTo;

            //$scope.Priorities.value = tsk.PriorityCode;
            //alert(tsk.TaskId);
            getMyComment(tsk.ID);
        };

        $scope.TaskDtl = {
            Description: "",
            Title: "",
            Category: '',
            Priorities: '',
        };

        $scope.resetLeftPanel = function () {
            $scope.TaskDtl = {
                Description: "",
                Title: "",
                Category: '',
                Priorities: '',
                flag: true,
            };
            getMyComment(0);

        }



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
            taskSvc.getTaskByUser($scope.LoginUser.status)
            .then(function (response) {
                $scope.myTaskList = response.d.results;
                $scope.TaskDtl.flag = false;

            });
            console.log($scope.LoginUser.status);

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
                    $scope.$watch('myTaskList', function () {
                        console.log('watch');
                        //$scope.getMyTask();
                    });
                } else {

                }
            }, 100);
        };


        $('#page-wrapper').removeClass('nav-small');

        //$scope.selectedIndex = 0;

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
            $scope.comment.User = $scope.LoginUser.status;

            taskSvc.addNewActivities(comment)
            .then(function (response) {
                getMyComment(comment.tskid);
                $scope.comment.Cmnt = "";
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

        $scope.updateUser = function () {
            $scope.updateUserTsk = {
                ID: $scope.comment.tskid,
                AssignedTo: $scope.TaskDtl.AllUsers,
            };

            taskSvc.updateUser($scope.updateUserTsk)
            .then(function (response) {
                $scope.getMyTask();
                $scope.resetLeftPanel();
            });
        };


        $scope.updateCategory = function () {
            $scope.updatePriorityTsk = {
                ID: $scope.comment.tskid,
                Category: $scope.TaskDtl.Category,
            };
            console.log($scope.TaskDtl.Category);
            if ($scope.TaskDtl.Category == "4") {
                $scope.updateUserTsk = {
                    ID: $scope.comment.tskid,
                    AssignedTo: "Lynda",
                };

                taskSvc.updateUser($scope.updateUserTsk)
                .then(function (response) {
                    taskSvc.updateCategory($scope.updatePriorityTsk)
                       .then(function (response) {
                           $scope.getMyTask();
                           $scope.resetLeftPanel();
                       });
                });


            }
            else {
                taskSvc.updateCategory($scope.updatePriorityTsk)
                .then(function (response) {
                    $scope.getMyTask();
                });
            }
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
                $scope.resetLeftPanel();
            });
        };


    });
    //#endregion

    //#region newcrtl
    app.controller("newctrl", function ($scope, $animate, $filter, ngDialog, taskSvc, clauseSvc, contractSvc, common, $timeout) {
        var logger = common.logger;

        //#region navigation

        $scope.tabs = [
           { title: '0', name: 'New Contract', template: '../Templates/Claim/ContractStep3.html', content: "Empty Data" },
           { title: '1', name: 'Preview', template: '../Templates/Claim/ClaimPreview.html', content: "Empty Data" },

        ];

        $scope.templates =
           [
               { name: 'New Contract', url: '../Templates/Contract/ContractAdd.html' },
               { name: 'New Clause', url: '../Templates/Claim/ClauseNew.html' },
               { name: 'Contract', url: '../Templates/Claim/ContractStep2.html' },
               { name: 'Clauses', url: '../Templates/Contract/Clauses.html' },
               { name: 'New Contract', url: '../Templates/Claim/ContractStep3.html' },
           ];
        $scope.template = $scope.templates[3];
        //#endregion

        $scope.navigateDashbord = function () {
            //$scope.template = $scope.templates[0];


            $scope.treedata = $scope.ContractMst.selectedRows;


        };

        $scope.getselected = function () {
            console.log('Delete me');
        }

        //#region grid
        $scope.ContractMst = {
            columnDefs: [
                { headerName: '', width: 30, checkboxSelection: true },
                { field: 'Title', headerName: 'Title', width: 100 },
                { field: 'Desc', headerName: 'Contract Description', width: 890 },
                { field: 'Id', headerName: 'Id', hide: true, width: 100 },
            ],
            angularCompileRows: true,
            rowSelection: 'multiple'

        };


        $scope.GetContractMaster = function () {
            clauseSvc.getAll()
              .then(function (response) {
                  $scope.ContractMst.rowData = response.d.results;

              });
        };
        $scope.GetContractMaster();

        $scope.newClause = [];

        $scope.addContractMaster = function (newClause) {
            $scope.tempContractMaster = [{ 'Id': '14', 'Category': newClause.ClauseType, 'nodes': [], 'Title': newClause.Title, 'Desc': newClause.Desc }];
            $scope.tempContractMaster2 = $scope.tempContractMaster.concat($scope.ContractMaster.rowData);
            $scope.ContractMaster.rowData = $scope.tempContractMaster2;

            $scope.newClause.ClauseType = "1";
            $scope.newClause.Title = "";
            $scope.newClause.Desc = "";
            logger.logSuccess("Clause Saved.", null, "newctrl");
        };

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
            nodeData.nodes.push({
                id: nodeData.id * 10 + nodeData.nodes.length,
                Title: nodeData.Title + '.' + (nodeData.nodes.length + 1),
                Desc: (nodeData.nodes.length + 1) + '.' + ' Click to edit.',
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

        //#region material

        //#endregion

        //#region crud
        $scope.contractHdrPreview = [];
        $scope.getContractSmryPreview = [];
        $scope.allContractHdrPreview = [];
        contractSvc.getAllContractHdr().then(function (response) {
            $scope.allContractHdrPreview = response.d.results;
            console.log(response.d.results);
        });
        $scope.getContractPreview = function () {
            
            contractSvc.getContractHdr($scope.contractHdrID).then(function (response) {
                $scope.contractHdrPreview = response.d.results;
            });
            contractSvc.getContractSmry($scope.contractHdrID).then(function (response) {
                $scope.getContractSmryPreview = response.d.results;
            });
        };

        


        $scope.addContractHdr = function (contractHdr) {
            contractSvc.addContractHdr(contractHdr)
            .then(function (response) {
                logger.logSuccess("Saved Succesfully.", null, "newctrl");
                //console.log(response.d.ID);
                $scope.contractHdrID = response.d.ID;
            });
        };
        $scope.contractSmry = [];
        $scope.addContractSmry = function () {
            $scope.tempSortId = 0;
            angular.forEach($scope.treedata, function (item) {
                $scope.tempSortId = $scope.tempSortId + 1;
                $scope.contractSmry.Title = item.Title;
                $scope.contractSmry.Desc = item.Desc;
                $scope.contractSmry.CONTRACT_HDR_ID = $scope.contractHdrID.toString();;
                $scope.contractSmry.Category = item.Category;
                $scope.contractSmry.CLAUSE_MST_ID = item.Id.toString();
                $scope.contractSmry.SortId = $scope.tempSortId;
                contractSvc.addContractSmry($scope.contractSmry)
                .then(function (response) {

                });

            });
            $timeout(function () {
                $scope.getContractPreview();
            }, 4000);
        };





        //#endregion

        $scope.finishedWiz = function () {
            logger.logSuccess("Published", null, "newctrl");
        };
        $scope.SaveWiz = function () {
            logger.logSuccess("Saved", null, "newctrl");
        };
    });
    //#endregion
})();
