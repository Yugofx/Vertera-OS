import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../../cart/services/cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'os-order-confirm',
  templateUrl: './order-confirm.html',
  styleUrls: ['./order-confirm.scss'],
})
export class OrderConfirmComponent implements OnInit {
  details: any;
  cart: any;
  totals: any;

  constructor(private orderService: OrderService, private cartService: CartService, private location: Location) {}

  ngOnInit() {
    this.cart = this.cartService.getAll();
    this.details = this.orderService.getDetails();
    this.totals = this.cartService.getSummary();
  }

  back() {
    this.location.back();
  }

  pay() {
    alert('pay');
  }
}
