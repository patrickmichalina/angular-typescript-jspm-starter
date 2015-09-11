/// <reference path="../typings/tsd.d.ts" />
import {module} from "angular";
import 'angular-ui-router';
import 'angular-animate';
import {routes} from './layout/routes';
import {LocationProviderConfig, ExceptionHandlerConfig} from './config/config';
import ComponentModule from './components/components';
import CommonModule from './components/components';

let Module = module("app", [
	ComponentModule.name,
    CommonModule.name,
	'ui.router',
    'ngAnimate'
]);

// configure
Module.config(routes);
Module.config(LocationProviderConfig);
Module.config(ExceptionHandlerConfig);
