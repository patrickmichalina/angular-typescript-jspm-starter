/// <reference path="../../typings/tsd.d.ts" />
import {module} from 'angular';
import 'angular-ui-router';
import {HomeModule} from './home/home-module';
import {AboutModule} from './about/about-module';

let ComponentModule = module('app.components', [
	HomeModule.name,
	AboutModule.name,
	'ui.router'
]);

export default ComponentModule;