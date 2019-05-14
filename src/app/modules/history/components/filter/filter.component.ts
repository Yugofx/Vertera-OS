import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DimensionService } from '../../../../services';
import { Breakpoints } from '../../../../shared';
import { OsSearchbar } from '../../../../shared/components/searchbar/searchbar';
import { HistoryService } from '../../services/history.service';
import * as R from 'ramda';

@Component({
  selector: 'os-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @ViewChild(OsSearchbar) search: any;
  @Output() changeFilter = new EventEmitter<any>();
  public filter = {
    search: '',
    date: {
      from: null,
      to: null,
    },
    status: 0,
  };
  public status$: Observable<any>;
  public isPhone$: Observable<boolean>;
  private readonly _initialFilterValue = R.clone(this.filter);
  private _unsubAll = new Subject();

  constructor(
    private _dimensionService: DimensionService,
    private _historyService: HistoryService,
  ) {
  }

  ngOnInit() {
    this.status$ = this._historyService.getStatus();
    this.isPhone$ = this._dimensionService.getBreakpointStream().pipe(
      map(b => b === Breakpoints.XS));
    this.changeFilter.next(this.filter);
  }

  onStatusChange(ev) {
    this.filter.status = ev;
    this.changeFilter.next(this.filter);
  }

  onSearch($ev) {
    this.filter.search = $ev;
    this.changeFilter.next(this.filter);
  }

  onResetFilter() {
    this.filter = R.clone(this._initialFilterValue);
    this.search.resetValue();
    this.changeFilter.next(this.filter);
  }

  onDateChangeFrom($ev) {
    this.filter.date.from = $ev.value._d;
    this.changeFilter.next(this.filter);
  }

  onDateChangeTo($ev) {
    this.filter.date.to = $ev.value._d;
    this.changeFilter.next(this.filter);
  }

  ngOnDestroy(): void {
    this._unsubAll.next();
    this._unsubAll.complete();
  }
}
