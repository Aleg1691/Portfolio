import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinProjectComponent } from '../join-project/join-project.component';
import { ElPolloLocoProjectComponent } from '../el-pollo-loco-project/el-pollo-loco-project.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, JoinProjectComponent, ElPolloLocoProjectComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  translate = inject(TranslationService);
}
