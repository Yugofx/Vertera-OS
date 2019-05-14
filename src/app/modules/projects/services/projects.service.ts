import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectModel } from '../models/project.model';
import { PROJECTS_MOCK } from '../mocks/projects.mock';
import { delay } from 'rxjs/operators';

@Injectable()
export class ProjectsService {
  getProjects(): Observable<ProjectModel[]> {
    return of(PROJECTS_MOCK).pipe(delay(600));
  }
}
