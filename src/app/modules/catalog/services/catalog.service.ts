import { Injectable } from '@angular/core';
import { CatalogCardModel } from '../models/catalog-card.model';
import { Observable, of } from 'rxjs';
import { CATALOG_MOCK, CATEGORIES_MOCK } from '../mocks';
import { delay } from 'rxjs/operators';
import { IFilter } from '../catalog';
import * as R from 'ramda';

@Injectable()
export class CatalogService {
  getGoods(filter?: IFilter): Observable<CatalogCardModel[]> {
    return of(
      R.clone(CATALOG_MOCK)
        .filter(item => (filter.promotional ? item.in_promotion : true))
        .filter(item => (filter.query ? item.name.toLowerCase().includes(filter.query.toLowerCase()) : true))
        .filter(item => (filter.group_id ? item.group_id === filter.group_id : true))
      )
      .pipe(delay(600));
  }

  getCategories() {
    return of(CATEGORIES_MOCK).pipe(delay(600));
  }
}
