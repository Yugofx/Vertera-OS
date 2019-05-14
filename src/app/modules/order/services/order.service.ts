import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class OrderService {
  private _details: any;
  private readonly orderInfo = {
    id: (Math.random() * 100000).toFixed(),
    user: 'Брейво Юрий Александрович',
    system_email: 'yugofx@gmail.com',
  };

  getDetails() {
    return this._details;
  }

  getOrderInfo() {
    return this.orderInfo;
  }

  save(details) {
    this._details = { ...this.orderInfo, ...details };
  }

  clear() {
    this._details = null;
  }

  placeOrder() {
    return of(this.orderInfo);
  }
}
