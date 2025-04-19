import { Component, inject, Input } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-join-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './join-project.component.html',
  styleUrl: './join-project.component.scss'
})
export class JoinProjectComponent {

  translate = inject(TranslationService);

  projects = [
    {
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
      imageSrc: 'assets/img/join-project.png',
      liveTestUrl: 'https://join-live-test-url.com',
      githubUrl: 'https://github.com/join-repo'
    },
  ];
}
