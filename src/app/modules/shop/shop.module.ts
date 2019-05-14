import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { ShopRouterModule } from './shop.router';
import { ShopComponent } from './shop';
import { ItemIdResolveService } from '../item/services/item-id.resolver';
import { ItemService } from '../item/services/item.service';
import { CartService } from '../cart/services/cart.service';
import { OfficeService } from './components/office/service';
import { OrderService } from '../order/services/order.service';
import { OfficeComponent } from './components/office/office';
import { ShopCommonModule } from './components/shop-common.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ShopRouterModule, SharedModule, ShopCommonModule, HttpClientModule],
  declarations: [ShopComponent, OfficeComponent],
  providers: [ItemIdResolveService, ItemService, CartService, OfficeService, OrderService],
})
export class ShopModule {}
