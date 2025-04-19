// import { Injectable } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

// @Injectable({
//     providedIn: 'root',
// })
// export class TranslationService {
//     constructor(private translate: TranslateService) {
//         this.translate.setDefaultLang('en');
//     }

//     setLanguage(lang: string) {
//         this.translate.use(lang);
//     }

//     getTranslation(key: string) {
//         return this.translate.get(key);
//     }
// }

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class TranslationService {
    constructor(private translate: TranslateService) {
        // Sprache aus dem localStorage laden oder Standard setzen
        const savedLang = localStorage.getItem('language') || 'en';
        this.translate.setDefaultLang('en'); // Standardsprache
        this.translate.use(savedLang); // Persistierte Sprache verwenden
    }

    setLanguage(lang: string): void {
        this.translate.use(lang);
        localStorage.setItem('language', lang); // Sprache speichern
    }

    getLanguage(): string {
        return this.translate.currentLang || 'en'; // Aktuelle Sprache zurückgeben
    }

    getTranslation(key: string) {
        return this.translate.get(key);
    }
}

