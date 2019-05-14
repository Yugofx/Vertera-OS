import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../modules/profile/interface/IUser';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  test: IUser = {
    firstName: 'Анвар',
    mname: 'Иванович',
    lastName: 'Тагаев',
    id: 100,
    beginningWork: '21 июля 2017',
    referralLink: 'http://selltest.vertera.org/100',
    birthDay: '21.08.1990',
    number: '+7 997 756 46 85',
    email: 'anvar@mail.ru',
  };
  constructor(private http: HttpClient) {}

  me(): Observable<any> {
    return this.http.get('https://api.wr.market/v1/user/profile?expand=balances,balances.currency&fields=id,fname,mname,lname,image,email,ref,vlv_id,is_franchisee,is_guest,roles,quantity_data,balances.id,balances.sum,balances.currency_code,balances.currency.id,balances.currency.name,balances.currency.code,balances.currency.abbreviation,balances.currency.nominal,balances.currency.rate');
  }

  getUser(): Observable<IUser> {
    return of(this.test).pipe(
      delay(1000),
     );
  }

  checkOldPass(pass: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
     );
  }

  checkNewPass(pass: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
     );
  }
}
