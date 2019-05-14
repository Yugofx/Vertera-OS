import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  METER_TOKEN,
} from './meter.token';
import { IValidators } from './meter.interfaces';
import {
  BASIC_VALIDATORS,
  STRENGTH_STATUS
} from './meter.config';

@Component({
  selector: 'os-meter',
  templateUrl: './meter.html',
  styleUrls: ['./meter.scss'],
  providers: [
    { provide: METER_TOKEN, useValue: BASIC_VALIDATORS },
  ]
})
export class OsMeter implements OnInit, OnChanges {
  @Input() value = '';
  @Input() viewBar = true;
  width: number;
  status: STRENGTH_STATUS = STRENGTH_STATUS.WEAK;

  constructor(@Inject(METER_TOKEN) public validators: IValidators[]) {}

  ngOnInit() {}
  
  ngOnChanges(changes: SimpleChanges) {
    const { value } = changes;
    if (value) {
      this.updateConfig(value.currentValue);
      this.width = this.getWidth(this.validators);
      this.status = this.getStatus(this.width);
    }
  }
  
  updateConfig(value: string) {
    this.validators.forEach(validator => {
      validator.passed = validator.pattern.test(value);
    });
  }
  
  getWidth(validators): number {
    return validators
      .filter(validator => validator.passed)
      .reduce((acc, validator) => (acc + validator.value), 0);
  }
  
  getStatus(total: number): STRENGTH_STATUS {
    if (total < 50) {
      return STRENGTH_STATUS.WEAK;
    } else if (total < 75) {
      return STRENGTH_STATUS.AVERAGE;
    } else {
      return STRENGTH_STATUS.STRONG;
    }
  }
}
