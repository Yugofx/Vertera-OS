import { Component, Input, OnInit } from '@angular/core';
import { CatalogCardModel } from '../../models/catalog-card.model';
import { DimensionService } from '../../../../services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints } from '../../../../shared/enums';
import { CartService } from '../../../cart/services/cart.service';
import { CartModel } from '../../../cart/models/cart.model';

@Component({
  selector: 'os-catalog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    class: 'catalog-card',
    '[class.-row]': `view === 'row'`,
    '[class.-tile]': `view === 'tile'`,
  },
})
export class CardComponent implements OnInit {
  @Input() item: CatalogCardModel;
  @Input() view: 'row' | 'tile' = 'row';
  cart: CartModel[];

  isRowViewAndWindowXS$: Observable<boolean>;

  constructor(private dimensionService: DimensionService, private cartService: CartService) {}

  ngOnInit() {
    this.isRowViewAndWindowXS$ = this.dimensionService
      .getBreakpointStream()
      .pipe(map(b => b === Breakpoints.XS && this.view === 'row'));
  }
  
  onCounterChange(id, count) {
    this.cartService.update(id, count);
  }
}
