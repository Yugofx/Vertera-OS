import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { ItemComponent } from '../item';
import { ItemService } from './item.service';
import { mergeMap, take } from 'rxjs/operators';

@Injectable()
export class ItemIdResolveService implements Resolve<ItemComponent> {
  // TODO: add item count data from cartService after implementing last said
  constructor(private itemService: ItemService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ItemComponent> | Observable<never> {
    const id = route.params.id;

    return this.itemService.getItem(id).pipe(
      take(1),
      mergeMap(item => {
        if (!item) {
          this.router.navigate(['shop', 'catalog']);
          return EMPTY;
        }
        return of(item);
      }),
    );
  }
}
