import { NgModule } from '@angular/core';
import { OrderComponent } from './order';
import { SharedModule } from '../../shared';
import { ShopCommonModule } from '../shop/components/shop-common.module';
import { OrderRouter } from './order.router';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm';

@NgModule({
  imports: [SharedModule, ShopCommonModule, OrderRouter],
  declarations: [OrderComponent, OrderConfirmComponent],
})
export class OrderModule {}
