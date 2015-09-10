/// <reference path="../../../typings/tsd.d.ts" />

routes.$inject = ['$stateProvider'];

function routes ($stateProvider: ng.ui.IStateProvider) {
    'use strict';
    $stateProvider
        .state('main.home', {
            url: '',
            views: {
                'content@main': {
                    template: '<home></home>'
                }
            }
        });
}

export {routes}