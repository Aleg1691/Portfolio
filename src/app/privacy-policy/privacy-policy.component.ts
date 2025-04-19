// import { Component, OnInit } from '@angular/core';
// import { TranslateService, LangChangeEvent, TranslateModule } from '@ngx-translate/core';
// import { ViewportScroller } from '@angular/common';

// @Component({
//   selector: 'app-privacy-policy',
//   standalone: true,
//   imports: [TranslateModule],
//   templateUrl: './privacy-policy.component.html',
//   styleUrl: './privacy-policy.component.scss'
// })
// export class PrivacyPolicyComponent implements OnInit {

//   constructor(private translate: TranslateService, private viewportScroller: ViewportScroller) { }

//   ngOnInit(): void {
//     this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
//       this.scrollToSection(event.lang);
//     });
//   }

//   scrollToSection(language: string): void {
//     if (language === 'de') {
//       this.viewportScroller.scrollToAnchor('german-privacy-policy');
//     } else if (language === 'en') {
//       this.viewportScroller.scrollToAnchor('english-privacy-policy');
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent, TranslateModule } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private viewportScroller: ViewportScroller,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    // Scrollen beim Initialisieren
    const currentLang = this.translationService.getLanguage();
    this.scrollToSection(currentLang);

    // Sprachwechsel
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.scrollToSection(event.lang);
    });
  }

  scrollToSection(language: string): void {
    if (language === 'de') {
      this.viewportScroller.scrollToAnchor('german-privacy-policy');
    } else if (language === 'en') {
      this.viewportScroller.scrollToAnchor('english-privacy-policy');
    }
  }
}
