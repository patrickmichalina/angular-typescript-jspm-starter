/// <reference path="../typings/tsd.d.ts" />
import html from './app-template';
import template from './app-template.html!text';
import './app-style.scss!';

function AppRoutes ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
        .state('main', {
            abstract: true,
            url: '/',
            template
        })

    $urlRouterProvider.otherwise('/');
}

AppRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export {AppRoutes}