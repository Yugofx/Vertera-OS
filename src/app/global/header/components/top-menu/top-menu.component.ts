import { Component } from '@angular/core';
import { articles } from '../../constant';
import * as R from 'ramda';

@Component({
  selector: 'os-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent {
  readonly articles = R.clone(articles);
}
