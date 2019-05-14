import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DimensionService } from '../../services';
import * as moment from 'moment';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints } from '../../shared';

@Component({
  selector: 'os-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  isWideScreen$: Observable<boolean>;
  currentTime$: Observable<any>;

  constructor(public dimension: DimensionService) {}

  ngOnInit() {
    moment.locale('ru');
    this.currentTime$ = timer(0, 1000).pipe(
      map(() => {
        return moment(new Date())
          .format('DD MMMM YYYY | HH:mm:ss')
          .replace('.', '');
      }),
    );
    this.isWideScreen$ = this.dimension.getBreakpointStream().pipe(
      map(b => b !== Breakpoints.XS && b !== Breakpoints.SM),
    );
  }
}
