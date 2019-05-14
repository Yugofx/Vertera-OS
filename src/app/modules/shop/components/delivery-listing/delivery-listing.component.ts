import { Component, Input } from '@angular/core';

@Component({
  selector: 'os-delivery-listing',
  templateUrl: './delivery-listing.component.html',
  styleUrls: ['./delivery-listing.component.scss'],
})
export class DeliveryListingComponent {
  @Input() details: any;

  get address(): string {
    if (!this.details) {
      return '';
    }
    const { country, city, zip, street, building, apartment } = this.details;
    return [country, city, zip, street, building, apartment].join(', ');
  }
}
