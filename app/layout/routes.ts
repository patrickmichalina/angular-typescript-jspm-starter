/// <reference path="../../typings/tsd.d.ts" />
import html from './main-template';
import template from './main-template.html!text';
import './main-style.scss!';
Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

function Routes ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
        .state('main', {
            abstract: true,
            url: '/',
            template
        })

    $urlRouterProvider.otherwise('/');
}

export {Routes}