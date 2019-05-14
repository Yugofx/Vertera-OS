import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Breakpoints } from '../../shared';

@Injectable({
  providedIn: 'root',
})
export class DimensionService {
  private breakpointStream = new BehaviorSubject<Breakpoints>(null);
  private resizeStream = new Subject();

  constructor() {
    this.updateBreakpoint();
  }

  emitResizeEvent() {
    this.resizeStream.next();
  }

  getBreakpointStream() {
    return this.breakpointStream;
  }

  getResizeStream() {
    return this.resizeStream;
  }

  updateBreakpoint() {
    if (window.innerWidth <= 575) {
      this.setBreakpoint(Breakpoints.XS);
    } else if (window.innerWidth < 768 && window.innerWidth > 575) {
      this.setBreakpoint(Breakpoints.SM);
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
      this.setBreakpoint(Breakpoints.MD);
    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      this.setBreakpoint(Breakpoints.LG);
    } else {
      this.setBreakpoint(Breakpoints.XL);
    }
  }

  private setBreakpoint(bp: Breakpoints) {
    this.breakpointStream.next(bp);
  }
}
