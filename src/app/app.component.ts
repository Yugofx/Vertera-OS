import { Component, HostListener } from '@angular/core';
import { DimensionService } from './services';

@Component({
  selector: 'os-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostListener('window:resize')
  private onResize() {
    this.dimension.updateBreakpoint();
    this.dimension.emitResizeEvent();
  }

  constructor(private dimension: DimensionService) {}
}
