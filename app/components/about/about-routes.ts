/// <reference path="../../../typings/tsd.d.ts" />

routes.$inject = ['$stateProvider'];

function routes ($stateProvider: ng.ui.IStateProvider) {
    'use strict';
    $stateProvider
        .state('main.about', {
            url: 'about',
            views: {
                'content@main': {
                    template: '<about></about>'
                }
            }
        });
}

export {routes}