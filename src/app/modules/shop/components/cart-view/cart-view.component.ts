import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints } from '../../../../shared/enums';
import { DimensionService } from '../../../../services';

@Component({
  selector: 'os-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent {
  @Input() withCounter: boolean = false;
  @Input() dataSource: any;

  @Output() onCounterClick = new EventEmitter();

  readonly displayedColumns = ['name', 'price', 'count', 'total'];
  isSmOrLess$ = this.dimensionService
    .getBreakpointStream()
    .pipe(
      map(bp => bp === Breakpoints.XS || bp === Breakpoints.SM),
    );

  constructor(private dimensionService: DimensionService) {}
  updateCount(id, newCount) {
    this.onCounterClick.emit({ id, count: newCount });
  }
}
