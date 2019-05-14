import { Component } from '@angular/core';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';

@Component({
  selector: 'os-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['../common.scss'],
})
export class TabsPageComponent {
  one = TabOneComponent;
  two = TabTwoComponent;

  component: TabOneComponent | TabTwoComponent;

  onTabChanges(component) {
    this.component = component;
  }
}
