import { Component, Directive, Input } from '@angular/core';
import * as R from 'ramda';

@Component({
  selector: 'os-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.scss'],
})
export class PillsComponent {
  @Input() cpv: number;
  @Input() bpv: number;

  isSet(prop: number): boolean {
    return !R.isNil(prop);
  }
}

@Directive({
  selector: 'os-pills[right]',
  host: {
    class: '-right',
  },
})
export class RightAlignedPillsComponent {}
