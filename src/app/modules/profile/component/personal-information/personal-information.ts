import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { IUser } from '../../interface/IUser';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'os-personal-information',
  templateUrl: './personal-information.html',
  styleUrls: ['./personal-information.scss'],
})
export class PersonalInformationComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public userData: IUser;
  public progress = 0;

  private destroy = new Subject<any>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.isLoading = true;
    this.userService
      .getUser()
      .pipe(
        takeUntil(this.destroy),
        finalize(() => this.isLoading = false)
      )
      .subscribe((user: IUser) => {
        this.userData = user;
        this.setProgress(Object.keys(user).length);
      });
  }

  private setProgress(num: number): void {
    this.progress = (num * 100) / 10;
  }

  public get fullName(): string {
    if (!this.userData) {
      return;
    }
    return `${this.userData.lastName || ''} ${this.userData.firstName || ''} ${this.userData.mname || ''}`;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
