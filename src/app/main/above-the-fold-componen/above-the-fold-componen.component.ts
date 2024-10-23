import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-above-the-fold-componen',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold-componen.component.html',
  styleUrl: './above-the-fold-componen.component.scss'
})
export class AboveTheFoldComponenComponent {

  translate = inject(TranslationService);

}
