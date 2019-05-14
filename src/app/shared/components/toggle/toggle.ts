import { ChangeDetectionStrategy, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { OsCheckbox } from '../checkbox/checkbox';

const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OsToggle),
  multi: true,
};

@Component({
  selector: 'os-toggle',
  templateUrl: './toggle.html',
  styleUrls: ['../checkbox/checkbox.scss', './toggle.scss'],
  host: {
    class: 'os-toggle',
    '[class.-disabled]': 'disabled',
    '[id]': 'id',
  },
  providers: [VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OsToggle extends OsCheckbox {}
