import {IPageTitleService} from './page-title-service-interface'

class PageTitleService implements IPageTitleService {
	private _title: string;

	constructor() {
		this._title = "test-title";
	}
	
	getTitle(): string {
		return this._title;
	}
	
	setTitle(title: string): void {
		this._title = title;
	}
}

export {PageTitleService}