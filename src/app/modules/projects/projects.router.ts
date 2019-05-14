import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRouterModule {}
