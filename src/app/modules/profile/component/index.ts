import { ProfileComponent } from '../profile';
import { PersonalInformationComponent } from './personal-information/personal-information';
import { ChangePasswordComponent } from './change-password/change-password';

const PROFILE_COMPONENT = [ProfileComponent, PersonalInformationComponent, ChangePasswordComponent];

const PROFILE_ENTRYCOMPONENT = [PersonalInformationComponent, ChangePasswordComponent];

export { PROFILE_COMPONENT, PROFILE_ENTRYCOMPONENT };
