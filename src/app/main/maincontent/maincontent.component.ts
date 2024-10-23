import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboveTheFoldComponenComponent } from '../above-the-fold-componen/above-the-fold-componen.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MyskillsComponent } from '../myskills/myskills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [CommonModule, AboveTheFoldComponenComponent, AboutMeComponent, MyskillsComponent, PortfolioComponent, ReviewsComponent, ContactComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
