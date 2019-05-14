import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  OsCard,
  OsCardDarkTheme,
  OsCardWidget,
} from './card';

const EXPORT_DECLARATIONS = [
  OsCard,
  OsCardDarkTheme,
  OsCardWidget,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: EXPORT_DECLARATIONS,
  exports: EXPORT_DECLARATIONS,
})
export class CardModule {}
