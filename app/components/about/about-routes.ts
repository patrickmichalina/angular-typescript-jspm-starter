/// <reference path="../../../typings/tsd.d.ts" />
import {IPageTitleService} from '../../common/common-interfaces';
routes.$inject = ['$stateProvider'];

function routes($stateProvider: ng.ui.IStateProvider) {
    'use strict';
    $stateProvider
        .state('main.about', {
            url: 'about',
            views: {
                'content@main': {
                    template: '<about></about>'
                }
            },
            resolve: {
                title: ['PageTitleService', function(PageTitleService: IPageTitleService) {
                    PageTitleService.setTitle("About");
                }]
            }
        });
}

export {routes}