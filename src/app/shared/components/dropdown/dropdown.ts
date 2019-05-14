import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ClickOutsideDirective } from 'ng-click-outside';

@Component({
  selector: 'os-dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.scss'],
  host: {
    'class': 'dropdown',
    '[class.-opened]': 'isOpened',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsDropdown {
  @ViewChild(ClickOutsideDirective, { read: ElementRef }) listRef: ElementRef;
  @Input() labelIcon: string | null = null;
  @Input() label: string;
  
  isOpened = false;
  
  public toggle() {
    this.isOpened ? this.close() : this.open();
  }
  
  public close() {
    this.isOpened = false;
  }
  
  public open() {
    this.isOpened = true;
  }
  
  onClickOutside(event) {
    if (!this.isOpened) {
      return;
    }
    const clickedLabel = event.target.closest('.dropdown-label');
    // Skip if parental label was clicked
    if (clickedLabel && clickedLabel.parentNode === this.listRef.nativeElement.parentNode) {
      return;
    }
    this.close();
  }
}
