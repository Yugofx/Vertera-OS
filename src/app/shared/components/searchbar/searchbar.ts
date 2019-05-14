import {Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'os-searchbar',
  templateUrl: './searchbar.html',
  styleUrls: ['./searchbar.scss'],
})
export class OsSearchbar implements OnDestroy {
  @Input('placeholder') placeholder = 'Введите название...';
  @Output() search = new EventEmitter<string>();
  @ViewChild('search') sear: ElementRef;
  searchChange = new Subject<string>();

  _onClick(q: string) {
    this.search.emit(q);
    this.searchChange.next(q);
  }

  resetValue() {
    this.sear.nativeElement.value = '';
  }

  ngOnDestroy() {
    this.searchChange.complete();
  }
}
