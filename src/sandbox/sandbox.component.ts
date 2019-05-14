import { Component } from '@angular/core';

@Component({
  selector: 'os-sandbox-root',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent {
  public routes = [
    { path: 'buttons', name: 'Button' },
    { path: 'cards', name: 'Cards' },
    { path: 'colorbar', name: 'Colorbar' },
    { path: 'datepicker', name: 'Datepicker' },
    { path: 'dropdown', name: 'Dropdown' },
    { path: 'meter', name: 'Meter' },
    { path: 'searchbar', name: 'Searchbar' },
    { path: 'select', name: 'Select' },
    { path: 'table', name: 'Table' },
    { path: 'tabs', name: 'Tabs' },
    { path: 'toggle', name: 'Toggle' },
  ];
}
