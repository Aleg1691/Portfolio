import { Component, ElementRef, Renderer2, ViewChild, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {

  translate = inject(TranslationService);


   // Zugriff auf den Tooltip über @ViewChild
   @ViewChild('tooltip') tooltip!: ElementRef;

   tooltipVisible: boolean = false;
 
   constructor(private renderer: Renderer2) {}
 
   // Methode zum Ein- und Ausblenden des Tooltips
   toggleTooltip(event: MouseEvent): void {
     event.stopPropagation(); // Verhindert, dass das Event weitergeleitet wird
     this.tooltipVisible = !this.tooltipVisible;
 
     if (this.tooltipVisible) {
       this.renderer.addClass(this.tooltip.nativeElement, 'active');
     } else {
       this.renderer.removeClass(this.tooltip.nativeElement, 'active');
     }
   }
 
   // Schließt den Tooltip, wenn außerhalb geklickt wird
   @HostListener('document:click', ['$event'])
   closeTooltip(event: Event): void {
     if (this.tooltipVisible && !this.tooltip.nativeElement.contains(event.target)) {
       this.tooltipVisible = false;
       this.renderer.removeClass(this.tooltip.nativeElement, 'active');
     }
   }
}
