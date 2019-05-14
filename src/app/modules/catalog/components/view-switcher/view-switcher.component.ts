import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export enum ViewTypes {
  TILE = 'tile',
  ROW = 'row',
}

@Component({
  selector: 'os-view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.scss'],
  host: {
    class: 'view-switcher',
  },
})
export class ViewSwitcherComponent implements OnInit {
  activeView: ViewTypes = ViewTypes.TILE;
  @Output() onViewSwitch = new EventEmitter<ViewTypes>();

  ngOnInit() {
    this.onViewSwitch.emit(this.activeView);
  }

  onSwitch(view: string) {
    if (this.activeView === view) {
      return;
    }
    this.activeView = view as ViewTypes;
    this.onViewSwitch.emit(view as ViewTypes);
  }
}
