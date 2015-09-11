import {IPageTitleService} from './page-title-service-interface'

class PageTitleService implements IPageTitleService {
	public _title: string;

	constructor() {
		if(!this._title) this._title == "test-title";
	}
	
	getTitle(): string {
		return this._title;
	}
}

export {PageTitleService}