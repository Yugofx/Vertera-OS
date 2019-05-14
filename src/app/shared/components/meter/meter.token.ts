import { IValidators } from './meter.interfaces';
import { InjectionToken } from '@angular/core';

export const METER_TOKEN = new InjectionToken<IValidators>('pwd-validation.token');
