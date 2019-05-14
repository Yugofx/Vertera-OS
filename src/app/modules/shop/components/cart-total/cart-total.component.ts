import { Component, Input } from '@angular/core';
import * as R from 'ramda';

@Component({
  selector: 'os-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent {
  @Input() delivery: number;
  @Input() totals: any;

  hasDelivery() {
    return !R.isNil(this.delivery);
  }
}
