import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRouter {}
