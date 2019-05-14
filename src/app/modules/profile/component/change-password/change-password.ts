import { Component, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'os-change-password',
  templateUrl: './change-password.html',
  styleUrls: ['./change-password.scss'],
})
export class ChangePasswordComponent {
  public isOldPasswordValidated = false;
  public isNewPasswordValidated = false;

  oldForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
  });
  newForm = new FormGroup({
    newPassword: new FormControl(
      '',
      [Validators.required, Validators.pattern(/(?=.*[A-Z])(?=.*[\d])(.{7,})/)]),
  });

  constructor(private _render: Renderer2, private _user: UserService) {}

  togglePassword(el): void {
    const element = el as HTMLElement;
    const type = element.getAttribute('type');
    this._render.setAttribute(element, 'type', type === 'password' ? 'password' : 'text');
  }

  checkOldPassword(form: FormGroup): void {
    this._user.checkOldPass(form.value.oldPassword).subscribe(res => {
      if (res) {
        this.isOldPasswordValidated = true;
      }
    });
  }

  checkNewPassword(form: FormGroup): void {
    this._user.checkNewPass(form.value.newPassword).subscribe(res => {
      if (res) {
        this.isNewPasswordValidated = true;
      }
    });
  }

  public back(): void {
    this.oldForm.reset();
    this.newForm.reset();
    this.isOldPasswordValidated = this.isNewPasswordValidated = false;
  }
}
