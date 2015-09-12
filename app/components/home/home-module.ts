/// <reference path="../../../typings/tsd.d.ts" />
import {module} from 'angular';
import {routes}  from './home-routes';
import {HomeComponent} from './home-component';

var HomeModule: ng.IModule = angular.module('home', [
    'ui.router'
 ]);

HomeModule
    .config(routes)
    .directive('home', HomeComponent);

export {HomeModule};