import { IValidators } from './meter.interfaces';

export const enum STRENGTH_STATUS {
  STRONG = 'высокий',
  AVERAGE = 'средний',
  WEAK = 'низкий',
}

export const BASIC_VALIDATORS: IValidators[] = [
  {
    id: 'capitol',
    label: 'Хотя бы одна заглавная буква',
    pattern: /[A-Z]/,
    passed: false,
    value: 20,
    hidden: false,
  },
  {
    id: 'digit',
    label: 'Хотя бы одна цифра',
    pattern: /\d/,
    passed: false,
    value: 20,
    hidden: false,
  },
  {
    id: 'length7',
    label: 'Минимум 7 символов',
    pattern: /.{7,}/,
    passed: false,
    value: 20,
    hidden: false,
  },
  {
    id: 'specSymbols',
    label: 'Хотя бы один спец. символ',
    pattern: /[!@#$&*^%(){}\\?]/,
    passed: false,
    value: 30,
    hidden: true,
  },
  {
    id: 'length12',
    label: 'Минимум 12 символов',
    pattern: /.{12,}/,
    passed: false,
    value: 10,
    hidden: true,
  },
];
