import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { DimensionService } from '../../../../services';
import { Breakpoints } from '../../../../shared/enums';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface ICategory {
  group_id: string;
  label: string;
  count: number;
}

@Component({
  selector: 'os-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [];
  isLgAndWider$: Observable<boolean>;

  selectedId = '';
  @Output() select = new EventEmitter<string>();

  constructor(private catalogService: CatalogService, private dimensionService: DimensionService) {}

  ngOnInit() {
    this.isLgAndWider$ = this.dimensionService
      .getBreakpointStream()
      .pipe(map(b => b === Breakpoints.LG || b === Breakpoints.XL));
    this.catalogService.getCategories().subscribe(c => {
      const totalCount = c.reduce((total, cat) => total + cat.count, 0);
      this.categories.push(this.getSummaryOption(totalCount), ...c);
    });
  }
  
  onSelect(group_id: string) {
    this.selectedId = group_id;
    this.select.emit(group_id);
  }

  private getSummaryOption(count: number): ICategory {
    return { group_id: '', label: 'Все товары', count };
  }
}
