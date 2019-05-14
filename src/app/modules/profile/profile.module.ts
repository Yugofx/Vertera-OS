import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';
import { ProfileRoutingModule } from './profile.router';
import { PROFILE_COMPONENT, PROFILE_ENTRYCOMPONENT } from './component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
  ],
  declarations: [
   PROFILE_COMPONENT
  ],
  entryComponents: [
    PROFILE_ENTRYCOMPONENT
  ],
})
export class ProfileModule {}
