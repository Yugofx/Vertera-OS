import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { HistoryComponent } from './history';
import { HistoryRoutesModule } from './history.router';
import { FilterComponent } from './components/filter/filter.component';
import { RecordComponent } from './components/record/record';
import { HistoryResolver } from './services/history.resolver';
import { ShopCommonModule } from '../shop/components/shop-common.module';

@NgModule({
  imports: [SharedModule, HistoryRoutesModule, ShopCommonModule],
  declarations: [HistoryComponent, FilterComponent, RecordComponent],
  providers: [HistoryResolver],
})
export class HistoryModule {}
