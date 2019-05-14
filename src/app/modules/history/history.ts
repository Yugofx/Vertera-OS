import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { flatMap, map, takeUntil, tap } from 'rxjs/operators';
import { Breakpoints } from '../../shared';
import { DimensionService } from '../../services';
import { HistoryService } from './services/history.service';
import { Router } from '@angular/router';
import { IMarkerHistory } from './interfaces';

@Component({
  selector: 'os-history',
  templateUrl: './history.html',
  styleUrls: ['./history.scss'],
})
export class HistoryComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['created_at', 'id', 'composition', 'total', 'status'];
  isSmOrLess$: Observable<any>;
  public items$ = new BehaviorSubject<IMarkerHistory[]>([]);
  page: number = 0;
  limit: number = 10;
  private filterStream = new BehaviorSubject<any>(null);
  private _unsubAll = new Subject();

  constructor(
    private _historyService: HistoryService,
    private _dimensionService: DimensionService,
    private _router: Router,
  ) {
  }

  ngOnInit() {
    this.isSmOrLess$ = this._dimensionService.getBreakpointStream().pipe(
      map(b => b === Breakpoints.XS || b === Breakpoints.SM),
    );
  }

  ngAfterViewInit() {
    this.filterStream.pipe(
      takeUntil(this._unsubAll),
      flatMap(filter => this._historyService.getHistory(this.setLimitandOffsetFilter(filter))),
    ).subscribe(data => {
      this.page += 1;
      this.items$.next(data);
    });
  }

  openOrder(id: number) {
    this._router.navigate(['shop', 'history', id]);
  }

  onChangeFilter(ev) {
    this.page = 0;
    this.filterStream.next(ev);
  }

  loadMore() {
    this.page += 1;
    this._historyService.getHistory(this.setLimitandOffsetFilter(this.filterStream.getValue())).pipe(
      takeUntil(this._unsubAll),
      tap(value => {
        this.items$.next([...this.items$.getValue(), ...value]);
      }),
    ).subscribe();
  }

  trackById(index, item) {
    return item._id;
  }

  ngOnDestroy(): void {
    this._unsubAll.next();
    this._unsubAll.complete();
  }

  private setLimitandOffsetFilter(filter) {
    filter.page = this.page;
    filter.limit = this.limit;
    return filter;
  }
}
