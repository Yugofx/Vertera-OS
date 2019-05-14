import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { OFFICE_MOCK } from '../office.mock';
import { OfficeModel } from '../model';


@Injectable()
export class OfficeService {
  private cache = {};
  selectedOffice: OfficeModel;

  getOffice(id: string): Observable<OfficeModel> {
    if (this.cache[id]) {
      return of(this.cache[id]); // emits value immediately from temporary cache
    }

    const office = OFFICE_MOCK.find(off => off.id === +id);
    if (office) {
      this.cache[id] = office;
      return of(new OfficeModel(office)).pipe(
        delay(1000), // simulates backend response delay
      );
    }
    return of(null);
  }

  getAllOffices(): Observable<OfficeModel[]> {
    return of(OFFICE_MOCK.map(o => new OfficeModel(o)));
  }

  selectOffice(office: OfficeModel) {
    this.selectedOffice = office;
  }

  getSelectedOffice(): OfficeModel {
    return this.selectedOffice || OFFICE_MOCK[0];
  }
}
