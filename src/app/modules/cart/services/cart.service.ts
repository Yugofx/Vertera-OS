import { Injectable } from '@angular/core';
import { CART } from '../mocks/cart.mock';
import { CartModel } from '../models/cart.model';
import { ICartSummary } from '../interfaces';
import { UtilsService } from '../../../services';
import * as R from 'ramda';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { IResponse } from '../../../shared/interfaces/response.interface';

@Injectable()
export class CartService {
  private _cart: CartModel[] = [];
  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  updateCartOnResponse(request: Observable<any>): Observable<CartModel[]> {
    return request.pipe(
      map((response: IResponse) => {
        const { products, currency } = response.data;
        return products.map(p => new CartModel(p, currency));
      }),
      tap(cart => (this._cart = cart)),
    );
  }

  getCart(): Observable<CartModel[]> {
    return this.updateCartOnResponse(this.http.get(`${environment.apiPath}/cart/list`));
  }

  getAll(): CartModel[] {
    return this._cart;
  }

  getSummary(): ICartSummary {
    const summarizeInCart = R.curry(this.utilsService.summarizeList)(this._cart);
    return {
      price: summarizeInCart(['price', 'total']),
      cpv: summarizeInCart(['points', 'cpv']),
      bpv: summarizeInCart(['points', 'bpv']),
    };
  }

  clear() {
    this._cart = [];
  }

  getById(id: string): CartModel {
    return this._cart.find(it => it.id === id);
  }

  deleteById(id: string) {
    // this.updateCartOnResponse(this.http.delete(`${environment.apiPath}/cart/delete`));
    const idx = this._cart.findIndex(it => it.id === id);
    if (idx > -1) {
      this._cart.splice(idx, 1);
    }
  }

  update(id, count) {
    // TODO: remove after adding backend
    const updatedItem = this.getById(id);
    if (updatedItem) {
      if (updatedItem.count === count) {
        return;
      }
      if (count < 1) {
        // TODO: delete operation
        this.deleteById(id);
      } else {
        // TODO: update operation
        // this.updateCartOnResponse(
        //   this.http.put(`${environment.apiPath}/cart/modify`, { product_id: id, qty: count })
        // );
        updatedItem.count = count;
      }
    } else {
      // TODO: Add operation
      // this.updateCartOnResponse(
      //   this.http.post(`${environment.apiPath}/cart/add`, { product_id: id, qty: count })
      // );
      const item = CART.find(el => el.id === id);
      if (item && count) {
        this._cart.push({ ...item, count });
      }
    }
  }
}
