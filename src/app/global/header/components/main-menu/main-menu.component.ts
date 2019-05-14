import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ISubmenu, submenu } from '../../constant';
import * as R from 'ramda';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { DimensionService } from '../../../../services';
import { Breakpoints } from '../../../../shared';

@Component({
  selector: 'os-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('menuContainer') menuContainer: ElementRef;
  private widthOnBreakpoints = [];
  private splitIndex: number;
  public expandedMenu: ISubmenu[] = [];
  public rollupMenu: ISubmenu[] = [];
  submenu: ISubmenu[] = this.expandedMenu = R.clone(submenu);

  public isTabletOrPhone$: Observable<boolean>;
  private destroy = new Subject();

  @HostListener('window:resize')
  private updateSize() {
    this.setMenuView();
  }

  constructor(private dimensionService: DimensionService) {}

  ngOnInit() {
    this.isTabletOrPhone$ = this.dimensionService
      .getBreakpointStream()
      .pipe(map(b => b === Breakpoints.XS || b === Breakpoints.SM));
    this.dimensionService
      .getResizeStream()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.setMenuView.bind(this));
  }

  ngAfterViewInit() {
    // Handle expressionChangedAfterCheck
    setTimeout(() => this.setMenuView());
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  trackByFn(index, item) {
    return item.link;
  }

  setMenuView() {
    if (!this.menuContainer) {
      return;
    }
    let containerEl = this.menuContainer.nativeElement;
    if (this.widthOnBreakpoints.length) {
      for (let i = 0; i < this.widthOnBreakpoints.length; i++) {
        if (this.widthOnBreakpoints[i] >= containerEl.clientWidth) {
          if (i !== this.splitIndex) {
            this.splitIndex = i;
            this.initMenuView(i);
          }
          break;
        }
      }
    } else {
      let computedWidth = containerEl.querySelector('li.white-drop').clientWidth;
      const items = containerEl.querySelectorAll('li:not(.white-drop)');
      for (let i = 0; i < items.length; i++) {
        const item = items[i].querySelector('a');
        computedWidth += item.clientWidth + parseInt(getComputedStyle(item).marginRight);
        this.widthOnBreakpoints.push(computedWidth);
        if (computedWidth >= containerEl.clientWidth) {
          this.splitIndex = i;
          this.initMenuView(i);
          break;
        }
      }
    }
  }

  private initMenuView(i: number): void {
    this.expandedMenu = this.submenu.slice(0, i - 1);
    this.rollupMenu = this.submenu.slice(i - 1);
  }
}
