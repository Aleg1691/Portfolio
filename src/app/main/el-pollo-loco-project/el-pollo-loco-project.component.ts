import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-el-pollo-loco-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './el-pollo-loco-project.component.html',
  styleUrl: './el-pollo-loco-project.component.scss'
})
export class ElPolloLocoProjectComponent {

  translate = inject(TranslationService);

  projects = [
    {
      title: 'El Pollo Loco',
      description: 'A 2D platform game where players control a character to avoid obstacles and defeat enemies.',
      technologies: 'JavaScript | HTML | CSS',
      imageSrc: 'assets/img/PolloLoco-project.png',
      liveTestUrl: 'https://el-pollo-loco-live-test-url.com',
      githubUrl: 'https://github.com/el-pollo-loco-repo'
    }
  ];

}
