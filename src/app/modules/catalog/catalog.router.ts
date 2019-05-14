import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRouter {}
