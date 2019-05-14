import { Component, OnInit } from '@angular/core';
import { OfficeModel } from '../shop/components/office/model';
import { OfficeService } from '../shop/components/office/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from './services/order.service';
import * as moment from 'moment';

@Component({
  selector: 'os-order',
  templateUrl: './order.html',
  styleUrls: ['./order.scss'],
})
export class OrderComponent implements OnInit {
  public readonly addressControls = {
    country: this.fb.control('', Validators.required),
    city: this.fb.control('', Validators.required),
    zip: this.fb.control('', Validators.required),
    building: this.fb.control('', Validators.required),
    street: this.fb.control('', Validators.required),
    apartment: this.fb.control('', Validators.required),
  };

  isTakeAway: boolean;
  selectedOffice: OfficeModel;
  deliveryForm: FormGroup;

  orderInfo;

  constructor(
    private officeService: OfficeService,
    private orderService: OrderService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router,
  ) {}

  back() {
    this.location.back();
  }
  
  ngOnInit() {
    this.selectedOffice = this.officeService.getSelectedOffice();
    this.orderInfo = this.orderService.getOrderInfo();
    this.deliveryForm = this.fb.group({
      delivery_method: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      phone_number: this.fb.control('', [Validators.required]),
      comment: this.fb.control(''),
    });
    this.addAddressControls();
  }
  
  onDeliverySelect(value: any) {
    const isTakeAway = value === '1';
    if (this.isTakeAway !== isTakeAway) {
      this.isTakeAway = !this.isTakeAway;
      if (isTakeAway) {
        this.removeAddressControls();
      } else {
        this.addAddressControls();
      }
    }
  }
  
  sendOrderDetails() {
    this.orderService.save({
      ...this.deliveryForm.value,
      created_at: moment().format('DD.MM.YYYY'),
    });
    this.router.navigateByUrl('/shop/order/confirm');
  }

  private addAddressControls() {
    for (let control in this.addressControls) {
      if (!this.deliveryForm.controls[control]) {
        this.deliveryForm.addControl(control, this.addressControls[control]);
      }
    }
  }

  private removeAddressControls() {
    for (let control in this.addressControls) {
      if (this.deliveryForm.controls[control]) {
        this.deliveryForm.removeControl(control);
      }
    }
  }
}
