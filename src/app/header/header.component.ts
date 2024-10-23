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

  // Toggle the burger menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Close the menu
  closeMenu() {
    this.menuOpen = false;
  }

  // Handle language change and close the menu after language switch
  changeLanguage(lang: string) {
    // Set the language using the translation service
    this.translate.setLanguage(lang);
    this.closeMenu(); // Close the menu after language change
  }

  // Close menu when clicked inside the nav but not on a link
  closeMenuOnClickInside(event: Event) {
    const target = event.target as HTMLElement;
    const isLink = target.tagName === 'A';

    // If the target is not a link, close the menu
    if (!isLink) {
      this.closeMenu();
    }
  }
}
