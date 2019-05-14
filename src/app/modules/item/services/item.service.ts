import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITEM_MOCK } from '../mocks/item.mock';
import * as R from 'ramda';

@Injectable()
export class ItemService {
  getItem(id: string): Observable<any> {
    return of(R.clone(ITEM_MOCK).find(item => item.id === id));
  }
}
