import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AboveTheFoldComponenComponent } from './main/above-the-fold-componen/above-the-fold-componen.component';
import { AboutMeComponent } from "./main/about-me/about-me.component";
import { MyskillsComponent } from './main/myskills/myskills.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ReviewsComponent } from './main/reviews/reviews.component';
import { ContactComponent } from './main/contact/contact.component';
import { MaincontentComponent } from './main/maincontent/maincontent.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HeaderComponent, FooterComponent, AboveTheFoldComponenComponent, AboutMeComponent, MyskillsComponent, PortfolioComponent, ReviewsComponent, ContactComponent, MaincontentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';

  ngOnInit() {
    AOS.init();
  }
}
