import { NgModule } from '@angular/core';
import { ItemComponent } from './item';
import { SharedModule } from '../../shared';
import { ItemRouter } from './item.router';

@NgModule({
  imports: [SharedModule, ItemRouter],
  declarations: [ItemComponent],
})
export class ItemModule {}
