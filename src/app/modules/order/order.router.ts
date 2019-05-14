import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderComponent } from './order';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
  },
  {
    path: 'confirm',
    component: OrderConfirmComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRouter {}
