import { Subject } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class BaseUnsubscribe implements OnDestroy {
  destroy = new Subject();

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
