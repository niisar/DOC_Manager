(function () {
    'use strict';

    var app = angular.module('docapp');
    //#region Route configuration
    // get all the routes
    app.constant('routes', getRoutes());


    // config routes & their resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);


    function routeConfigurator($routeProvider, routes) {
        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.config);
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    }


    // build the routes
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: '../Templates/Task/MyTask.html',
                    title: 'My Task',
                    settings: {
                        nav: 1,
                        content: 'My Task'
                    }
                }
            },
             {
                 url: '/2',
                 config: {
                     templateUrl: '../Templates/Document/FileList2.html',
                     title: 'file List2',
                     settings: {
                         nav: 1,
                         content: 'file List2'
                     }
                 }
             }
        ];
    }


    //#endregion

    //#region other configuration
    // all event that monitored in app

    var events = {
        controllerActivateSuccess: 'controller.activateSuccess'
    };

    var config = {
        // config the exceptionHandler decorator
        appErrorPrefix: '[SYSERR] ',
        // app events
        events: events,
        // app version
        version: '1.0.0.0',
        // debug notification settings
        showDebugNotiSetting: true
    };

    // create a global variable on app called 'config'
    app.value('config', config);

    // configure the angular logging service before startup
    app.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }]);

    // configure the common configuration
    app.config(['commonConfigProvider', function (cfg) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
    }]);

    //#endregion

})();
