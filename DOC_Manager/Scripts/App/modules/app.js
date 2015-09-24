(function () {
    'use strict';
    var app = angular.module('docapp', ['ngRoute', 'xeditable', 'angular-loading-bar', 'mgcrea.ngStrap', 'mgcrea.ngStrap.helpers.parseOptions', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.select', 'ngAnimate', 'ngDialog', 'angularFileUpload', 'angularGrid', 'toastr', 'ngSanitize', 'common']);

    //#region app start
    app.run(['$route', 'editableOptions', 'editableThemes', function ($route, editableOptions, editableThemes) {
        editableOptions.theme = 'bs3';
        editableThemes.bs3.inputClass = 'x-editable';
    }])
    //#endregion
   
})();


