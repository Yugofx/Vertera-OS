import { Component, OnInit } from '@angular/core';
import { ILanguage, languages } from '../../constant';
import * as R from 'ramda';
import { DimensionService, UtilsService } from '../../../../services';
import { Breakpoints, StorageKeys } from '../../../../shared';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'os-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss'],
})
export class LangSelectorComponent implements OnInit {
  readonly languages: ILanguage[] = R.clone(languages);
  readonly activeLanguage: ILanguage = this.languages.find(lang => lang.code === this._util.getLanguage()) || this.languages[0];
  label$: Observable<string>;

  constructor(private dimensionService: DimensionService, private _util: UtilsService) {}

  ngOnInit() {
    this.label$ = this.dimensionService
      .getBreakpointStream()
      .pipe(map(b => b === Breakpoints.XS
        ? this.activeLanguage.shortLabel
        : this.activeLanguage.fullLabel
      ));
  }

  setActiveLanguage(code: string): void {
    const currentLang = localStorage.getItem(StorageKeys.USE_LANGUAGE);
    if (currentLang !== code) {
      localStorage.setItem(StorageKeys.USE_LANGUAGE, code);
      window.location.reload();
    }
  }
}
