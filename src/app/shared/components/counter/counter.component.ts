import { Component, Directive, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'os-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class OsCounter {
  private _count: number = 0;
  @Input()
  get count(): number {
    return this._count;
  }
  set count(value: number) {
    if (value <= 0) {
      this._count = 0;
    } else if (value > 9999) {
      this._count = 9999;
    } else {
      this._count = value;
    }
    this.change.emit(this.count);
  }

  @Output() change = new EventEmitter();

  decrement() {
    this.count -= 1;
  }

  increment() {
    this.count += 1;
  }
}

@Directive({
  selector: 'os-counter[no-icon]',
  host: {
    class: '-no-icon',
  },
})
export class OsNoIconCounter {}
