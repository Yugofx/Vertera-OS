import { Component, Input } from '@angular/core';

@Component({
  selector: 'os-office-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  @Input() address;
}
