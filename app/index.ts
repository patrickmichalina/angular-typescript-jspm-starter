/// <reference path="../typings/tsd.d.ts" />
import {module} from "angular";
import ComponentModule from './components/components';
import 'angular-ui-router';
import {routes} from './layout/routes';

export var Module = module("app", [
	ComponentModule.name,
	'ui.router'
]);

Module.config(routes);

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