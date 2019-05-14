import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared';
import { AddressComponent } from './address/address.component';
import { PillsComponent, RightAlignedPillsComponent } from './pills/pills.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CartTotalComponent } from './cart-total/cart-total.component';
import { DeliveryListingComponent } from './delivery-listing/delivery-listing.component';

const EXPORTS = [
  AddressComponent,
  PillsComponent,
  RightAlignedPillsComponent,
  CartViewComponent,
  CartTotalComponent,
  DeliveryListingComponent,
];

@NgModule({
  imports: [SharedModule],
  declarations: [...EXPORTS],
  exports: [...EXPORTS],
})
export class ShopCommonModule {}
