/// <reference path="../../typings/tsd.d.ts" />
import {module} from 'angular';
import {ServicesModule} from './services/services';

let CommonModule = module('app', [
	ServicesModule.name
]);

export {CommonModule};