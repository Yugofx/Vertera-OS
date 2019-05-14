import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation
} from '@angular/core';
import {
  CDK_ROW_TEMPLATE,
  CdkFooterRow,
  CdkFooterRowDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkRow,
  CdkRowDef,
} from '@angular/cdk/table';

@Directive({
  selector: '[osHeaderRowDef]',
  providers: [{ provide: CdkHeaderRowDef, useExisting: OsHeaderRowDef }],
  inputs: [
    'columns: osHeaderRowDef',
    'sticky: osHeaderRowDefSticky'
  ],
})
export class OsHeaderRowDef extends CdkHeaderRowDef {
}

@Directive({
  selector: '[osFooterRowDef]',
  providers: [{ provide: CdkFooterRowDef, useExisting: OsFooterRowDef }],
  inputs: [
    'columns: osFooterRowDef',
    'sticky: osFooterRowDefSticky'
  ],
})
export class OsFooterRowDef extends CdkFooterRowDef {
}

@Directive({
  selector: '[osRowDef]',
  providers: [{ provide: CdkRowDef, useExisting: OsRowDef }],
  inputs: [
    'columns: osRowDefColumns',
    'when: osRowDefWhen'
  ],
})
export class OsRowDef<T> extends CdkRowDef<T> {
}

@Component({
  selector: 'os-header-row, tr[os-header-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'os-header-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'osHeaderRow',
  providers: [{ provide: CdkHeaderRow, useExisting: OsHeaderRow }],
})
export class OsHeaderRow extends CdkHeaderRow {
}

@Component({
  selector: 'os-footer-row, tr[os-footer-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'os-footer-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'osFooterRow',
  providers: [{ provide: CdkFooterRow, useExisting: OsFooterRow }],
})
export class OsFooterRow extends CdkFooterRow {
}

@Component({
  selector: 'os-row, tr[os-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'os-row',
    'role': 'row',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'worRow',
  providers: [{ provide: CdkRow, useExisting: OsRow }],
})
export class OsRow extends CdkRow {
}
