import { Component } from '@angular/core';

@Component({
  selector: 'os-searchbar-page',
  templateUrl: './searchbar-page.component.html',
  styleUrls: ['../common.scss'],
})
export class SearchbarPageComponent {
  query = '';

  onSearch(query: string) {
    this.query = query;
  }
}
