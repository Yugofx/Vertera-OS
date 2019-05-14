import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects';
import { SharedModule } from '../../shared';
import { ProjectsRouterModule } from './projects.router';
import { ProjectCardComponent } from './components/card/card.component';
import { ProjectsService } from './services/projects.service';

@NgModule({
  imports: [SharedModule, ProjectsRouterModule],
  declarations: [ProjectsComponent, ProjectCardComponent],
  providers: [ProjectsService],
})
export class ProjectsModule {}
