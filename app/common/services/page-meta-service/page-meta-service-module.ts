/// <reference path="../../../../typings/tsd.d.ts" />
import {module} from 'angular';
import {PageMetaService} from './page-meta-service';

let PageMetaServiceModule = angular.module('app.common.services', []);

PageMetaServiceModule
    .service('PageMetaService', PageMetaService);

export {PageMetaServiceModule};