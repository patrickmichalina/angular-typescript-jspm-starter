/// <reference path="../typings/tsd.d.ts" />
import {module} from "angular";
import 'angular-ui-router';
import 'angular-animate';
import {routes} from './layout/routes';
import ComponentModule from './components/components';
import CommonModule from './components/components';

export var Module = module("app", [
	ComponentModule.name,
    CommonModule.name,
	'ui.router',
    'ngAnimate'
]);

// configure the routes
Module.config(routes);

// remove # from URLs
Module.config(['$locationProvider', function($locationProvider: ng.ILocationProvider) {
    $locationProvider.html5Mode(true);
}]);

// exception-handler (for typescript)
Module.config(['$provide', function($provide: ng.IModule) {
    $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate: any) {
        return function (exception: Error, cause: string) {
            setTimeout(function () {
                throw exception;
            });
            $delegate(exception, cause);
        };
    }]);
}]);

export {Module};