/// <reference path="../../../../typings/tsd.d.ts" />
import {module} from 'angular';
import {PageTitleService} from './page-title-service';

let PageTitleServiceModule = angular.module('app.common.services', [
    
]);

PageTitleServiceModule
    .service('PageTitleService', PageTitleService);

export {PageTitleServiceModule};