import { Component, Input } from '@angular/core';

@Component({
  selector: 'os-colorbar',
  templateUrl: './colorbar.html',
  styleUrls: ['./colorbar.scss'],
})
export class OsColorbar {
  _width = 0;
  @Input('progress')
  get width() {
    return this._width;
  }
  set width(width: any) {
    if (Number.isNaN(+width)) {
      console.error('Cannot convert provided input to valid number. Fallback to zero!');
      this._width = 0;
    } else {
      this._width = +width > 100 ? 100 : +width < 0 ? 0 : +width;
    }
  }
}
