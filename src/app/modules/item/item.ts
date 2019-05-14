import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from './models/item.model';
import { DimensionService } from '../../services';
import { Observable } from 'rxjs';
import { Breakpoints } from '../../shared/enums';
import { map } from 'rxjs/operators';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'os-item',
  templateUrl: './item.html',
  styleUrls: ['./item.scss'],
})
export class ItemComponent implements OnInit {
  item: ItemModel;
  isXS$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private dimensionService: DimensionService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.isXS$ = this.dimensionService
      .getBreakpointStream()
      .pipe(map(b => b === Breakpoints.XS));
    this.route.data
      .pipe(
        map(data => {
          const item = this.cartService.getById(data.item.id);
          if (item) {
            data.item.count = item.count;
          }
          return data.item;
        }),
      )
      .subscribe((item: ItemModel) => (this.item = item));
  }

  onCounterClick(count: number) {
    this.cartService.update(this.item.id, count);
  }
}
