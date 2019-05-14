import { NgModule } from '@angular/core';
import { OsTable } from './table';
import { CdkTableModule } from '@angular/cdk/table';
import {
  OsCell,
  OsCellDef,
  OsColumnDef,
  OsFooterCell,
  OsFooterCellDef,
  OsHeaderCell,
  OsHeaderCellDef
} from './cell';
import {
  OsFooterRow,
  OsFooterRowDef,
  OsHeaderRow,
  OsHeaderRowDef,
  OsRow,
  OsRowDef
} from './row';
import { CommonModule } from '@angular/common';

const EXPORTED_DECLARATIONS = [
  OsTable,
  
  OsHeaderCellDef,
  OsHeaderRowDef,
  OsColumnDef,
  OsCellDef,
  OsRowDef,
  OsFooterCellDef,
  OsFooterRowDef,
  
  OsHeaderCell,
  OsCell,
  OsFooterCell,
  
  OsHeaderRow,
  OsRow,
  OsFooterRow,
];

@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
  ],
  exports: EXPORTED_DECLARATIONS,
  declarations: EXPORTED_DECLARATIONS,
})
export class TableModule {}
