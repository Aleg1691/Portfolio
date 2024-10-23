import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class TranslationService {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('en');
    }

    setLanguage(lang: string) {
        this.translate.use(lang);
    }

    getTranslation(key: string) {
        return this.translate.get(key);
    }
}
