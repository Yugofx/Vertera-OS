import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { CardModule } from './components/card/card.module';
import { TableModule } from './components/table/table.module';
import { TabsModule } from './components/tabs/tabs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SHARED_COMPONENT, SHARED_PIPE } from './shared';
import { MatDatepickerModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CardModule,
    TabsModule,
    ClickOutsideModule,
    MatDatepickerModule,
  ],
  declarations: [
    SHARED_PIPE,
    SHARED_COMPONENT,
  ],
  exports: [
    SHARED_PIPE,
    SHARED_COMPONENT,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CardModule,
    TabsModule,
    MatDatepickerModule,
  ],
})
export class SharedModule {}
