import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  CDK_TABLE_TEMPLATE,
  CdkTable
} from '@angular/cdk/table';

@Component({
  selector: 'os-table, table[os-table]',
  exportAs: 'osTable',
  template: CDK_TABLE_TEMPLATE,
  styleUrls: ['./table.scss'],
  host: {
    'class': 'os-table',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsTable<T> extends CdkTable<T> {}
