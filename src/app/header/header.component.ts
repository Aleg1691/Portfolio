import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  translate = inject(TranslationService);

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  changeLanguage(lang: string) {
    this.translate.setLanguage(lang);
    this.closeMenu();
  }

  closeMenuOnClickInside(event: Event) {
    const target = event.target as HTMLElement;
    const isLink = target.tagName === 'A';

    if (!isLink) {
      this.closeMenu();
    }
  }

  getSkillsId(): string {
    return window.innerWidth <= 1325 ? 'mobileSkills' : 'skills';
  }
}
