import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Directive({
  selector: 'os-card[widget]',
  host: {
    'class': '-widget',
  },
})
export class OsCardWidget {
}

@Directive({
  selector: 'os-card[dark]',
  host: {
    'class': '-dark',
  },
})
export class OsCardDarkTheme {
}

@Component({
  selector: 'os-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
  host: {
    'class': 'os-card',
    '[class.-divided]': 'divided',
    '[class.-error]': 'error',
    '[class.-mobile-free]': 'openBordersOnMobile',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsCard {
  @Input() divided = false;
  @Input() error = false;
  @Input() openBordersOnMobile: false;
}
