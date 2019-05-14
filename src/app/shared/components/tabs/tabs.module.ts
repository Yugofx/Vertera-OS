import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  OsTab,
  OsTabs, OsTabTemplate
} from './tabs';

const EXORT_DECLARATIONS = [
  OsTabs,
  OsTab,
  OsTabTemplate,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...EXORT_DECLARATIONS,
  ],
  exports: [
    ...EXORT_DECLARATIONS,
  ],
  entryComponents: [OsTabTemplate],
})
export class TabsModule {}
