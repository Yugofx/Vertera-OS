import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop';
import { ItemIdResolveService } from '../item/services/item-id.resolver';
import { OfficeComponent } from './components/office/office';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'office',
      },
      {
        path: 'office',
        component: OfficeComponent,
      },
      {
        path: 'history',
        loadChildren: '../history/history.module#HistoryModule',
      },
      {
        path: 'catalog',
        loadChildren: '../catalog/catalog.module#CatalogModule',
      },
      {
        path: 'item/:id',
        loadChildren: '../item/item.module#ItemModule',
        resolve: {
          item: ItemIdResolveService,
        },
      },
      {
        path: 'cart',
        loadChildren: '../cart/cart.module#CartModule',
      },
      {
        path: 'order',
        loadChildren: '../order/order.module#OrderModule',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRouterModule {}
