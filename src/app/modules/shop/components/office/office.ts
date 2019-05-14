import { Component, OnInit } from '@angular/core';
import { OfficeService } from './service';
import { Observable } from 'rxjs';
import { OfficeModel } from './model';
import { Router } from '@angular/router';

@Component({
  selector: 'os-office',
  templateUrl: './office.html',
  styleUrls: ['./office.scss'],
})
export class OfficeComponent implements OnInit {
  offices$: Observable<OfficeModel[]>;
  selectedOffice: OfficeModel;
  currencyCode: string;
  isDisabled: boolean;

  constructor(private officeService: OfficeService, private router: Router) {}

  ngOnInit() {
    this.offices$ = this.officeService.getAllOffices();
    this.updateDisableState();
  }

  setOffice(office) {
    this.officeService.getOffice(office).subscribe(this.updateSelectedOffice.bind(this));
  }

  updateSelectedOffice(selected) {
    this.selectedOffice = selected;
    this.currencyCode = null;
  }

  updateDisableState() {
    this.isDisabled = !(this.selectedOffice && this.currencyCode);
  }

  selectOffice() {
    this.officeService.selectOffice(this.selectedOffice);
    this.router.navigateByUrl('/shop/catalog');
  }
}
