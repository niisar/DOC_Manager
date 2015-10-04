(function () {
    'use strict';
    var controlledID = 'Clause.Clause';
    angular.module('docapp').controller(controlledID, ['$rootScope', '$scope', 'clauseSvc', 'common', Clauses]);

    function Clauses($rootScope, $scope, clauseSvc, common) {
        var logger = common.logger;
        $scope.tabs = [
           { title: '0', name: 'New Contract', template: '../Templates/Claim/ContractStep3.html', content: "Empty Data" },
           { title: '1', name: 'Preview', template: '../Templates/Claim/ClaimPreview.html', content: "Empty Data" },

        ];

        $scope.templates =
           [
               { name: 'New Contract', url: '../Templates/Contract/ContractAdd.html' },
               { name: 'New Clause', url: '../Templates/Clause/ClauseNew.html' },
               { name: 'Contract', url: '../Templates/Clause/ClauseList.html' },
           ];
        $scope.template = $scope.templates[2];

        //#region grid
        $scope.ContractMaster = {
            columnDefs: [
                //{ headerName: '', width: 30, checkboxSelection: true },
                { field: 'Title', headerName: 'Title', width: 100 },
                  { field: 'Desc', headerName: 'Contract Description', width: 890 },
            ],
            angularCompileRows: true,
            //rowSelection: 'multiple',
            rowData: $scope.ContractMasterData

        };

        $scope.myData = function () {
            clauseSvc.getAll()
               .then(function (response) {
                   $scope.ContractMasterData = response.d.results;
                   //$scope.ContractMaster.rowData = response.d.results;
                   console.log($.parseJSON(JSON.parse(response.d.results)));
               });
        }
        $scope.GetContractMaster = function GetContractMaster() {
            clauseSvc.getAll()
               .then(function (response) {
                   $scope.ContractMaster.rowData = response.d.results;
                   console.log(response.d.results);
               });
            


            //if ($scope.ContractMaster.api) {
            //    $scope.ContractMaster.api.onNewRows();
            //    $scope.ContractMaster.api.refreshView();
            //    $scope.ContractMaster.api.setRows();
            //};


        };
        $scope.ContractMaster.ready = function () {
            $scope.ContractMaster.api.onNewRows();
            $scope.ContractMaster.api.refreshView();
            console.log('d');
            //$scope.ContractMaster.api.setRows();
        };
        $scope.GetContractMaster();

        $scope.newClause = [];
        $scope.addContractMaster = function (newClause) {
            $scope.tempContractMaster = [{ 'id': '14', 'ClauseType': newClause.ClauseType, 'nodes': [], 'Title': newClause.Title, 'Desc': newClause.Desc }];
            $scope.ContractMaster.rowData = $scope.tempContractMaster.concat($scope.ContractMaster.rowData);

            $scope.newClause.ClauseType = "1";
            $scope.newClause.Title = "";
            $scope.newClause.Desc = "";
            $scope.template = $scope.templates[2];

            logger.logSuccess("Clause Saved.", null, "newctrl");
        };

        //#endregion


    }
})();