import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IMarkerHistory, IHistoryRecord } from '../interfaces';
import { HISTORY_RECORD_MOCK, HISTORY_LIST_MOCK, STATUS_MOCK } from '../mocks';
import * as R from 'ramda';
import { UtilsService } from '../../../services';
import { ICartSummary } from '../../cart/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private utilsService: UtilsService) {}

  public getHistory(filter): Observable<IMarkerHistory[]> {
    return of(HISTORY_LIST_MOCK).pipe(delay(1000));
  }

  public getOrder(id: number): Observable<IHistoryRecord> {
    return of(HISTORY_RECORD_MOCK).pipe(delay(1000));
  }

  public getStatus() {
    return of(STATUS_MOCK).pipe(delay(1000));
  }

  public getSummary(list): ICartSummary {
    const summarizeInList = R.curry(this.utilsService.summarizeList)(list);
    return {
      price: summarizeInList(['price', 'total']),
      cpv: summarizeInList(['points', 'cpv']),
      bpv: summarizeInList(['points', 'bpv']),
    };
  }
}
