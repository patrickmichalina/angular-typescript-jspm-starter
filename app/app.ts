/// <reference path="../typings/tsd.d.ts" />
import {module} from "angular";
import 'angular-ui-router';
import {Routes} from './layout/routes';
import {LocationProviderConfig, ExceptionHandlerConfig} from './config/config';
import {ComponentModule} from './components/components';
import {CommonModule} from './common/common';

let Module = module("app", [
	ComponentModule.name,
    CommonModule.name,
	'ui.router'
]);

// configure
Module.config(Routes);
Module.config(LocationProviderConfig);
Module.config(ExceptionHandlerConfig);