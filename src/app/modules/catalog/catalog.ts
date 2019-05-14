import { Component, OnInit } from '@angular/core';
import { CatalogCardModel } from './models/catalog-card.model';
import { ViewTypes } from './components/view-switcher/view-switcher.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { CatalogService } from './services/catalog.service';
import { map, takeUntil } from 'rxjs/operators';
import { BaseUnsubscribe } from '../../shared';
import { CartModel } from '../cart/models/cart.model';
import { CartService } from '../cart/services/cart.service';

export interface IFilter {
  promotional?: boolean;
  query?: string;
  group_id?: string;
}

@Component({
  selector: 'os-catalog',
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.scss'],
})
export class CatalogComponent extends BaseUnsubscribe implements OnInit {
  private readonly defaultFilter: IFilter = { promotional: false, query: '', group_id: '' };
  private filterStream = new BehaviorSubject<IFilter>(this.defaultFilter);

  activeView: ViewTypes;
  items$: Observable<CatalogCardModel[]>;

  constructor(private catalogService: CatalogService, private cartService: CartService) {
    super();
  }

  ngOnInit() {
    this.filterStream
      .pipe(takeUntil(this.destroy))
      .subscribe(filter => {
        this.items$ = this.catalogService
          .getGoods(filter)
          .pipe(map(docs => docs.map(this.mapCount.bind(this))));
      });
  }

  onViewSwitch(view: ViewTypes) {
    this.activeView = view;
  }

  onPromotionSwitch(promotional: boolean) {
    this.onFilterChange('promotional', promotional);
  }

  onSearch(query: string) {
    this.onFilterChange('query', query);
  }

  onGroupSelect(group_id: string) {
    this.onFilterChange('group_id', group_id);
  }

  private onFilterChange(property: string, value: any) {
    if (this.filterStream.value[property] === value) {
      return;
    }
    this.filterStream.next({ ...this.filterStream.value, [property]: value });
  }

  private mapCount(doc) {
    const item = this.cartService.getById(doc.id);
    if (item) {
      doc.count = item.count;
    }
    return doc;
  }
}
