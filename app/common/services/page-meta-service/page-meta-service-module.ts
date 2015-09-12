/// <reference path="../../../../typings/tsd.d.ts" />
import {module} from 'angular';
import {PageMetaService} from './page-meta-service';

let PageMetaServiceModule = 
    module('PageMetaService', [])
        .service('PageMetaService', PageMetaService);

export {PageMetaServiceModule};