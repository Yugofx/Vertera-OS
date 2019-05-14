import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HistoryService } from './history.service';

@Injectable()
export class HistoryResolver implements Resolve<any> {
  constructor(private _history: HistoryService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._history.getOrder(route.params['id']);
  }
}
