import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

const map = {
  'RUB': 'ru-RU',
'USD': 'en-Us',
};

@Pipe({
  name: 'localazeCurrency',
})
export class LocalazeCurrencyPipe implements PipeTransform {
  transform(value: any, currencyCode: string = 'USD',
            symbolDisplay: boolean = false, digits: string = null): string {
    return new CurrencyPipe(map[currencyCode]).transform(value, currencyCode, symbolDisplay, digits);
  }

}
