import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { defer, merge, Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'os-tab-template',
  template: '<div class="tab-template" [innerHTML]="template"></div>',
  styleUrls: ['./tabs.scss'],
  host: {
    class: 'os-tab-template',
  },
  encapsulation: ViewEncapsulation.None,
})
export class OsTabTemplate {
  @Input() template: string;
}

@Component({
  selector: 'os-tab',
  template: '<ng-content></ng-content>',
  styleUrls: ['./tabs.scss'],
  host: {
    '[class.-selected]': 'selected',
    '(click)': 'select()',
  },
})
export class OsTab<T> implements AfterViewInit, OnDestroy {
  @Input() template: any;
  @Input() componentRef: Type<T>;
  @Input() selected: boolean;
  tabChanges = new Subject<any>();

  ngAfterViewInit() {
    if (!this.componentRef && !this.template) {
      throw new Error('Please, provide any component to render');
    }
  }

  select() {
    if (!this.selected) {
      this.selected = true;
      this.tabChanges.next(this.componentRef || this.template);
    }
  }

  unselect() {
    if (this.selected) {
      this.selected = false;
      this.tabChanges.next(null);
    }
  }

  ngOnDestroy() {
    this.tabChanges.complete();
  }
}

@Component({
  selector: 'os-tabs',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],
})
export class OsTabs<T> implements AfterContentInit, OnDestroy {
  destroy = new Subject();

  @ViewChild('container', { read: ViewContainerRef }) vcr: ViewContainerRef;
  @ContentChildren(OsTab) tabList: QueryList<OsTab<T>>;
  @Output() tabChanges = new EventEmitter<T>();
  activeTab: OsTab<T>;
  renderedComponent: ComponentRef<T>;
  readonly onTabChanges: Observable<any> = defer(() => {
    return merge(...this.tabList.map(tab => tab.tabChanges));
  });

  constructor(private componentFactory: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    this.checkDublicates();
    this.initFirst();
    this.onTabChanges
      .pipe(
        takeUntil(this.destroy),
        filter(v => !!v),
      )
      .subscribe((embedded: Type<T> | string) => {
        this.switchTab(embedded);
        this.renderTabComponent();
        this.tabChanges.emit(this.renderedComponent.instance);
      });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
    if (this.renderedComponent) {
      this.renderedComponent.destroy();
    }
  }

  switchTab(embedded: Type<T> | string) {
    const prop = typeof embedded === 'string' ? 'template' : 'componentRef';
    this.activeTab.unselect();
    this.activeTab = this.tabList.find(tab => tab[prop] === embedded);
    this.activeTab.select();
  }

  renderTabComponent() {
    if (this.activeTab) {
      if (this.renderedComponent) {
        this.renderedComponent.destroy();
      }
      this.vcr.clear();
      if (this.activeTab.componentRef) {
        const factory = this.componentFactory.resolveComponentFactory(this.activeTab.componentRef);
        this.renderedComponent = this.vcr.createComponent(factory);
      } else {
        const factory = this.componentFactory.resolveComponentFactory(OsTabTemplate);
        this.renderedComponent = this.vcr.createComponent(factory) as any;
        (this.renderedComponent.instance as any).template = this.activeTab.template;
      }
    }
  }

  private initFirst() {
    if (this.tabList.length) {
      const initiallySelected = this.tabList.find(tab => tab.selected);
      this.activeTab = initiallySelected ? initiallySelected : this.tabList.first;
      this.activeTab.select();
      this.renderTabComponent();
      this.tabChanges.emit(this.renderedComponent.instance);
    }
  }

  private checkDublicates() {
    this.tabList.reduce((acc, tab) => {
      if (acc.find(c => tab.componentRef === c)) {
        throw new Error('Two or more tabs contain the same component reference');
      } else {
        return acc.concat(tab.componentRef);
      }
    }, []);
  }
}
