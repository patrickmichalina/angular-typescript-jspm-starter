/// <reference path="../../../typings/tsd.d.ts" />
import {IPageTitleService, IPageMetaService} from '../../common/common-interfaces';
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
                }],
                meta: ['PageMetaService', function(PageMetaService: IPageMetaService) {
                    PageMetaService.reset();
                    PageMetaService.setMetaDescription('Describing the purpose of this applications');
                    PageMetaService.setMetaKeywords(['Angular', 'JSPM', 'TypeScript']);
                }]
            }
        });
}

export {routes}