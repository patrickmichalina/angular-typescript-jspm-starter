/// <reference path="../../../typings/tsd.d.ts" />
import {module} from 'angular';
import {routes}  from './about-routes';
import {AboutComponent} from './about-component';

var AboutModule: ng.IModule = angular.module('app.components.about', ['ui.router']);

AboutModule
    .config(routes)
    .directive('about', AboutComponent);

export {AboutModule};