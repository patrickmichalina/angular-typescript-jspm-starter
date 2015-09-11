/// <reference path="../../../typings/tsd.d.ts" />
import {module} from 'angular';
import {PageTitleServiceModule} from './page-title-service/page-title-service-module';
import {PageMetaServiceModule} from './page-meta-service/page-meta-service-module';

let ServicesModule = module('app.common', [
	PageTitleServiceModule.name,
	PageMetaServiceModule.name
]);

export {ServicesModule};