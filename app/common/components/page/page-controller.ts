import {IPageTitleService} from '../../common-interfaces';

class PageController {
    
    static $inject = ['PageTitleService'];
    
    constructor(private PageTitleService: IPageTitleService) {

    }

    getTitle() {
        return this.PageTitleService.getTitle();
    }

    getMetaKeywords() {
        //return this.PageMeta.getMetaKeywords();
    }

    getMetaDescription() {
        //return this.PageMeta.getMetaDescription();
    }
}

// PageController.$inject = ['PageTitleService'];

export {PageController}