import { Injectable } from '@angular/core';
import { StorageKeys } from '../../shared';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public getLanguage(): string {
    return localStorage.getItem(StorageKeys.USE_LANGUAGE) || navigator.language.split('-')[0];
  }

  public isRootActive(root: string, url: string): boolean {
    return !url.replace(root, '');
  }

  public summarizeList(list: any[], lens: string[]) {
    const lensOn = prop => R.view(R.lensPath(prop));
    const totalOfOne = (arr, prop) => arr.map(el => prop(el) * el.count);
    const sumAll = R.curry(R.compose(R.sum, totalOfOne))(list);

    const property = lensOn(lens);

    return sumAll(property);
  }
}
