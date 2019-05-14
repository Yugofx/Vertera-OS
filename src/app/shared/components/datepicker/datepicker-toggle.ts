import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatDatepickerToggle } from '@angular/material';

@Component({
  selector: 'os-datepicker-toggle',
  templateUrl: './datepicker-toggle.html',
  styleUrls: ['./datepicker.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsDatepickerToggle<T> extends MatDatepickerToggle<T> {}
