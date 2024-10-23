import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit, OnDestroy {

  translate = inject(TranslationService);

  currentTestimonialIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextTestimonial();
    }, 10000);
  }

  nextTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % 2;
  }

  prevTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + 2) % 2;
  }

  getProfileImage(): string {
    const profileImages = [
      'assets/img/mauriceProfil.png',
      'assets/img/romanProfil.png'
    ];
  
    return profileImages[this.currentTestimonialIndex];
  }
  
}
