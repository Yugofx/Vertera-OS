import {
  Directive,
  ElementRef,
  Input
} from '@angular/core';
import {
  CdkCell,
  CdkCellDef,
  CdkColumnDef,
  CdkFooterCell,
  CdkFooterCellDef,
  CdkHeaderCell,
  CdkHeaderCellDef,
} from '@angular/cdk/table';

@Directive({
  selector: '[osCellDef]',
  providers: [{ provide: CdkCellDef, useExisting: OsCellDef }]
})
export class OsCellDef extends CdkCellDef {
}

@Directive({
  selector: '[osHeaderCellDef]',
  providers: [{ provide: CdkHeaderCellDef, useExisting: OsHeaderCellDef }]
})
export class OsHeaderCellDef extends CdkHeaderCellDef {}

@Directive({
  selector: '[osFooterCellDef]',
  providers: [{ provide: CdkFooterCellDef, useExisting: OsFooterCellDef }]
})
export class OsFooterCellDef extends CdkFooterCellDef {
}

@Directive({
  selector: '[osColumnDef]',
  providers: [
    { provide: CdkColumnDef, useExisting: OsColumnDef },
  ],
})
export class OsColumnDef extends CdkColumnDef {
  @Input('osColumnDef') name: string;
  @Input() sticky: boolean;
  @Input() stickyEnd: boolean;
}

@Directive({
  selector: 'os-header-cell, th[os-header-cell]',
  host: {
    'class': 'os-header-cell',
    'role': 'columnheader',
  },
})
export class OsHeaderCell extends CdkHeaderCell {
  constructor(
    columnDef: CdkColumnDef,
    elementRef: ElementRef<HTMLElement>
  ) {
    super(columnDef, elementRef);
  }
}

@Directive({
  selector: 'os-footer-cell, td[os-footer-cell]',
  host: {
    'class': 'os-footer-cell',
    'role': 'gridcell',
  },
})
export class OsFooterCell extends CdkFooterCell {
  constructor(
    columnDef: CdkColumnDef,
    elementRef: ElementRef
  ) {
    super(columnDef, elementRef);
  }
}

@Directive({
  selector: 'os-cell, td[os-cell]',
  host: {
    'class': 'os-cell',
    'role': 'gridcell',
  },
})
export class OsCell extends CdkCell {
  constructor(
    columnDef: CdkColumnDef,
    elementRef: ElementRef<HTMLElement>
  ) {
    super(columnDef, elementRef);
  }
}
