import { Component } from '@angular/core';
import { PersonalInformationComponent } from './component/personal-information/personal-information';
import { ChangePasswordComponent } from './component/change-password/change-password';

@Component({
  selector: 'os-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
})
export class ProfileComponent {
  personalRef = PersonalInformationComponent;
  changePass = ChangePasswordComponent;
}
