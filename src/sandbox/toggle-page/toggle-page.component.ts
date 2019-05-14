import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'os-toggle-page',
  templateUrl: './toggle-page.component.html',
  styleUrls: ['../common.scss'],
})
export class TogglePageComponent {
  toggle = new FormControl(false);
}
