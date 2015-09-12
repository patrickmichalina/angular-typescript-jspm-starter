/// <reference path="../../../typings/tsd.d.ts" />
import controller from './home-controller';
import {IPageTitleService} from '../../common/common-interfaces';

routes.$inject = ['$stateProvider'];

function routes($stateProvider: ng.ui.IStateProvider) {
    $stateProvider
        .state('main.home', {
            url: '',
            views: {
                'content@main': {
                    template: '<home></home>'
                }
            },
            resolve: {
                title: ['PageTitleService', function(PageTitleService: IPageTitleService) {
                    PageTitleService.setTitle("Home");
                }]
            }
        });
}

export {routes}