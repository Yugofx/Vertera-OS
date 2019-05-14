import { Component } from '@angular/core';
import * as R from 'ramda';
import { FOOTER_CONFIG } from './constant';
import { IFooterConfig } from './interface';

@Component({
  selector: 'os-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly footerConf: IFooterConfig = R.clone(FOOTER_CONFIG);

  prefixWith(prefix, url) {
    return `${prefix}:${url}`;
  }
}
