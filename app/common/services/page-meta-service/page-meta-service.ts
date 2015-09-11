import {IPageMetaService} from './page-meta-service-interface'

class PageMetaService implements IPageMetaService {
    private metaDescription: string;
    private metaKeywords: string;
	
	getMetaDescription(): string {
		return this.metaDescription;
	}
	
    setMetaDescription(newMetaDescription: string): void {
		this.metaDescription = newMetaDescription;
	}
	
    getMetaKeywords(): string {
		return this.metaKeywords;
	}
	
    setMetaKeywords(newKeywords: Array<string>): void {
		for (var key in newKeywords) {
            if (this.metaKeywords === '') {
                this.metaKeywords += newKeywords[key];
            } else {
                this.metaKeywords += ', ' + newKeywords[key];
            }
        }
	}
	
    reset(): void {
		this.metaDescription = '';
        this.metaKeywords = '';
	}
}

export {PageMetaService}