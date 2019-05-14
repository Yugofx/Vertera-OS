import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { CartRouter } from './cart.router';
import { CartComponent } from './cart';
import { ShopCommonModule } from '../shop/components/shop-common.module';

@NgModule({
  imports: [SharedModule, CartRouter, ShopCommonModule],
  declarations: [CartComponent],
})
export class CartModule {}
