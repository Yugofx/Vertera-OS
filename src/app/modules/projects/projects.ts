import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProjectCardComponent } from './components/card/card.component';
import { Observable } from 'rxjs';
import { ProjectModel } from './models/project.model';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'os-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class ProjectsComponent implements OnInit {
  @ViewChildren(ProjectCardComponent) cards: QueryList<ProjectCardComponent>;
  projects$: Observable<ProjectModel[]>;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects$ = this.projectsService.getProjects();
  }

  handleOnCopy(emitter) {
    this.cards
      .filter(card => card.isCopied)
      .filter(card => card !== emitter)
      .forEach(card => card.hideToast());
  }
}
