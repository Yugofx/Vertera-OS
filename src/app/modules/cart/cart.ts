import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { DimensionService } from '../../services';
import { Breakpoints } from '../../shared/enums';
import { catchError, delay, map, take, tap } from 'rxjs/operators';
import { ICartSummary } from './interfaces';
import { CartModel } from './models/cart.model';
import { Router } from '@angular/router';
import { OrderService } from '../order/services/order.service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'os-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class CartComponent implements OnInit {
  dataSource: CartModel[];
  totals: ICartSummary;

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.dataSource = this.cartService.getAll();
    this.totals = this.cartService.getSummary();
    this.cartService
      .getCart()
      .pipe(
        tap(console.log),
        catchError((err, caught) => {
          console.log(err);
          return throwError(err);
        }),
      )
      .subscribe();
  }

  updateCount(updatedObj: { id: string; count: number }) {
    this.cartService.update(updatedObj.id, updatedObj.count);
    this.totals = this.cartService.getSummary();
  }

  placeOrder() {
    this.orderService
      .placeOrder()
      .pipe(
        take(1),
        delay(1000),
      )
      .subscribe(() => {
        this.router.navigateByUrl('/shop/order', {});
      });
  }
}
